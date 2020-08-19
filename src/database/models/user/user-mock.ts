// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';
import personMocks from '@database/models/person/mocks.json';

const timestamps = {
  createdAt: new Date(),
  updatedAt: new Date(),
};


const userMockWithPerson = {
  ...mocks,
    person: {
      ...personMocks,
      ...timestamps,
    },
}

const UserMock = dbMock.define('users');

UserMock.$queryInterface.$useHandler(function(query, queryOptions, done) {
  if (['findAll', 'findOrCreate'].includes(query)) return [UserMock.build(userMockWithPerson)];
  if (query === 'findOne') return UserMock.build(userMockWithPerson);
  if (query === 'findOrCreate') return [UserMock.build(userMockWithPerson)];
});

export const userMock = {
  User: UserMock,
}