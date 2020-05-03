import { Subject } from "rxjs";
import { Initializer } from "./interface";
import { initialize } from "./implementation";

const DoClickSubject = new Subject();
const DoRenderSubject = new Subject();
const OnInitializeSubject = new Subject();

Initializer.onInitialize = (cb: () => void) => {
  OnInitializeSubject.subscribe(cb);
};

Initializer.doRender = () => {
  DoRenderSubject.next();
};

initialize(() => OnInitializeSubject.next());
