import { Component, OnInit } from "@angular/core";
import { Emp } from "./domain/emp";
import { EmpService } from "./services/empservice";

export class PrimeCar implements Emp {
  constructor(public name?, public role?, public model?, public avail?) {}
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [EmpService],
})
export class AppComponent implements OnInit {
  displayDialog: boolean;

  emp: Emp = new PrimeCar();

  selectedCar: Emp;

  newCar: boolean;

  cars: Emp[];

  cols: any[];
  title: string;
  constructor(private carService: EmpService) {}

  ngOnInit() {
    this.carService.getCarsSmall().then((cars) => (this.cars = cars));
    this.title = "Conflux Applicaiton";
    this.cols = [
      { field: "name", header: "Name" },
      { field: "role", header: "Role" },
      { field: "model", header: "Model" },
      { field: "avail", header: "Availability(100)%" },
    ];
  }

  showDialogToAdd() {
    this.newCar = true;
    this.emp = new PrimeCar();
    this.displayDialog = true;
  }

  save() {
    const cars = [...this.cars];
    if (this.newCar) {
      cars.push(this.emp);
    } else {
      cars[this.findSelectedCarIndex()] = this.emp;
    }
    this.cars = cars;
    this.emp = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.findSelectedCarIndex();
    this.cars = this.cars.filter((val, i) => i !== index);
    this.emp = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.emp = { ...event.data };
    this.displayDialog = true;
  }

  findSelectedCarIndex(): number {
    return this.cars.indexOf(this.selectedCar);
  }
}
