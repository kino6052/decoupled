import { Subject } from "rxjs";
import { Interface } from "./interface";

const DoClickSubject = new Subject();
const DoRenderSubject = new Subject();

Interface.onClick = (cb: () => void) => {
  DoClickSubject.subscribe(cb);
};

Interface.doRender = () => {
  DoRenderSubject.next();
};

DoClickSubject.next();
