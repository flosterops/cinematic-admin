import { EReactionType } from '../app/model/product';

export class RequestUtils {
  origin: string = '';
  static HEADERS = { 'Content-type': 'application/json' };

  constructor(origin: string = 'http://localhost:3000') {
    this.origin = origin;
  }

  getProducts() {
    return `${this.origin}/products`;
  }

  getProduct(id: string) {
    return `${this.origin}/products/product/${id}`;
  }

  deleteProduct(id: string) {
    return `${this.origin}/products/${id}`;
  }

  reaction(id: string) {
    return `${this.origin}/products/reaction/${id}`;
  }

  tags() {
    return `${this.origin}/tag`;
  }

  deleteTag(tag: string) {
    return `${this.origin}/tag/${tag}`;
  }
}

export const requestUtils = new RequestUtils();
