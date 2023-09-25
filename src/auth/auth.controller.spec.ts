// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthController } from './auth.controller';
// import { AuthService } from './services/auth.service';
// import { SignupDto } from './dto/signup.dto';
// import { User } from './entities/user.entity';
// import { LoginDto } from './dto/login.dto';
// import { UserJwtResponse } from './interfaces/user-jwt.interface';
// import { UserService } from './services/users.service';
// import { JwtModule, JwtService } from '@nestjs/jwt';

// describe('AuthController', () => {
//   let authController: AuthController;
//   let authService: AuthService;

//   const userRepositoryMock = {
//     // Mock UserRepository methods as needed for your tests
//     findById: jest.fn(),
//     save: jest.fn(),
//     create: jest.fn(),
//     signIn: jest.fn(),
//   };

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [AuthController],
//       imports: [JwtModule],
//       providers: [
//         JwtService,
//         AuthService,
//         {
//           provide: UserService, // Use the actual UserService class
//           useValue: userRepositoryMock, // Provide the mock UserRepository implementation
//         },
//       ],
//     }).compile();

//     authController = module.get<AuthController>(AuthController);
//     authService = module.get<AuthService>(AuthService);
//   });

//   describe('signup', () => {
//     it('should create a new user and return it', async () => {
//       const signupDto: SignupDto = {
//         username: 'newuser',
//         email: 'newuser@example.com',
//         password: 'password',
//         phoneNumber: '',
//       };
//       const expectedUser: User = {
//         ...signupDto,
//         id: '123',
//         salt: '',
//         validatePassword: function (): Promise<boolean> {
//           throw new Error('Function not implemented.');
//         },
//         hasId: function (): boolean {
//           throw new Error('Function not implemented.');
//         },
//         save: function (): Promise<User> {
//           throw new Error('Function not implemented.');
//         },
//         remove: function (): Promise<User> {
//           throw new Error('Function not implemented.');
//         },
//         softRemove: function (): Promise<User> {
//           throw new Error('Function not implemented.');
//         },
//         recover: function (): Promise<User> {
//           throw new Error('Function not implemented.');
//         },
//         reload: function (): Promise<void> {
//           throw new Error('Function not implemented.');
//         },
//       };

//       authService.signUp = jest.fn().mockResolvedValue(expectedUser);

//       const result = await authController.signup(signupDto);

//       expect(result).toEqual(expectedUser);
//     });
//   });

//   describe('login', () => {
//     it('should return a JWT response on successful login', async () => {
//       const loginDto: LoginDto = {
//         email: 'user@example.com',
//         password: 'password',
//       };
//       const expectedResponse: UserJwtResponse = {
//         user: { ...loginDto, username: 'user' },
//         accessToken: 'mocked-access-token',
//       };

//       authService.login = jest.fn().mockResolvedValue(expectedResponse);

//       const result = await authController.login(loginDto);

//       expect(result).toEqual(expectedResponse);
//     });
//   });
// });
