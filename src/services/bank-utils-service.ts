export class BankUtilsService {
  removeDuplicate<T>(array: T[]): T[] {
    return [...new Set(array)];
  }
}
