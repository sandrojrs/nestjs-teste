import { Test, TestingModule } from '@nestjs/testing';
import { CollaboratorController } from './collaborator.controller';
import { CollaboratorService } from './collaborator.service';

describe('CollaboratorController', () => {
    let collaboratorController: CollaboratorController;
    let spyService: CollaboratorService;

    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: CollaboratorService,
            useFactory: () => ({
                getGpa: jest.fn(() => 4.5),
            }),
        };
        const collaborator: TestingModule = await Test.createTestingModule({
            controllers: [CollaboratorController],
            providers: [CollaboratorService, ApiServiceProvider],
        }).compile();

        collaboratorController = collaborator.get<CollaboratorController>(CollaboratorController);
        spyService = collaborator.get<CollaboratorService>(CollaboratorService);
    });

    describe('root', () => {
        it('should return "Hello World!"', async () => {
            expect(collaboratorController.findAll()).toBe({});
        });
    });
});