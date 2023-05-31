{
  /**
   * Intersection Type : &
   */

  type Student = {
    name: string;
    score: number;
  }
  type Worker = {
    empolyeeId: number;
    work: () => void;
  }
  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.score, person.work());
  }

  internWork({
    name: 'chance',
    score: 1,
    empolyeeId: 123,
    work: () => { },
  })
  
}