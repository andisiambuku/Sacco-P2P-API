// import { Test, TestingModule } from '@nestjs/testing';
// import { UserService } from './users.service';
// import { Repository } from 'typeorm';
// import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
// import { User } from '../entities/user.entity';
// import { ConfigService } from '@nestjs/config';
// const configService = new ConfigService();

// describe('UserService', () => {
//   let userService: UserService;
//   let userRepository: Repository<User>;
//   let module: TestingModule;

//   beforeEach(async () => {
//     module = await Test.createTestingModule({
//       imports: [
//         TypeOrmModule.forRootAsync({
//           useFactory: () => ({
//             type: 'postgres',
//             host: configService.get('TYPEORM_HOST'),
//             port: configService.get('TYPEORM_PORT'),
//             username: configService.get('TYPEORM_USERNAME'),
//             password: configService.get('TYPEORM_PASSWORD'),
//             database: configService.get('TYPEORM_DATABASE'),
//             entities: ['src/**/*.entity.ts'],
//             migrations: ['migrations/**/*{.ts,.js}'],
//           }),
//         }),
//         TypeOrmModule.forFeature([User]), // Provide the User entity for testing
//       ],
//       providers: [
//         UserService,
//         {
//           provide: getRepositoryToken(User), // Use getRepositoryToken to provide the repository
//           useClass: Repository, // Mock the actual TypeORM repository class
//         },
//       ],
//     }).compile();

//     userService = module.get<UserService>(UserService);
//     userRepository = module.get<Repository<User>>(getRepositoryToken(User));
//   });

//   describe('findById', () => {
//     it('should return a user by ID', async () => {
//       const userId = '123';
//       const user = new User();
//       user.id = userId;

//       userRepository.findOne = jest.fn().mockResolvedValue(user);

//       const result = await userService.findById(userId);

//       expect(result).toEqual(user);
//     });

//     it('should return null if no user is found', async () => {
//       const userId = '456';

//       userRepository.findOne = jest.fn().mockResolvedValue(null);

//       const result = await userService.findById(userId);

//       expect(result).toBeNull();
//     });
//   });

//   describe('create', () => {
//     it('should create a new user', async () => {
//       const signupDto = {
//         email: 'test@example.com',
//         password: 'password',
//         username: 'testuser',
//         phoneNumber: '123457891',
//       };

//       const user = new User();
//       user.email = signupDto.email;
//       user.password = 'hashedPassword'; // Mock the hashed password value

//       const userService: any = module.get<UserService>(UserService);

//       jest.spyOn(userService, 'hashPassword').mockResolvedValue(user.password);
//       userRepository.create = jest.fn().mockReturnValue(user);
//       userRepository.save = jest.fn().mockResolvedValue(user);

//       const result = await userService.create(signupDto);

//       expect(result).toEqual(user);
//     });
//   });

//   describe('signIn', () => {
//     it('should sign in a user with valid credentials', async () => {
//       const loginDto = {
//         email: 'test@example.com',
//         password: 'password',
//       };

//       const user = new User();
//       user.email = loginDto.email;
//       user.validatePassword = jest.fn().mockReturnValue(true);

//       userRepository.findOne = jest.fn().mockResolvedValue(user);

//       const result = await userService.signIn(loginDto);

//       // expect(result).toBeDefined();
//       // expect(result.username).toEqual(user.username);
//       // expect(result.email).toEqual(user.email);
//       expect(result).not.toBeNull(); // Ensure result is not null
//       expect(result?.username).toEqual(user.username); // Use the non-null assertion operator (!)
//       expect(result?.email).toEqual(user.email);
//     });

//     it('should return null for invalid credentials', async () => {
//       const loginDto = {
//         email: 'test@example.com',
//         password: 'password',
//       };

//       const user = new User();
//       user.email = loginDto.email;
//       user.validatePassword = jest.fn().mockReturnValue(false);

//       userRepository.findOne = jest.fn().mockResolvedValue(user);

//       const result = await userService.signIn(loginDto);

//       expect(result).toBeNull();
//     });

//     it('should return null if no user is found', async () => {
//       const loginDto = {
//         email: 'test@example.com',
//         password: 'password',
//       };

//       userRepository.findOne = jest.fn().mockResolvedValue(null);

//       const result = await userService.signIn(loginDto);

//       expect(result).toBeNull();
//     });
//   });
// });
