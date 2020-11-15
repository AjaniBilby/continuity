import { QMainWindow, QLabel, QScrollArea } from '@nodegui/nodegui';
const win = new QMainWindow();
const label = new QLabel();

label.setText(`Stable setup of NodeGUI`);

const scrollArea = new QScrollArea();

scrollArea.setWidget(label);
win.setCentralWidget(scrollArea);
win.show();

(global as any).win = win;
