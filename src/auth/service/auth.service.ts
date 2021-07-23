import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash, compare } from 'bcryptjs';
import { UserDb } from '../entities/user.entity';
import { JwtToken, UserCredentials } from '../models/auth.interface';
import { nanoid } from 'nanoid';
import { UserConstants } from 'src/constants/auth/auth.constants';
import { AppContants } from 'src/constants/app.contants';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserDb) private userRepo: Repository<UserDb>, private jwtService: JwtService) {}

  async register({ username, password }: UserCredentials): Promise<JwtToken> {
    const existingUser = await this.getUserByUsername(username);

    if (existingUser !== undefined) {
      throw new HttpException('Username already exists', HttpStatus.CONFLICT);
    } else {
      const hashedPassword = await hash(password, 10);

      const createdUser = this.userRepo.create({
        userId: nanoid(AppContants.NANO_ID_LENGTH),
        username,
        password: hashedPassword,
        createdBy: UserConstants.SYSTEM_USER,
        lastChangedBy: UserConstants.SYSTEM_USER,
      });

      await this.userRepo.insert(createdUser);

      return {
        accessToken: this.jwtService.sign({
          userId: createdUser.userId,
          username: createdUser.username,
        }),
      };
    }
  }

  async login({ username, password }: UserCredentials): Promise<JwtToken> {
    const existingUser = await this.getUserByUsername(username);

    if (existingUser === undefined) {
      throw new HttpException('Error finding user', HttpStatus.INTERNAL_SERVER_ERROR);
    } else {
      const { password: hashedPassword } = existingUser;

      if (await this.checkHashedPassword(password, hashedPassword)) {
        return {
          accessToken: this.jwtService.sign({
            userId: existingUser.userId,
            username: existingUser.username,
          }),
        };
      } else {
        throw new HttpException('Error logging in', HttpStatus.UNAUTHORIZED);
      }
    }
  }

  async getUserByUserId(userId: string) {
    return await this.userRepo.findOne({ where: { userId } });
  }

  async getUserByUsername(username: string) {
    return await this.userRepo.findOne({ where: { username } });
  }

  private async checkHashedPassword(password: string, hashedPassword: string) {
    return await compare(password, hashedPassword);
  }
}
