import type { Config } from '@jest/types'
import { defaults as presets } from 'ts-jest/presets'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const config: Config.InitialOptions = {
  rootDir: compilerOptions.baseUrl,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '.test.ts$',
  transform: presets.transform,
  globalSetup: '<rootDir>jest.setup.ts',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleDirectories: ['node_modules', 'src', 'test'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
}
export default config
