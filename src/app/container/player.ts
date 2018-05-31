export class Player {
  public name: string;
  public team: string;
  public goals: number;

  constructor(name: string, team: string, goals: number) {
    this.name = name;
    this.team = team;
    this.goals = goals;
  }

  toString() {
    return 'Player[ name = ' + this.name + '; team = ' + this.team + '; goals = ' + this.goals + ' ]';
  }
}
