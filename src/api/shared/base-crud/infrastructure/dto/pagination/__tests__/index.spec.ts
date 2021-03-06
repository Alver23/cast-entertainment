// Dependencies
import 'reflect-metadata';

// Dto's
import { PaginationQueryParamsDto } from "../index";

// Mocks
import { transformerPlainToClass } from "@mocks/plain-class";
jest.unmock('@api/shared/base-crud/infrastructure/dto/pagination');

describe('PaginationParamsDto', () => {

  it('should get the model of PaginationParamsDto', () => {
    const model = transformerPlainToClass(PaginationQueryParamsDto, { limit: 1, page: 1});
    expect(model)
      .toEqual(
        expect.objectContaining({
          limit: expect.any(Number),
          page: expect.any(Number),
        })
      )
  });
});
