import { AppLogo } from './AppLogo';
import { Counter } from './Counter';

export function AppHeader() {
  return (
    <header className="App-header">
      <AppLogo />
      <Counter />
    </header>
  );
}
