import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeDetectionStrategyService {

  private componentCounter: Map<string, number> = new Map();
  visualizationCounter = 0;
  constructor() { }

  getCallCounter(name: string): number {
    if (!this.componentCounter.has(name)) {
      this.componentCounter.set(name, 1);
    } else {
      this.componentCounter.set(name, this.componentCounter.get(name) + 1);
    }
    return this.componentCounter.get(name);
  }
}
