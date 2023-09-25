// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthService } from './auth.service';
// import { UserService } from './users.service';
// import { JwtService } from '@nestjs/jwt';
// import { UnauthorizedException } from '@nestjs/common';
// import { SignupDto } from '../dto/signup.dto';
// import { User } from '../entities/user.entity';
// import { LoginDto } from '../dto/login.dto';
// import { UserJwtResponse } from '../interfaces/user-jwt.interface';
// import { SaveOptions, RemoveOptions } from 'typeorm';

// describe('AuthService', () => {
//   let authService: AuthService;
//   let userService: UserService;
//   let jwtService: JwtService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         AuthService,
//         {
//           provide: UserService,
//           useValue: {
//             findById: jest.fn(),
//             create: jest.fn(),
//             signIn: jest.fn(),
//           },
//         },
//         {
//           provide: JwtService,
//           useValue: {
//             sign: jest.fn(),
//           },
//         },
//       ],
//     }).compile();

//     authService = module.get<AuthService>(AuthService);
//     userService = module.get<UserService>(UserService);
//     jwtService = module.get<JwtService>(JwtService);
//   });

//   describe('validateUserById', () => {
//     it('should return a user by ID', async () => {
//       const userId = '123';
//       const expectedUser = { id: userId, username: 'testuser' };

//       userService.findById = jest.fn().mockResolvedValue(expectedUser);

//       const result = await authService.validateUserById(userId);

//       expect(result).toEqual(expectedUser);
//     });
//   });

//   describe('signUp', () => {
//     it('should create a new user', async () => {
//       const signupDto: SignupDto = {
//         username: 'newuser',
//         email: 'newuser@example.com',
//         password: 'password',
//         phoneNumber: '',
//       };
//       const expectedUser = { ...signupDto, id: '456' };

//       userService.create = jest.fn().mockResolvedValue(expectedUser);

//       const result = await authService.signUp(signupDto);

//       expect(result).toEqual(expectedUser);
//     });
//   });

//   describe('login', () => {
//     it('should return a JWT response on successful login', async () => {
//       const loginDto: LoginDto = {
//         email: 'user@example.com',
//         password: 'password',
//       };
//       const userResult: User = {
//         id: '789',
//         email: loginDto.email,
//         username: 'user',
//         validatePassword: jest.fn().mockReturnValue(true),
//         phoneNumber: '',
//         password: '',
//         salt: '',
//         hasId: function (): boolean {
//           throw new Error('Function not implemented.');
//         },
//         save: function (options?: SaveOptions): Promise<User> {
//           throw new Error('Function not implemented.');
//         },
//         remove: function (options?: RemoveOptions): Promise<User> {
//           throw new Error('Function not implemented.');
//         },
//         softRemove: function (options?: SaveOptions): Promise<User> {
//           throw new Error('Function not implemented.');
//         },
//         recover: function (options?: SaveOptions): Promise<User> {
//           throw new Error('Function not implemented.');
//         },
//         reload: function (): Promise<void> {
//           throw new Error('Function not implemented.');
//         },
//       };
//       const expectedResponse: UserJwtResponse = {
//         user: userResult,
//         accessToken: 'mocked-access-token',
//       };

//       userService.signIn = jest.fn().mockResolvedValue(userResult);
//       jwtService.sign = jest
//         .fn()
//         .mockResolvedValue(expectedResponse.accessToken);

//       const result = await authService.login(loginDto);

//       expect(result).toEqual(expectedResponse);
//     });

//     it('should throw an UnauthorizedException on invalid credentials', async () => {
//       const loginDto: LoginDto = {
//         email: 'invalid@example.com',
//         password: 'invalid-password',
//       };

//       userService.signIn = jest.fn().mockResolvedValue(null);

//       await expect(authService.login(loginDto)).rejects.toThrowError(
//         UnauthorizedException,
//       );
//     });
//   });
// });
