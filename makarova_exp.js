/********************* 
 * Makarova_Exp *
 *********************/  

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'makarova_exp';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
    'gender ': ["female", "male"],
    'group': ["1", "2", "3"],
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instr_1RoutineBegin());
flowScheduler.add(instr_1RoutineEachFrame());
flowScheduler.add(instr_1RoutineEnd());
flowScheduler.add(instr_2RoutineBegin());
flowScheduler.add(instr_2RoutineEachFrame());
flowScheduler.add(instr_2RoutineEnd());
flowScheduler.add(instr_3RoutineBegin());
flowScheduler.add(instr_3RoutineEachFrame());
flowScheduler.add(instr_3RoutineEnd());
const train_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(train_loopLoopBegin(train_loopLoopScheduler));
flowScheduler.add(train_loopLoopScheduler);
flowScheduler.add(train_loopLoopEnd);







flowScheduler.add(exp_start_instrRoutineBegin());
flowScheduler.add(exp_start_instrRoutineEachFrame());
flowScheduler.add(exp_start_instrRoutineEnd());
flowScheduler.add(controlcodeRoutineBegin());
flowScheduler.add(controlcodeRoutineEachFrame());
flowScheduler.add(controlcodeRoutineEnd());
flowScheduler.add(block_instrRoutineBegin());
flowScheduler.add(block_instrRoutineEachFrame());
flowScheduler.add(block_instrRoutineEnd());
const controlLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(controlLoopBegin(controlLoopScheduler));
flowScheduler.add(controlLoopScheduler);
flowScheduler.add(controlLoopEnd);







flowScheduler.add(quality_codeRoutineBegin());
flowScheduler.add(quality_codeRoutineEachFrame());
flowScheduler.add(quality_codeRoutineEnd());
const qualityLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(qualityLoopBegin(qualityLoopScheduler));
flowScheduler.add(qualityLoopScheduler);
flowScheduler.add(qualityLoopEnd);








flowScheduler.add(code_quantityRoutineBegin());
flowScheduler.add(code_quantityRoutineEachFrame());
flowScheduler.add(code_quantityRoutineEnd());
const quantityLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(quantityLoopBegin(quantityLoopScheduler));
flowScheduler.add(quantityLoopScheduler);
flowScheduler.add(quantityLoopEnd);








flowScheduler.add(byeRoutineBegin());
flowScheduler.add(byeRoutineEachFrame());
flowScheduler.add(byeRoutineEnd());
flowScheduler.add(OSFRoutineBegin());
flowScheduler.add(OSFRoutineEachFrame());
flowScheduler.add(OSFRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stimul_train.xlsx', 'path': 'stimul_train.xlsx'},
    {'name': 'stimul_c.xlsx', 'path': 'stimul_c.xlsx'},
    {'name': 'stimul_qual.xlsx', 'path': 'stimul_qual.xlsx'},
    {'name': 'stimul_quant.xlsx', 'path': 'stimul_quant.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instr_1Clock;
var instr_1_text;
var instr_1_stop;
var instr_2Clock;
var instr_2_text;
var instr_2_stop;
var instr_3Clock;
var instr_3_text;
var instr_stop_3;
var maskClock;
var text;
var ref_trainClock;
var ref_train_stim;
var start_reprodClock;
var start_reprod_key;
var stop_reprod_trainClock;
var stop_reprod_stim;
var stop_reprod_key;
var accuracyClock;
var acc_text;
var acc_slider;
var stop_slider_mouse;
var stop_slider_text;
var acc_slider_t;
var acc_slider_tt;
var accuracy_specClock;
var acc_spec_text;
var acc_spec_slider;
var stop_acc_spec_mouse;
var stop_acc_spec_text;
var exp_start_instrClock;
var exp_start_instr_text;
var controlcodeClock;
var loop_1;
var block_instrClock;
var block_instr_text;
var blovk_instr_mouse;
var refClock;
var ref_stim_c;
var stop_reprod_cntrlClock;
var stop_reprod_stim_cntrl;
var stop_reprod_key_cntrl;
var quality_codeClock;
var loop_2;
var ref_qualClock;
var ref_stim_qual;
var stop_reprod_qltClock;
var stop_reprod_stim_qlt;
var stop_reprod_key_qlt;
var feedback_color;
var quantity_msg;
var quality_msg;
var quality_fdbClock;
var quality_fdb_text;
var code_quantityClock;
var loop_3;
var ref_quantClock;
var ref_stim_quant;
var stop_reprod_qnttClock;
var stop_reprod_stim_qntt;
var stop_reprod_key_qntt;
var quantity_fdbClock;
var quantity_fdb_text;
var byeClock;
var bye_text;
var OSFClock;
var resalt;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr_1"
  instr_1Clock = new util.Clock();
  instr_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_1_text',
    text: 'Здравствуйте, уважаемые коллеги! \n\nДалее Вам будет предложено пройти эксперимент. Важно, пожалуйста, при прохождении уберите часы и телефоны, чтобы не было отвлекающих факторов. Также убедительно просим не считать и не отбивать ритм при прохождении\n\nВремя прохождения займет у Вас 20-30 минут. Все данные конфиденциальны и не передаются третьим лицам. \nНажмите на ЛЕВУЮ КЛАВИШУ МЫШИ, чтобы ознакомиться с задачей.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_1_stop = new core.Mouse({
    win: psychoJS.window,
  });
  instr_1_stop.mouseClock = new util.Clock();
  // Initialize components for Routine "instr_2"
  instr_2Clock = new util.Clock();
  instr_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_2_text',
    text: 'Сначала на экране появится белый круг, затем исчезнет.\n\nНажмите на ПРОБЕЛ, чтобы круг появился снова. После появления черного круга Ваша задача — нажать клавишу ПРОБЕЛ в тот момент, когда, по вашему мнению, прошло ТОЧНО СТОЛЬКО ЖЕ времени, сколько белый круг был на экране.\n\nНжмите ЛЕВУЮ КЛАВИШУ МЫШИ, чтобы продолжить\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_2_stop = new core.Mouse({
    win: psychoJS.window,
  });
  instr_2_stop.mouseClock = new util.Clock();
  // Initialize components for Routine "instr_3"
  instr_3Clock = new util.Clock();
  instr_3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_3_text',
    text: 'После проб Вам может быть предъявлена обратная связь на то, как Вы воспроизвели интервал \n\nПримеры обратной связи:\nсильно больше/меньше – например, 4 секунды. оценили как 12, а 10 секунд оценили как 3.\nверно – все правильно :)\nбольше на 50% – например, 5 секунд оценили как 7.5.\nменше на 20% – например, 10 секунд оценили как 8.\n\nСначала Вам будет дано пробное задание\n\nНжмите ЛЕВУЮ КЛАВИШУ МЫШИ, чтобы начать тренировку',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_stop_3 = new core.Mouse({
    win: psychoJS.window,
  });
  instr_stop_3.mouseClock = new util.Clock();
  // Initialize components for Routine "mask"
  maskClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.4,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ref_train"
  ref_trainClock = new util.Clock();
  ref_train_stim = new visual.Polygon({
    win: psychoJS.window, name: 'ref_train_stim', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "start_reprod"
  start_reprodClock = new util.Clock();
  start_reprod_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stop_reprod_train"
  stop_reprod_trainClock = new util.Clock();
  stop_reprod_stim = new visual.Polygon({
    win: psychoJS.window, name: 'stop_reprod_stim', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  stop_reprod_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "accuracy"
  accuracyClock = new util.Clock();
  acc_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'acc_text',
    text: 'Оцените, насколько сильно Вы ошиблись',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  acc_slider = new visual.Slider({
    win: psychoJS.window, name: 'acc_slider',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  stop_slider_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  stop_slider_mouse.mouseClock = new util.Clock();
  stop_slider_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stop_slider_text',
    text: 'продолжить',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  acc_slider_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'acc_slider_t',
    text: 'Не ошибся',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.05)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  acc_slider_tt = new visual.TextStim({
    win: psychoJS.window,
    name: 'acc_slider_tt',
    text: 'Сильно ошибся ',
    font: 'Arial',
    units: undefined, 
    pos: [0.55, (- 0.05)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "accuracy_spec"
  accuracy_specClock = new util.Clock();
  acc_spec_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'acc_spec_text',
    text: 'Оцените, в какую сторону произошла ошибка',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  acc_spec_slider = new visual.Slider({
    win: psychoJS.window, name: 'acc_spec_slider',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u0441\u0438\u043b\u044c\u043d\u043e \u0432 \u043c\u0435\u043d\u044c\u0448\u0443\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443", "2", "3", "\u0442\u043e\u0447\u043d\u043e", "5", "6", "\u0441\u0438\u043b\u044c\u043d\u043e \u0432 \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  stop_acc_spec_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  stop_acc_spec_mouse.mouseClock = new util.Clock();
  stop_acc_spec_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stop_acc_spec_text',
    text: 'продолжить',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "exp_start_instr"
  exp_start_instrClock = new util.Clock();
  exp_start_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'exp_start_instr_text',
    text: 'тренировка окончена\n\nсейчас начнется эксперимент \n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "controlcode"
  controlcodeClock = new util.Clock();
  // Run 'Begin Experiment' code from code_control
  loop_1 = 0;
  if ((expInfo["group"] === "1")) {
      loop_1 = 1;
  }
  
  // Initialize components for Routine "block_instr"
  block_instrClock = new util.Clock();
  block_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_instr_text',
    text: 'нажмите левую кнопку мыши, чтобы начать экспериментальный блок',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  blovk_instr_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  blovk_instr_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "ref"
  refClock = new util.Clock();
  ref_stim_c = new visual.Polygon({
    win: psychoJS.window, name: 'ref_stim_c', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "stop_reprod_cntrl"
  stop_reprod_cntrlClock = new util.Clock();
  stop_reprod_stim_cntrl = new visual.Polygon({
    win: psychoJS.window, name: 'stop_reprod_stim_cntrl', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  stop_reprod_key_cntrl = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "quality_code"
  quality_codeClock = new util.Clock();
  // Run 'Begin Experiment' code from code_qual
  loop_2 = 0;
  if ((expInfo["group"] === "2")) {
      loop_2 = 1;
  }
  
  // Initialize components for Routine "ref_qual"
  ref_qualClock = new util.Clock();
  ref_stim_qual = new visual.Polygon({
    win: psychoJS.window, name: 'ref_stim_qual', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "stop_reprod_qlt"
  stop_reprod_qltClock = new util.Clock();
  stop_reprod_stim_qlt = new visual.Polygon({
    win: psychoJS.window, name: 'stop_reprod_stim_qlt', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  stop_reprod_key_qlt = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from error_code_qlt
  feedback_color = "";
  quantity_msg = "";
  quality_msg = "";
  
  // Initialize components for Routine "quality_fdb"
  quality_fdbClock = new util.Clock();
  quality_fdb_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'quality_fdb_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "code_quantity"
  code_quantityClock = new util.Clock();
  // Run 'Begin Experiment' code from code_quant
  loop_3 = 0;
  if ((expInfo["group"] === "3")) {
      loop_3 = 1;
  }
  
  // Initialize components for Routine "ref_quant"
  ref_quantClock = new util.Clock();
  ref_stim_quant = new visual.Polygon({
    win: psychoJS.window, name: 'ref_stim_quant', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "stop_reprod_qntt"
  stop_reprod_qnttClock = new util.Clock();
  stop_reprod_stim_qntt = new visual.Polygon({
    win: psychoJS.window, name: 'stop_reprod_stim_qntt', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  stop_reprod_key_qntt = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from error_code_qntt
  feedback_color = "";
  quantity_msg = "";
  quality_msg = "";
  
  // Initialize components for Routine "quantity_fdb"
  quantity_fdbClock = new util.Clock();
  quantity_fdb_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'quantity_fdb_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "bye"
  byeClock = new util.Clock();
  bye_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bye_text',
    text: 'эксперимент окончен\n\nспасибо за участие!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "OSF"
  OSFClock = new util.Clock();
  resalt = new visual.TextStim({
    win: psychoJS.window,
    name: 'resalt',
    text: 'Ваши результаты сохраняются, пожалуйста, не закрывайте страницу ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instr_1MaxDurationReached;
var gotValidClick;
var instr_1MaxDuration;
var instr_1Components;
function instr_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_1Clock.reset();
    routineTimer.reset();
    instr_1MaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the instr_1_stop
    // current position of the mouse:
    instr_1_stop.x = [];
    instr_1_stop.y = [];
    instr_1_stop.leftButton = [];
    instr_1_stop.midButton = [];
    instr_1_stop.rightButton = [];
    instr_1_stop.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instr_1.started', globalClock.getTime());
    instr_1MaxDuration = null
    // keep track of which components have finished
    instr_1Components = [];
    instr_1Components.push(instr_1_text);
    instr_1Components.push(instr_1_stop);
    
    for (const thisComponent of instr_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function instr_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_1' ---
    // get current time
    t = instr_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_1_text* updates
    if (t >= 0.0 && instr_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_1_text.tStart = t;  // (not accounting for frame time here)
      instr_1_text.frameNStart = frameN;  // exact frame index
      
      instr_1_text.setAutoDraw(true);
    }
    
    
    // if instr_1_text is active this frame...
    if (instr_1_text.status === PsychoJS.Status.STARTED) {
    }
    
    // *instr_1_stop* updates
    if (t >= 0.0 && instr_1_stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_1_stop.tStart = t;  // (not accounting for frame time here)
      instr_1_stop.frameNStart = frameN;  // exact frame index
      
      instr_1_stop.status = PsychoJS.Status.STARTED;
      instr_1_stop.mouseClock.reset();
      prevButtonState = instr_1_stop.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if instr_1_stop is active this frame...
    if (instr_1_stop.status === PsychoJS.Status.STARTED) {
      _mouseButtons = instr_1_stop.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = instr_1_stop.getPos();
          instr_1_stop.x.push(_mouseXYs[0]);
          instr_1_stop.y.push(_mouseXYs[1]);
          instr_1_stop.leftButton.push(_mouseButtons[0]);
          instr_1_stop.midButton.push(_mouseButtons[1]);
          instr_1_stop.rightButton.push(_mouseButtons[2]);
          instr_1_stop.time.push(instr_1_stop.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_1' ---
    for (const thisComponent of instr_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_1.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('instr_1_stop.x', instr_1_stop.x);
    psychoJS.experiment.addData('instr_1_stop.y', instr_1_stop.y);
    psychoJS.experiment.addData('instr_1_stop.leftButton', instr_1_stop.leftButton);
    psychoJS.experiment.addData('instr_1_stop.midButton', instr_1_stop.midButton);
    psychoJS.experiment.addData('instr_1_stop.rightButton', instr_1_stop.rightButton);
    psychoJS.experiment.addData('instr_1_stop.time', instr_1_stop.time);
    
    // the Routine "instr_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_2MaxDurationReached;
var instr_2MaxDuration;
var instr_2Components;
function instr_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_2Clock.reset();
    routineTimer.reset();
    instr_2MaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the instr_2_stop
    // current position of the mouse:
    instr_2_stop.x = [];
    instr_2_stop.y = [];
    instr_2_stop.leftButton = [];
    instr_2_stop.midButton = [];
    instr_2_stop.rightButton = [];
    instr_2_stop.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instr_2.started', globalClock.getTime());
    instr_2MaxDuration = null
    // keep track of which components have finished
    instr_2Components = [];
    instr_2Components.push(instr_2_text);
    instr_2Components.push(instr_2_stop);
    
    for (const thisComponent of instr_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_2' ---
    // get current time
    t = instr_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_2_text* updates
    if (t >= 0.0 && instr_2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_2_text.tStart = t;  // (not accounting for frame time here)
      instr_2_text.frameNStart = frameN;  // exact frame index
      
      instr_2_text.setAutoDraw(true);
    }
    
    
    // if instr_2_text is active this frame...
    if (instr_2_text.status === PsychoJS.Status.STARTED) {
    }
    
    // *instr_2_stop* updates
    if (t >= 0.0 && instr_2_stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_2_stop.tStart = t;  // (not accounting for frame time here)
      instr_2_stop.frameNStart = frameN;  // exact frame index
      
      instr_2_stop.status = PsychoJS.Status.STARTED;
      instr_2_stop.mouseClock.reset();
      prevButtonState = instr_2_stop.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if instr_2_stop is active this frame...
    if (instr_2_stop.status === PsychoJS.Status.STARTED) {
      _mouseButtons = instr_2_stop.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = instr_2_stop.getPos();
          instr_2_stop.x.push(_mouseXYs[0]);
          instr_2_stop.y.push(_mouseXYs[1]);
          instr_2_stop.leftButton.push(_mouseButtons[0]);
          instr_2_stop.midButton.push(_mouseButtons[1]);
          instr_2_stop.rightButton.push(_mouseButtons[2]);
          instr_2_stop.time.push(instr_2_stop.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_2' ---
    for (const thisComponent of instr_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_2.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('instr_2_stop.x', instr_2_stop.x);
    psychoJS.experiment.addData('instr_2_stop.y', instr_2_stop.y);
    psychoJS.experiment.addData('instr_2_stop.leftButton', instr_2_stop.leftButton);
    psychoJS.experiment.addData('instr_2_stop.midButton', instr_2_stop.midButton);
    psychoJS.experiment.addData('instr_2_stop.rightButton', instr_2_stop.rightButton);
    psychoJS.experiment.addData('instr_2_stop.time', instr_2_stop.time);
    
    // the Routine "instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_3MaxDurationReached;
var instr_3MaxDuration;
var instr_3Components;
function instr_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_3Clock.reset();
    routineTimer.reset();
    instr_3MaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the instr_stop_3
    // current position of the mouse:
    instr_stop_3.x = [];
    instr_stop_3.y = [];
    instr_stop_3.leftButton = [];
    instr_stop_3.midButton = [];
    instr_stop_3.rightButton = [];
    instr_stop_3.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instr_3.started', globalClock.getTime());
    instr_3MaxDuration = null
    // keep track of which components have finished
    instr_3Components = [];
    instr_3Components.push(instr_3_text);
    instr_3Components.push(instr_stop_3);
    
    for (const thisComponent of instr_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_3' ---
    // get current time
    t = instr_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_3_text* updates
    if (t >= 0.0 && instr_3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_3_text.tStart = t;  // (not accounting for frame time here)
      instr_3_text.frameNStart = frameN;  // exact frame index
      
      instr_3_text.setAutoDraw(true);
    }
    
    
    // if instr_3_text is active this frame...
    if (instr_3_text.status === PsychoJS.Status.STARTED) {
    }
    
    // *instr_stop_3* updates
    if (t >= 0.0 && instr_stop_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_stop_3.tStart = t;  // (not accounting for frame time here)
      instr_stop_3.frameNStart = frameN;  // exact frame index
      
      instr_stop_3.status = PsychoJS.Status.STARTED;
      instr_stop_3.mouseClock.reset();
      prevButtonState = instr_stop_3.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if instr_stop_3 is active this frame...
    if (instr_stop_3.status === PsychoJS.Status.STARTED) {
      _mouseButtons = instr_stop_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = instr_stop_3.getPos();
          instr_stop_3.x.push(_mouseXYs[0]);
          instr_stop_3.y.push(_mouseXYs[1]);
          instr_stop_3.leftButton.push(_mouseButtons[0]);
          instr_stop_3.midButton.push(_mouseButtons[1]);
          instr_stop_3.rightButton.push(_mouseButtons[2]);
          instr_stop_3.time.push(instr_stop_3.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_3' ---
    for (const thisComponent of instr_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_3.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('instr_stop_3.x', instr_stop_3.x);
    psychoJS.experiment.addData('instr_stop_3.y', instr_stop_3.y);
    psychoJS.experiment.addData('instr_stop_3.leftButton', instr_stop_3.leftButton);
    psychoJS.experiment.addData('instr_stop_3.midButton', instr_stop_3.midButton);
    psychoJS.experiment.addData('instr_stop_3.rightButton', instr_stop_3.rightButton);
    psychoJS.experiment.addData('instr_stop_3.time', instr_stop_3.time);
    
    // the Routine "instr_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var train_loop;
function train_loopLoopBegin(train_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    train_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimul_train.xlsx',
      seed: undefined, name: 'train_loop'
    });
    psychoJS.experiment.addLoop(train_loop); // add the loop to the experiment
    currentLoop = train_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrain_loop of train_loop) {
      snapshot = train_loop.getSnapshot();
      train_loopLoopScheduler.add(importConditions(snapshot));
      train_loopLoopScheduler.add(maskRoutineBegin(snapshot));
      train_loopLoopScheduler.add(maskRoutineEachFrame());
      train_loopLoopScheduler.add(maskRoutineEnd(snapshot));
      train_loopLoopScheduler.add(ref_trainRoutineBegin(snapshot));
      train_loopLoopScheduler.add(ref_trainRoutineEachFrame());
      train_loopLoopScheduler.add(ref_trainRoutineEnd(snapshot));
      train_loopLoopScheduler.add(start_reprodRoutineBegin(snapshot));
      train_loopLoopScheduler.add(start_reprodRoutineEachFrame());
      train_loopLoopScheduler.add(start_reprodRoutineEnd(snapshot));
      train_loopLoopScheduler.add(stop_reprod_trainRoutineBegin(snapshot));
      train_loopLoopScheduler.add(stop_reprod_trainRoutineEachFrame());
      train_loopLoopScheduler.add(stop_reprod_trainRoutineEnd(snapshot));
      train_loopLoopScheduler.add(accuracyRoutineBegin(snapshot));
      train_loopLoopScheduler.add(accuracyRoutineEachFrame());
      train_loopLoopScheduler.add(accuracyRoutineEnd(snapshot));
      train_loopLoopScheduler.add(accuracy_specRoutineBegin(snapshot));
      train_loopLoopScheduler.add(accuracy_specRoutineEachFrame());
      train_loopLoopScheduler.add(accuracy_specRoutineEnd(snapshot));
      train_loopLoopScheduler.add(train_loopLoopEndIteration(train_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function train_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(train_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function train_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var control;
function controlLoopBegin(controlLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    control = new TrialHandler({
      psychoJS: psychoJS,
      nReps: loop_1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimul_c.xlsx',
      seed: undefined, name: 'control'
    });
    psychoJS.experiment.addLoop(control); // add the loop to the experiment
    currentLoop = control;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisControl of control) {
      snapshot = control.getSnapshot();
      controlLoopScheduler.add(importConditions(snapshot));
      controlLoopScheduler.add(maskRoutineBegin(snapshot));
      controlLoopScheduler.add(maskRoutineEachFrame());
      controlLoopScheduler.add(maskRoutineEnd(snapshot));
      controlLoopScheduler.add(refRoutineBegin(snapshot));
      controlLoopScheduler.add(refRoutineEachFrame());
      controlLoopScheduler.add(refRoutineEnd(snapshot));
      controlLoopScheduler.add(start_reprodRoutineBegin(snapshot));
      controlLoopScheduler.add(start_reprodRoutineEachFrame());
      controlLoopScheduler.add(start_reprodRoutineEnd(snapshot));
      controlLoopScheduler.add(stop_reprod_cntrlRoutineBegin(snapshot));
      controlLoopScheduler.add(stop_reprod_cntrlRoutineEachFrame());
      controlLoopScheduler.add(stop_reprod_cntrlRoutineEnd(snapshot));
      controlLoopScheduler.add(accuracyRoutineBegin(snapshot));
      controlLoopScheduler.add(accuracyRoutineEachFrame());
      controlLoopScheduler.add(accuracyRoutineEnd(snapshot));
      controlLoopScheduler.add(accuracy_specRoutineBegin(snapshot));
      controlLoopScheduler.add(accuracy_specRoutineEachFrame());
      controlLoopScheduler.add(accuracy_specRoutineEnd(snapshot));
      controlLoopScheduler.add(controlLoopEndIteration(controlLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function controlLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(control);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function controlLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var quality;
function qualityLoopBegin(qualityLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    quality = new TrialHandler({
      psychoJS: psychoJS,
      nReps: loop_2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimul_qual.xlsx',
      seed: undefined, name: 'quality'
    });
    psychoJS.experiment.addLoop(quality); // add the loop to the experiment
    currentLoop = quality;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisQuality of quality) {
      snapshot = quality.getSnapshot();
      qualityLoopScheduler.add(importConditions(snapshot));
      qualityLoopScheduler.add(maskRoutineBegin(snapshot));
      qualityLoopScheduler.add(maskRoutineEachFrame());
      qualityLoopScheduler.add(maskRoutineEnd(snapshot));
      qualityLoopScheduler.add(ref_qualRoutineBegin(snapshot));
      qualityLoopScheduler.add(ref_qualRoutineEachFrame());
      qualityLoopScheduler.add(ref_qualRoutineEnd(snapshot));
      qualityLoopScheduler.add(start_reprodRoutineBegin(snapshot));
      qualityLoopScheduler.add(start_reprodRoutineEachFrame());
      qualityLoopScheduler.add(start_reprodRoutineEnd(snapshot));
      qualityLoopScheduler.add(stop_reprod_qltRoutineBegin(snapshot));
      qualityLoopScheduler.add(stop_reprod_qltRoutineEachFrame());
      qualityLoopScheduler.add(stop_reprod_qltRoutineEnd(snapshot));
      qualityLoopScheduler.add(accuracyRoutineBegin(snapshot));
      qualityLoopScheduler.add(accuracyRoutineEachFrame());
      qualityLoopScheduler.add(accuracyRoutineEnd(snapshot));
      qualityLoopScheduler.add(accuracy_specRoutineBegin(snapshot));
      qualityLoopScheduler.add(accuracy_specRoutineEachFrame());
      qualityLoopScheduler.add(accuracy_specRoutineEnd(snapshot));
      qualityLoopScheduler.add(quality_fdbRoutineBegin(snapshot));
      qualityLoopScheduler.add(quality_fdbRoutineEachFrame());
      qualityLoopScheduler.add(quality_fdbRoutineEnd(snapshot));
      qualityLoopScheduler.add(qualityLoopEndIteration(qualityLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function qualityLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(quality);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function qualityLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var quantity;
function quantityLoopBegin(quantityLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    quantity = new TrialHandler({
      psychoJS: psychoJS,
      nReps: loop_3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimul_quant.xlsx',
      seed: undefined, name: 'quantity'
    });
    psychoJS.experiment.addLoop(quantity); // add the loop to the experiment
    currentLoop = quantity;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisQuantity of quantity) {
      snapshot = quantity.getSnapshot();
      quantityLoopScheduler.add(importConditions(snapshot));
      quantityLoopScheduler.add(maskRoutineBegin(snapshot));
      quantityLoopScheduler.add(maskRoutineEachFrame());
      quantityLoopScheduler.add(maskRoutineEnd(snapshot));
      quantityLoopScheduler.add(ref_quantRoutineBegin(snapshot));
      quantityLoopScheduler.add(ref_quantRoutineEachFrame());
      quantityLoopScheduler.add(ref_quantRoutineEnd(snapshot));
      quantityLoopScheduler.add(start_reprodRoutineBegin(snapshot));
      quantityLoopScheduler.add(start_reprodRoutineEachFrame());
      quantityLoopScheduler.add(start_reprodRoutineEnd(snapshot));
      quantityLoopScheduler.add(stop_reprod_qnttRoutineBegin(snapshot));
      quantityLoopScheduler.add(stop_reprod_qnttRoutineEachFrame());
      quantityLoopScheduler.add(stop_reprod_qnttRoutineEnd(snapshot));
      quantityLoopScheduler.add(accuracyRoutineBegin(snapshot));
      quantityLoopScheduler.add(accuracyRoutineEachFrame());
      quantityLoopScheduler.add(accuracyRoutineEnd(snapshot));
      quantityLoopScheduler.add(accuracy_specRoutineBegin(snapshot));
      quantityLoopScheduler.add(accuracy_specRoutineEachFrame());
      quantityLoopScheduler.add(accuracy_specRoutineEnd(snapshot));
      quantityLoopScheduler.add(quantity_fdbRoutineBegin(snapshot));
      quantityLoopScheduler.add(quantity_fdbRoutineEachFrame());
      quantityLoopScheduler.add(quantity_fdbRoutineEnd(snapshot));
      quantityLoopScheduler.add(quantityLoopEndIteration(quantityLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function quantityLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(quantity);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function quantityLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var maskMaxDurationReached;
var maskMaxDuration;
var maskComponents;
function maskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'mask' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    maskClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    maskMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('mask.started', globalClock.getTime());
    maskMaxDuration = null
    // keep track of which components have finished
    maskComponents = [];
    maskComponents.push(text);
    
    for (const thisComponent of maskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function maskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'mask' ---
    // get current time
    t = maskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text.tStop = t;  // not accounting for scr refresh
      text.frameNStop = frameN;  // exact frame index
      // update status
      text.status = PsychoJS.Status.FINISHED;
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of maskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function maskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'mask' ---
    for (const thisComponent of maskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('mask.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (maskMaxDurationReached) {
        maskClock.add(maskMaxDuration);
    } else {
        maskClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ref_trainMaxDurationReached;
var trainDur;
var smallSize;
var bigSize;
var currentSize;
var stimStart;
var nextSwitch;
var ref_trainMaxDuration;
var ref_trainComponents;
function ref_trainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ref_train' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ref_trainClock.reset();
    routineTimer.reset();
    ref_trainMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    trainDur = Number(train_duration);
    
    smallSize = 0.15;
    bigSize = 0.25;
    currentSize = smallSize;
    ref_train_stim.size = currentSize;
    
    stimStart = 0.5;
    nextSwitch = stimStart + 0.3 + Math.random() * 0.5;
    psychoJS.experiment.addData('ref_train.started', globalClock.getTime());
    ref_trainMaxDuration = null
    // keep track of which components have finished
    ref_trainComponents = [];
    ref_trainComponents.push(ref_train_stim);
    
    for (const thisComponent of ref_trainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ref_trainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ref_train' ---
    // get current time
    t = ref_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_2
    if (ref_train_stim.status === PsychoJS.Status.STARTED && t >= nextSwitch) {
        if (currentSize === smallSize) {
            currentSize = bigSize;
        } else {
            currentSize = smallSize;
        }
    
        ref_train_stim.size = currentSize;
        nextSwitch = t + 0.3 + Math.random() * 0.5;
    }
    
    // *ref_train_stim* updates
    if (t >= 0.5 && ref_train_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ref_train_stim.tStart = t;  // (not accounting for frame time here)
      ref_train_stim.frameNStart = frameN;  // exact frame index
      
      ref_train_stim.setAutoDraw(true);
    }
    
    
    // if ref_train_stim is active this frame...
    if (ref_train_stim.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + (trainDur + 0.05) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ref_train_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      ref_train_stim.tStop = t;  // not accounting for scr refresh
      ref_train_stim.frameNStop = frameN;  // exact frame index
      // update status
      ref_train_stim.status = PsychoJS.Status.FINISHED;
      ref_train_stim.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ref_trainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ref_trainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ref_train' ---
    for (const thisComponent of ref_trainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ref_train.stopped', globalClock.getTime());
    // the Routine "ref_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var start_reprodMaxDurationReached;
var _start_reprod_key_allKeys;
var start_reprodMaxDuration;
var start_reprodComponents;
function start_reprodRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_reprod' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    start_reprodClock.reset();
    routineTimer.reset();
    start_reprodMaxDurationReached = false;
    // update component parameters for each repeat
    start_reprod_key.keys = undefined;
    start_reprod_key.rt = undefined;
    _start_reprod_key_allKeys = [];
    psychoJS.experiment.addData('start_reprod.started', globalClock.getTime());
    start_reprodMaxDuration = null
    // keep track of which components have finished
    start_reprodComponents = [];
    start_reprodComponents.push(start_reprod_key);
    
    for (const thisComponent of start_reprodComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_reprodRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_reprod' ---
    // get current time
    t = start_reprodClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_reprod_key* updates
    if (t >= 0.0 && start_reprod_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_reprod_key.tStart = t;  // (not accounting for frame time here)
      start_reprod_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_reprod_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_reprod_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_reprod_key.clearEvents(); });
    }
    
    // if start_reprod_key is active this frame...
    if (start_reprod_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_reprod_key.getKeys({keyList: 'space', waitRelease: false});
      _start_reprod_key_allKeys = _start_reprod_key_allKeys.concat(theseKeys);
      if (_start_reprod_key_allKeys.length > 0) {
        start_reprod_key.keys = _start_reprod_key_allKeys[_start_reprod_key_allKeys.length - 1].name;  // just the last key pressed
        start_reprod_key.rt = _start_reprod_key_allKeys[_start_reprod_key_allKeys.length - 1].rt;
        start_reprod_key.duration = _start_reprod_key_allKeys[_start_reprod_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_reprodComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_reprodRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_reprod' ---
    for (const thisComponent of start_reprodComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('start_reprod.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_reprod_key.corr, level);
    }
    psychoJS.experiment.addData('start_reprod_key.keys', start_reprod_key.keys);
    if (typeof start_reprod_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_reprod_key.rt', start_reprod_key.rt);
        psychoJS.experiment.addData('start_reprod_key.duration', start_reprod_key.duration);
        routineTimer.reset();
        }
    
    start_reprod_key.stop();
    // the Routine "start_reprod" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stop_reprod_trainMaxDurationReached;
var _stop_reprod_key_allKeys;
var stop_reprod_trainMaxDuration;
var stop_reprod_trainComponents;
function stop_reprod_trainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stop_reprod_train' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    stop_reprod_trainClock.reset();
    routineTimer.reset();
    stop_reprod_trainMaxDurationReached = false;
    // update component parameters for each repeat
    stop_reprod_key.keys = undefined;
    stop_reprod_key.rt = undefined;
    _stop_reprod_key_allKeys = [];
    psychoJS.experiment.addData('stop_reprod_train.started', globalClock.getTime());
    stop_reprod_trainMaxDuration = null
    // keep track of which components have finished
    stop_reprod_trainComponents = [];
    stop_reprod_trainComponents.push(stop_reprod_stim);
    stop_reprod_trainComponents.push(stop_reprod_key);
    
    for (const thisComponent of stop_reprod_trainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stop_reprod_trainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stop_reprod_train' ---
    // get current time
    t = stop_reprod_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stop_reprod_stim* updates
    if (t >= 0.0 && stop_reprod_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_reprod_stim.tStart = t;  // (not accounting for frame time here)
      stop_reprod_stim.frameNStart = frameN;  // exact frame index
      
      stop_reprod_stim.setAutoDraw(true);
    }
    
    
    // if stop_reprod_stim is active this frame...
    if (stop_reprod_stim.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stop_reprod_key* updates
    if (t >= 0.0 && stop_reprod_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_reprod_key.tStart = t;  // (not accounting for frame time here)
      stop_reprod_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stop_reprod_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stop_reprod_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stop_reprod_key.clearEvents(); });
    }
    
    // if stop_reprod_key is active this frame...
    if (stop_reprod_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = stop_reprod_key.getKeys({keyList: 'space', waitRelease: false});
      _stop_reprod_key_allKeys = _stop_reprod_key_allKeys.concat(theseKeys);
      if (_stop_reprod_key_allKeys.length > 0) {
        stop_reprod_key.keys = _stop_reprod_key_allKeys[_stop_reprod_key_allKeys.length - 1].name;  // just the last key pressed
        stop_reprod_key.rt = _stop_reprod_key_allKeys[_stop_reprod_key_allKeys.length - 1].rt;
        stop_reprod_key.duration = _stop_reprod_key_allKeys[_stop_reprod_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stop_reprod_trainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stop_reprod_trainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stop_reprod_train' ---
    for (const thisComponent of stop_reprod_trainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stop_reprod_train.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(stop_reprod_key.corr, level);
    }
    psychoJS.experiment.addData('stop_reprod_key.keys', stop_reprod_key.keys);
    if (typeof stop_reprod_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('stop_reprod_key.rt', stop_reprod_key.rt);
        psychoJS.experiment.addData('stop_reprod_key.duration', stop_reprod_key.duration);
        routineTimer.reset();
        }
    
    stop_reprod_key.stop();
    // the Routine "stop_reprod_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var accuracyMaxDurationReached;
var accuracyMaxDuration;
var accuracyComponents;
function accuracyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'accuracy' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    accuracyClock.reset();
    routineTimer.reset();
    accuracyMaxDurationReached = false;
    // update component parameters for each repeat
    acc_slider.reset()
    // setup some python lists for storing info about the stop_slider_mouse
    // current position of the mouse:
    stop_slider_mouse.x = [];
    stop_slider_mouse.y = [];
    stop_slider_mouse.leftButton = [];
    stop_slider_mouse.midButton = [];
    stop_slider_mouse.rightButton = [];
    stop_slider_mouse.time = [];
    stop_slider_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('accuracy.started', globalClock.getTime());
    accuracyMaxDuration = null
    // keep track of which components have finished
    accuracyComponents = [];
    accuracyComponents.push(acc_text);
    accuracyComponents.push(acc_slider);
    accuracyComponents.push(stop_slider_mouse);
    accuracyComponents.push(stop_slider_text);
    accuracyComponents.push(acc_slider_t);
    accuracyComponents.push(acc_slider_tt);
    
    for (const thisComponent of accuracyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function accuracyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'accuracy' ---
    // get current time
    t = accuracyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *acc_text* updates
    if (t >= 0.0 && acc_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      acc_text.tStart = t;  // (not accounting for frame time here)
      acc_text.frameNStart = frameN;  // exact frame index
      
      acc_text.setAutoDraw(true);
    }
    
    
    // if acc_text is active this frame...
    if (acc_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *acc_slider* updates
    if (t >= 0.0 && acc_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      acc_slider.tStart = t;  // (not accounting for frame time here)
      acc_slider.frameNStart = frameN;  // exact frame index
      
      acc_slider.setAutoDraw(true);
    }
    
    
    // if acc_slider is active this frame...
    if (acc_slider.status === PsychoJS.Status.STARTED) {
    }
    
    // *stop_slider_mouse* updates
    if (t >= 0.0 && stop_slider_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_slider_mouse.tStart = t;  // (not accounting for frame time here)
      stop_slider_mouse.frameNStart = frameN;  // exact frame index
      
      stop_slider_mouse.status = PsychoJS.Status.STARTED;
      stop_slider_mouse.mouseClock.reset();
      prevButtonState = stop_slider_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if stop_slider_mouse is active this frame...
    if (stop_slider_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = stop_slider_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          stop_slider_mouse.clickableObjects = eval(stop_slider_text)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(stop_slider_mouse.clickableObjects)) {
              stop_slider_mouse.clickableObjects = [stop_slider_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of stop_slider_mouse.clickableObjects) {
              if (obj.contains(stop_slider_mouse)) {
                  gotValidClick = true;
                  stop_slider_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              stop_slider_mouse.clicked_name.push(null);
          }
          _mouseXYs = stop_slider_mouse.getPos();
          stop_slider_mouse.x.push(_mouseXYs[0]);
          stop_slider_mouse.y.push(_mouseXYs[1]);
          stop_slider_mouse.leftButton.push(_mouseButtons[0]);
          stop_slider_mouse.midButton.push(_mouseButtons[1]);
          stop_slider_mouse.rightButton.push(_mouseButtons[2]);
          stop_slider_mouse.time.push(stop_slider_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *stop_slider_text* updates
    if (t >= 0.0 && stop_slider_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_slider_text.tStart = t;  // (not accounting for frame time here)
      stop_slider_text.frameNStart = frameN;  // exact frame index
      
      stop_slider_text.setAutoDraw(true);
    }
    
    
    // if stop_slider_text is active this frame...
    if (stop_slider_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *acc_slider_t* updates
    if (t >= 0.0 && acc_slider_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      acc_slider_t.tStart = t;  // (not accounting for frame time here)
      acc_slider_t.frameNStart = frameN;  // exact frame index
      
      acc_slider_t.setAutoDraw(true);
    }
    
    
    // if acc_slider_t is active this frame...
    if (acc_slider_t.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *acc_slider_tt* updates
    if (t >= 0.0 && acc_slider_tt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      acc_slider_tt.tStart = t;  // (not accounting for frame time here)
      acc_slider_tt.frameNStart = frameN;  // exact frame index
      
      acc_slider_tt.setAutoDraw(true);
    }
    
    
    // if acc_slider_tt is active this frame...
    if (acc_slider_tt.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of accuracyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function accuracyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'accuracy' ---
    for (const thisComponent of accuracyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('accuracy.stopped', globalClock.getTime());
    psychoJS.experiment.addData('acc_slider.response', acc_slider.getRating());
    psychoJS.experiment.addData('acc_slider.rt', acc_slider.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('stop_slider_mouse.x', stop_slider_mouse.x);
    psychoJS.experiment.addData('stop_slider_mouse.y', stop_slider_mouse.y);
    psychoJS.experiment.addData('stop_slider_mouse.leftButton', stop_slider_mouse.leftButton);
    psychoJS.experiment.addData('stop_slider_mouse.midButton', stop_slider_mouse.midButton);
    psychoJS.experiment.addData('stop_slider_mouse.rightButton', stop_slider_mouse.rightButton);
    psychoJS.experiment.addData('stop_slider_mouse.time', stop_slider_mouse.time);
    psychoJS.experiment.addData('stop_slider_mouse.clicked_name', stop_slider_mouse.clicked_name);
    
    // the Routine "accuracy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var accuracy_specMaxDurationReached;
var accuracy_specMaxDuration;
var accuracy_specComponents;
function accuracy_specRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'accuracy_spec' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    accuracy_specClock.reset();
    routineTimer.reset();
    accuracy_specMaxDurationReached = false;
    // update component parameters for each repeat
    acc_spec_slider.reset()
    // setup some python lists for storing info about the stop_acc_spec_mouse
    // current position of the mouse:
    stop_acc_spec_mouse.x = [];
    stop_acc_spec_mouse.y = [];
    stop_acc_spec_mouse.leftButton = [];
    stop_acc_spec_mouse.midButton = [];
    stop_acc_spec_mouse.rightButton = [];
    stop_acc_spec_mouse.time = [];
    stop_acc_spec_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('accuracy_spec.started', globalClock.getTime());
    accuracy_specMaxDuration = null
    // keep track of which components have finished
    accuracy_specComponents = [];
    accuracy_specComponents.push(acc_spec_text);
    accuracy_specComponents.push(acc_spec_slider);
    accuracy_specComponents.push(stop_acc_spec_mouse);
    accuracy_specComponents.push(stop_acc_spec_text);
    
    for (const thisComponent of accuracy_specComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function accuracy_specRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'accuracy_spec' ---
    // get current time
    t = accuracy_specClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *acc_spec_text* updates
    if (t >= 0.0 && acc_spec_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      acc_spec_text.tStart = t;  // (not accounting for frame time here)
      acc_spec_text.frameNStart = frameN;  // exact frame index
      
      acc_spec_text.setAutoDraw(true);
    }
    
    
    // if acc_spec_text is active this frame...
    if (acc_spec_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *acc_spec_slider* updates
    if (t >= 0.0 && acc_spec_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      acc_spec_slider.tStart = t;  // (not accounting for frame time here)
      acc_spec_slider.frameNStart = frameN;  // exact frame index
      
      acc_spec_slider.setAutoDraw(true);
    }
    
    
    // if acc_spec_slider is active this frame...
    if (acc_spec_slider.status === PsychoJS.Status.STARTED) {
    }
    
    // *stop_acc_spec_mouse* updates
    if (t >= 0.0 && stop_acc_spec_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_acc_spec_mouse.tStart = t;  // (not accounting for frame time here)
      stop_acc_spec_mouse.frameNStart = frameN;  // exact frame index
      
      stop_acc_spec_mouse.status = PsychoJS.Status.STARTED;
      stop_acc_spec_mouse.mouseClock.reset();
      prevButtonState = stop_acc_spec_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if stop_acc_spec_mouse is active this frame...
    if (stop_acc_spec_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = stop_acc_spec_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          stop_acc_spec_mouse.clickableObjects = eval(stop_acc_spec_text)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(stop_acc_spec_mouse.clickableObjects)) {
              stop_acc_spec_mouse.clickableObjects = [stop_acc_spec_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of stop_acc_spec_mouse.clickableObjects) {
              if (obj.contains(stop_acc_spec_mouse)) {
                  gotValidClick = true;
                  stop_acc_spec_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              stop_acc_spec_mouse.clicked_name.push(null);
          }
          _mouseXYs = stop_acc_spec_mouse.getPos();
          stop_acc_spec_mouse.x.push(_mouseXYs[0]);
          stop_acc_spec_mouse.y.push(_mouseXYs[1]);
          stop_acc_spec_mouse.leftButton.push(_mouseButtons[0]);
          stop_acc_spec_mouse.midButton.push(_mouseButtons[1]);
          stop_acc_spec_mouse.rightButton.push(_mouseButtons[2]);
          stop_acc_spec_mouse.time.push(stop_acc_spec_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *stop_acc_spec_text* updates
    if (t >= 0.0 && stop_acc_spec_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_acc_spec_text.tStart = t;  // (not accounting for frame time here)
      stop_acc_spec_text.frameNStart = frameN;  // exact frame index
      
      stop_acc_spec_text.setAutoDraw(true);
    }
    
    
    // if stop_acc_spec_text is active this frame...
    if (stop_acc_spec_text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of accuracy_specComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function accuracy_specRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'accuracy_spec' ---
    for (const thisComponent of accuracy_specComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('accuracy_spec.stopped', globalClock.getTime());
    psychoJS.experiment.addData('acc_spec_slider.response', acc_spec_slider.getRating());
    psychoJS.experiment.addData('acc_spec_slider.rt', acc_spec_slider.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('stop_acc_spec_mouse.x', stop_acc_spec_mouse.x);
    psychoJS.experiment.addData('stop_acc_spec_mouse.y', stop_acc_spec_mouse.y);
    psychoJS.experiment.addData('stop_acc_spec_mouse.leftButton', stop_acc_spec_mouse.leftButton);
    psychoJS.experiment.addData('stop_acc_spec_mouse.midButton', stop_acc_spec_mouse.midButton);
    psychoJS.experiment.addData('stop_acc_spec_mouse.rightButton', stop_acc_spec_mouse.rightButton);
    psychoJS.experiment.addData('stop_acc_spec_mouse.time', stop_acc_spec_mouse.time);
    psychoJS.experiment.addData('stop_acc_spec_mouse.clicked_name', stop_acc_spec_mouse.clicked_name);
    
    // the Routine "accuracy_spec" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp_start_instrMaxDurationReached;
var exp_start_instrMaxDuration;
var exp_start_instrComponents;
function exp_start_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp_start_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    exp_start_instrClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    exp_start_instrMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp_start_instr.started', globalClock.getTime());
    exp_start_instrMaxDuration = null
    // keep track of which components have finished
    exp_start_instrComponents = [];
    exp_start_instrComponents.push(exp_start_instr_text);
    
    for (const thisComponent of exp_start_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp_start_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp_start_instr' ---
    // get current time
    t = exp_start_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp_start_instr_text* updates
    if (t >= 0.0 && exp_start_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_start_instr_text.tStart = t;  // (not accounting for frame time here)
      exp_start_instr_text.frameNStart = frameN;  // exact frame index
      
      exp_start_instr_text.setAutoDraw(true);
    }
    
    
    // if exp_start_instr_text is active this frame...
    if (exp_start_instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (exp_start_instr_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      exp_start_instr_text.tStop = t;  // not accounting for scr refresh
      exp_start_instr_text.frameNStop = frameN;  // exact frame index
      // update status
      exp_start_instr_text.status = PsychoJS.Status.FINISHED;
      exp_start_instr_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp_start_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_start_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp_start_instr' ---
    for (const thisComponent of exp_start_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp_start_instr.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (exp_start_instrMaxDurationReached) {
        exp_start_instrClock.add(exp_start_instrMaxDuration);
    } else {
        exp_start_instrClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var controlcodeMaxDurationReached;
var controlcodeMaxDuration;
var controlcodeComponents;
function controlcodeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'controlcode' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    controlcodeClock.reset();
    routineTimer.reset();
    controlcodeMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('controlcode.started', globalClock.getTime());
    controlcodeMaxDuration = null
    // keep track of which components have finished
    controlcodeComponents = [];
    
    for (const thisComponent of controlcodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function controlcodeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'controlcode' ---
    // get current time
    t = controlcodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of controlcodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function controlcodeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'controlcode' ---
    for (const thisComponent of controlcodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('controlcode.stopped', globalClock.getTime());
    // the Routine "controlcode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var block_instrMaxDurationReached;
var block_instrMaxDuration;
var block_instrComponents;
function block_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    block_instrClock.reset();
    routineTimer.reset();
    block_instrMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the blovk_instr_mouse
    // current position of the mouse:
    blovk_instr_mouse.x = [];
    blovk_instr_mouse.y = [];
    blovk_instr_mouse.leftButton = [];
    blovk_instr_mouse.midButton = [];
    blovk_instr_mouse.rightButton = [];
    blovk_instr_mouse.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('block_instr.started', globalClock.getTime());
    block_instrMaxDuration = null
    // keep track of which components have finished
    block_instrComponents = [];
    block_instrComponents.push(block_instr_text);
    block_instrComponents.push(blovk_instr_mouse);
    
    for (const thisComponent of block_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_instr' ---
    // get current time
    t = block_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block_instr_text* updates
    if (t >= 0.0 && block_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_instr_text.tStart = t;  // (not accounting for frame time here)
      block_instr_text.frameNStart = frameN;  // exact frame index
      
      block_instr_text.setAutoDraw(true);
    }
    
    
    // if block_instr_text is active this frame...
    if (block_instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    // *blovk_instr_mouse* updates
    if (t >= 0.0 && blovk_instr_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blovk_instr_mouse.tStart = t;  // (not accounting for frame time here)
      blovk_instr_mouse.frameNStart = frameN;  // exact frame index
      
      blovk_instr_mouse.status = PsychoJS.Status.STARTED;
      blovk_instr_mouse.mouseClock.reset();
      prevButtonState = blovk_instr_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if blovk_instr_mouse is active this frame...
    if (blovk_instr_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = blovk_instr_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = blovk_instr_mouse.getPos();
          blovk_instr_mouse.x.push(_mouseXYs[0]);
          blovk_instr_mouse.y.push(_mouseXYs[1]);
          blovk_instr_mouse.leftButton.push(_mouseButtons[0]);
          blovk_instr_mouse.midButton.push(_mouseButtons[1]);
          blovk_instr_mouse.rightButton.push(_mouseButtons[2]);
          blovk_instr_mouse.time.push(blovk_instr_mouse.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_instr' ---
    for (const thisComponent of block_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('block_instr.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('blovk_instr_mouse.x', blovk_instr_mouse.x);
    psychoJS.experiment.addData('blovk_instr_mouse.y', blovk_instr_mouse.y);
    psychoJS.experiment.addData('blovk_instr_mouse.leftButton', blovk_instr_mouse.leftButton);
    psychoJS.experiment.addData('blovk_instr_mouse.midButton', blovk_instr_mouse.midButton);
    psychoJS.experiment.addData('blovk_instr_mouse.rightButton', blovk_instr_mouse.rightButton);
    psychoJS.experiment.addData('blovk_instr_mouse.time', blovk_instr_mouse.time);
    
    // the Routine "block_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var refMaxDurationReached;
var refDur;
var refMaxDuration;
var refComponents;
function refRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ref' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    refClock.reset();
    routineTimer.reset();
    refMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    refDur = Number(ref_duration_c);
    
    smallSize = 0.15;
    bigSize = 0.25;
    currentSize = smallSize;
    ref_stim_c.size = currentSize;
    
    stimStart = 0;
    nextSwitch = stimStart + 0.3 + Math.random() * 0.5;
    psychoJS.experiment.addData('ref.started', globalClock.getTime());
    refMaxDuration = null
    // keep track of which components have finished
    refComponents = [];
    refComponents.push(ref_stim_c);
    
    for (const thisComponent of refComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function refRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ref' ---
    // get current time
    t = refClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    if (ref_stim_c.status === PsychoJS.Status.STARTED && t >= nextSwitch) {
        if (currentSize === smallSize) {
            currentSize = bigSize;
        } else {
            currentSize = smallSize;
        }
    
        ref_stim_c.size = currentSize;
        nextSwitch = t + 0.3 + Math.random() * 0.5;
    }
    
    // *ref_stim_c* updates
    if (t >= 0 && ref_stim_c.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ref_stim_c.tStart = t;  // (not accounting for frame time here)
      ref_stim_c.frameNStart = frameN;  // exact frame index
      
      ref_stim_c.setAutoDraw(true);
    }
    
    
    // if ref_stim_c is active this frame...
    if (ref_stim_c.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = ref_duration_c - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if ((ref_stim_c.status === PsychoJS.Status.STARTED || ref_stim_c.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      // keep track of stop time/frame for later
      ref_stim_c.tStop = t;  // not accounting for scr refresh
      ref_stim_c.frameNStop = frameN;  // exact frame index
      // update status
      ref_stim_c.status = PsychoJS.Status.FINISHED;
      ref_stim_c.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of refComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function refRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ref' ---
    for (const thisComponent of refComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ref.stopped', globalClock.getTime());
    // the Routine "ref" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stop_reprod_cntrlMaxDurationReached;
var _stop_reprod_key_cntrl_allKeys;
var stop_reprod_cntrlMaxDuration;
var stop_reprod_cntrlComponents;
function stop_reprod_cntrlRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stop_reprod_cntrl' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    stop_reprod_cntrlClock.reset();
    routineTimer.reset();
    stop_reprod_cntrlMaxDurationReached = false;
    // update component parameters for each repeat
    stop_reprod_key_cntrl.keys = undefined;
    stop_reprod_key_cntrl.rt = undefined;
    _stop_reprod_key_cntrl_allKeys = [];
    psychoJS.experiment.addData('stop_reprod_cntrl.started', globalClock.getTime());
    stop_reprod_cntrlMaxDuration = null
    // keep track of which components have finished
    stop_reprod_cntrlComponents = [];
    stop_reprod_cntrlComponents.push(stop_reprod_stim_cntrl);
    stop_reprod_cntrlComponents.push(stop_reprod_key_cntrl);
    
    for (const thisComponent of stop_reprod_cntrlComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stop_reprod_cntrlRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stop_reprod_cntrl' ---
    // get current time
    t = stop_reprod_cntrlClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stop_reprod_stim_cntrl* updates
    if (t >= 0.0 && stop_reprod_stim_cntrl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_reprod_stim_cntrl.tStart = t;  // (not accounting for frame time here)
      stop_reprod_stim_cntrl.frameNStart = frameN;  // exact frame index
      
      stop_reprod_stim_cntrl.setAutoDraw(true);
    }
    
    
    // if stop_reprod_stim_cntrl is active this frame...
    if (stop_reprod_stim_cntrl.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stop_reprod_key_cntrl* updates
    if (t >= 0.0 && stop_reprod_key_cntrl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_reprod_key_cntrl.tStart = t;  // (not accounting for frame time here)
      stop_reprod_key_cntrl.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stop_reprod_key_cntrl.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stop_reprod_key_cntrl.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stop_reprod_key_cntrl.clearEvents(); });
    }
    
    // if stop_reprod_key_cntrl is active this frame...
    if (stop_reprod_key_cntrl.status === PsychoJS.Status.STARTED) {
      let theseKeys = stop_reprod_key_cntrl.getKeys({keyList: 'space', waitRelease: false});
      _stop_reprod_key_cntrl_allKeys = _stop_reprod_key_cntrl_allKeys.concat(theseKeys);
      if (_stop_reprod_key_cntrl_allKeys.length > 0) {
        stop_reprod_key_cntrl.keys = _stop_reprod_key_cntrl_allKeys[_stop_reprod_key_cntrl_allKeys.length - 1].name;  // just the last key pressed
        stop_reprod_key_cntrl.rt = _stop_reprod_key_cntrl_allKeys[_stop_reprod_key_cntrl_allKeys.length - 1].rt;
        stop_reprod_key_cntrl.duration = _stop_reprod_key_cntrl_allKeys[_stop_reprod_key_cntrl_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stop_reprod_cntrlComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stop_reprod_cntrlRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stop_reprod_cntrl' ---
    for (const thisComponent of stop_reprod_cntrlComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stop_reprod_cntrl.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(stop_reprod_key_cntrl.corr, level);
    }
    psychoJS.experiment.addData('stop_reprod_key_cntrl.keys', stop_reprod_key_cntrl.keys);
    if (typeof stop_reprod_key_cntrl.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('stop_reprod_key_cntrl.rt', stop_reprod_key_cntrl.rt);
        psychoJS.experiment.addData('stop_reprod_key_cntrl.duration', stop_reprod_key_cntrl.duration);
        routineTimer.reset();
        }
    
    stop_reprod_key_cntrl.stop();
    // the Routine "stop_reprod_cntrl" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var quality_codeMaxDurationReached;
var quality_codeMaxDuration;
var quality_codeComponents;
function quality_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'quality_code' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    quality_codeClock.reset();
    routineTimer.reset();
    quality_codeMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('quality_code.started', globalClock.getTime());
    quality_codeMaxDuration = null
    // keep track of which components have finished
    quality_codeComponents = [];
    
    for (const thisComponent of quality_codeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function quality_codeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'quality_code' ---
    // get current time
    t = quality_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of quality_codeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function quality_codeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'quality_code' ---
    for (const thisComponent of quality_codeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('quality_code.stopped', globalClock.getTime());
    // the Routine "quality_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ref_qualMaxDurationReached;
var ref_qualMaxDuration;
var ref_qualComponents;
function ref_qualRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ref_qual' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ref_qualClock.reset();
    routineTimer.reset();
    ref_qualMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_qual_2
    refDur = Number(ref_duration_qual);
    
    smallSize = 0.15;
    bigSize = 0.25;
    currentSize = smallSize;
    ref_stim_qual.size = currentSize;
    
    stimStart = 0;
    nextSwitch = stimStart + 0.3 + Math.random() * 0.5;
    psychoJS.experiment.addData('ref_qual.started', globalClock.getTime());
    ref_qualMaxDuration = null
    // keep track of which components have finished
    ref_qualComponents = [];
    ref_qualComponents.push(ref_stim_qual);
    
    for (const thisComponent of ref_qualComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ref_qualRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ref_qual' ---
    // get current time
    t = ref_qualClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_qual_2
    if (ref_stim_qual.status === PsychoJS.Status.STARTED && t >= nextSwitch) {
        if (currentSize === smallSize) {
            currentSize = bigSize;
        } else {
            currentSize = smallSize;
        }
    
        ref_stim_qual.size = currentSize;
        nextSwitch = t + 0.3 + Math.random() * 0.5;
    }
    
    // *ref_stim_qual* updates
    if (t >= 0.0 && ref_stim_qual.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ref_stim_qual.tStart = t;  // (not accounting for frame time here)
      ref_stim_qual.frameNStart = frameN;  // exact frame index
      
      ref_stim_qual.setAutoDraw(true);
    }
    
    
    // if ref_stim_qual is active this frame...
    if (ref_stim_qual.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + ref_duration_qual - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ref_stim_qual.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      ref_stim_qual.tStop = t;  // not accounting for scr refresh
      ref_stim_qual.frameNStop = frameN;  // exact frame index
      // update status
      ref_stim_qual.status = PsychoJS.Status.FINISHED;
      ref_stim_qual.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ref_qualComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ref_qualRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ref_qual' ---
    for (const thisComponent of ref_qualComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ref_qual.stopped', globalClock.getTime());
    // the Routine "ref_qual" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stop_reprod_qltMaxDurationReached;
var _stop_reprod_key_qlt_allKeys;
var stop_reprod_qltMaxDuration;
var stop_reprod_qltComponents;
function stop_reprod_qltRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stop_reprod_qlt' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    stop_reprod_qltClock.reset();
    routineTimer.reset();
    stop_reprod_qltMaxDurationReached = false;
    // update component parameters for each repeat
    stop_reprod_key_qlt.keys = undefined;
    stop_reprod_key_qlt.rt = undefined;
    _stop_reprod_key_qlt_allKeys = [];
    psychoJS.experiment.addData('stop_reprod_qlt.started', globalClock.getTime());
    stop_reprod_qltMaxDuration = null
    // keep track of which components have finished
    stop_reprod_qltComponents = [];
    stop_reprod_qltComponents.push(stop_reprod_stim_qlt);
    stop_reprod_qltComponents.push(stop_reprod_key_qlt);
    
    for (const thisComponent of stop_reprod_qltComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stop_reprod_qltRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stop_reprod_qlt' ---
    // get current time
    t = stop_reprod_qltClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stop_reprod_stim_qlt* updates
    if (t >= 0.0 && stop_reprod_stim_qlt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_reprod_stim_qlt.tStart = t;  // (not accounting for frame time here)
      stop_reprod_stim_qlt.frameNStart = frameN;  // exact frame index
      
      stop_reprod_stim_qlt.setAutoDraw(true);
    }
    
    
    // if stop_reprod_stim_qlt is active this frame...
    if (stop_reprod_stim_qlt.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stop_reprod_key_qlt* updates
    if (t >= 0.0 && stop_reprod_key_qlt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_reprod_key_qlt.tStart = t;  // (not accounting for frame time here)
      stop_reprod_key_qlt.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stop_reprod_key_qlt.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stop_reprod_key_qlt.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stop_reprod_key_qlt.clearEvents(); });
    }
    
    // if stop_reprod_key_qlt is active this frame...
    if (stop_reprod_key_qlt.status === PsychoJS.Status.STARTED) {
      let theseKeys = stop_reprod_key_qlt.getKeys({keyList: 'space', waitRelease: false});
      _stop_reprod_key_qlt_allKeys = _stop_reprod_key_qlt_allKeys.concat(theseKeys);
      if (_stop_reprod_key_qlt_allKeys.length > 0) {
        stop_reprod_key_qlt.keys = _stop_reprod_key_qlt_allKeys[_stop_reprod_key_qlt_allKeys.length - 1].name;  // just the last key pressed
        stop_reprod_key_qlt.rt = _stop_reprod_key_qlt_allKeys[_stop_reprod_key_qlt_allKeys.length - 1].rt;
        stop_reprod_key_qlt.duration = _stop_reprod_key_qlt_allKeys[_stop_reprod_key_qlt_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stop_reprod_qltComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var reproduction_duration;
var error_percentage;
var acceptable_error;
function stop_reprod_qltRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stop_reprod_qlt' ---
    for (const thisComponent of stop_reprod_qltComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stop_reprod_qlt.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(stop_reprod_key_qlt.corr, level);
    }
    psychoJS.experiment.addData('stop_reprod_key_qlt.keys', stop_reprod_key_qlt.keys);
    if (typeof stop_reprod_key_qlt.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('stop_reprod_key_qlt.rt', stop_reprod_key_qlt.rt);
        psychoJS.experiment.addData('stop_reprod_key_qlt.duration', stop_reprod_key_qlt.duration);
        routineTimer.reset();
        }
    
    stop_reprod_key_qlt.stop();
    // Run 'End Routine' code from error_code_qlt
    reproduction_duration = stop_reprod_key_qlt.rt;
    error_percentage = (((reproduction_duration - ref_duration_qual) / ref_duration_qual) * 100);
    acceptable_error = 15;
    if ((Math.abs(error_percentage) <= acceptable_error)) {
        quality_msg = "\u0432\u0435\u0440\u043d\u043e";
        feedback_color = "green";
    } else {
        if ((error_percentage > acceptable_error)) {
            quality_msg = "\u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e";
            feedback_color = "red";
        } else {
            quality_msg = "\u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u0430\u043b\u043e";
            feedback_color = "red";
        }
    }
    
    // the Routine "stop_reprod_qlt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var quality_fdbMaxDurationReached;
var quality_fdbMaxDuration;
var quality_fdbComponents;
function quality_fdbRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'quality_fdb' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    quality_fdbClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    quality_fdbMaxDurationReached = false;
    // update component parameters for each repeat
    quality_fdb_text.setColor(new util.Color(feedback_color));
    quality_fdb_text.setText(quality_msg);
    psychoJS.experiment.addData('quality_fdb.started', globalClock.getTime());
    quality_fdbMaxDuration = null
    // keep track of which components have finished
    quality_fdbComponents = [];
    quality_fdbComponents.push(quality_fdb_text);
    
    for (const thisComponent of quality_fdbComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function quality_fdbRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'quality_fdb' ---
    // get current time
    t = quality_fdbClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *quality_fdb_text* updates
    if (t >= 0.0 && quality_fdb_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      quality_fdb_text.tStart = t;  // (not accounting for frame time here)
      quality_fdb_text.frameNStart = frameN;  // exact frame index
      
      quality_fdb_text.setAutoDraw(true);
    }
    
    
    // if quality_fdb_text is active this frame...
    if (quality_fdb_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (quality_fdb_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      quality_fdb_text.tStop = t;  // not accounting for scr refresh
      quality_fdb_text.frameNStop = frameN;  // exact frame index
      // update status
      quality_fdb_text.status = PsychoJS.Status.FINISHED;
      quality_fdb_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of quality_fdbComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function quality_fdbRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'quality_fdb' ---
    for (const thisComponent of quality_fdbComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('quality_fdb.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (quality_fdbMaxDurationReached) {
        quality_fdbClock.add(quality_fdbMaxDuration);
    } else {
        quality_fdbClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var code_quantityMaxDurationReached;
var code_quantityMaxDuration;
var code_quantityComponents;
function code_quantityRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'code_quantity' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    code_quantityClock.reset();
    routineTimer.reset();
    code_quantityMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('code_quantity.started', globalClock.getTime());
    code_quantityMaxDuration = null
    // keep track of which components have finished
    code_quantityComponents = [];
    
    for (const thisComponent of code_quantityComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function code_quantityRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'code_quantity' ---
    // get current time
    t = code_quantityClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of code_quantityComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function code_quantityRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'code_quantity' ---
    for (const thisComponent of code_quantityComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('code_quantity.stopped', globalClock.getTime());
    // the Routine "code_quantity" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ref_quantMaxDurationReached;
var ref_quantMaxDuration;
var ref_quantComponents;
function ref_quantRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ref_quant' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ref_quantClock.reset();
    routineTimer.reset();
    ref_quantMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_quant_2
    refDur = Number(ref_duration_quant);
    
    smallSize = 0.15;
    bigSize = 0.25;
    currentSize = smallSize;
    ref_stim_quant.size = currentSize;
    
    stimStart = 0;
    nextSwitch = stimStart + 0.3 + Math.random() * 0.5;
    psychoJS.experiment.addData('ref_quant.started', globalClock.getTime());
    ref_quantMaxDuration = null
    // keep track of which components have finished
    ref_quantComponents = [];
    ref_quantComponents.push(ref_stim_quant);
    
    for (const thisComponent of ref_quantComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ref_quantRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ref_quant' ---
    // get current time
    t = ref_quantClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_quant_2
    if (ref_stim_quant.status === PsychoJS.Status.STARTED && t >= nextSwitch) {
        if (currentSize === smallSize) {
            currentSize = bigSize;
        } else {
            currentSize = smallSize;
        }
    
        ref_stim_quant.size = currentSize;
        nextSwitch = t + 0.3 + Math.random() * 0.5;
    }
    
    // *ref_stim_quant* updates
    if (t >= 0.0 && ref_stim_quant.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ref_stim_quant.tStart = t;  // (not accounting for frame time here)
      ref_stim_quant.frameNStart = frameN;  // exact frame index
      
      ref_stim_quant.setAutoDraw(true);
    }
    
    
    // if ref_stim_quant is active this frame...
    if (ref_stim_quant.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + ref_duration_quant - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ref_stim_quant.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      ref_stim_quant.tStop = t;  // not accounting for scr refresh
      ref_stim_quant.frameNStop = frameN;  // exact frame index
      // update status
      ref_stim_quant.status = PsychoJS.Status.FINISHED;
      ref_stim_quant.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ref_quantComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ref_quantRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ref_quant' ---
    for (const thisComponent of ref_quantComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ref_quant.stopped', globalClock.getTime());
    // the Routine "ref_quant" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stop_reprod_qnttMaxDurationReached;
var _stop_reprod_key_qntt_allKeys;
var stop_reprod_qnttMaxDuration;
var stop_reprod_qnttComponents;
function stop_reprod_qnttRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stop_reprod_qntt' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    stop_reprod_qnttClock.reset();
    routineTimer.reset();
    stop_reprod_qnttMaxDurationReached = false;
    // update component parameters for each repeat
    stop_reprod_key_qntt.keys = undefined;
    stop_reprod_key_qntt.rt = undefined;
    _stop_reprod_key_qntt_allKeys = [];
    psychoJS.experiment.addData('stop_reprod_qntt.started', globalClock.getTime());
    stop_reprod_qnttMaxDuration = null
    // keep track of which components have finished
    stop_reprod_qnttComponents = [];
    stop_reprod_qnttComponents.push(stop_reprod_stim_qntt);
    stop_reprod_qnttComponents.push(stop_reprod_key_qntt);
    
    for (const thisComponent of stop_reprod_qnttComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stop_reprod_qnttRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stop_reprod_qntt' ---
    // get current time
    t = stop_reprod_qnttClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stop_reprod_stim_qntt* updates
    if (t >= 0.0 && stop_reprod_stim_qntt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_reprod_stim_qntt.tStart = t;  // (not accounting for frame time here)
      stop_reprod_stim_qntt.frameNStart = frameN;  // exact frame index
      
      stop_reprod_stim_qntt.setAutoDraw(true);
    }
    
    
    // if stop_reprod_stim_qntt is active this frame...
    if (stop_reprod_stim_qntt.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stop_reprod_key_qntt* updates
    if (t >= 0.0 && stop_reprod_key_qntt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_reprod_key_qntt.tStart = t;  // (not accounting for frame time here)
      stop_reprod_key_qntt.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stop_reprod_key_qntt.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stop_reprod_key_qntt.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stop_reprod_key_qntt.clearEvents(); });
    }
    
    // if stop_reprod_key_qntt is active this frame...
    if (stop_reprod_key_qntt.status === PsychoJS.Status.STARTED) {
      let theseKeys = stop_reprod_key_qntt.getKeys({keyList: 'space', waitRelease: false});
      _stop_reprod_key_qntt_allKeys = _stop_reprod_key_qntt_allKeys.concat(theseKeys);
      if (_stop_reprod_key_qntt_allKeys.length > 0) {
        stop_reprod_key_qntt.keys = _stop_reprod_key_qntt_allKeys[_stop_reprod_key_qntt_allKeys.length - 1].name;  // just the last key pressed
        stop_reprod_key_qntt.rt = _stop_reprod_key_qntt_allKeys[_stop_reprod_key_qntt_allKeys.length - 1].rt;
        stop_reprod_key_qntt.duration = _stop_reprod_key_qntt_allKeys[_stop_reprod_key_qntt_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stop_reprod_qnttComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stop_reprod_qnttRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stop_reprod_qntt' ---
    for (const thisComponent of stop_reprod_qnttComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stop_reprod_qntt.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(stop_reprod_key_qntt.corr, level);
    }
    psychoJS.experiment.addData('stop_reprod_key_qntt.keys', stop_reprod_key_qntt.keys);
    if (typeof stop_reprod_key_qntt.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('stop_reprod_key_qntt.rt', stop_reprod_key_qntt.rt);
        psychoJS.experiment.addData('stop_reprod_key_qntt.duration', stop_reprod_key_qntt.duration);
        routineTimer.reset();
        }
    
    stop_reprod_key_qntt.stop();
    // Run 'End Routine' code from error_code_qntt
    reproduction_duration = stop_reprod_key_qntt.rt;
    error_percentage = (((reproduction_duration - ref_duration_quant) / ref_duration_quant) * 100);
    acceptable_error = 15;
    if ((Math.abs(error_percentage) <= acceptable_error)) {
        quantity_msg = "\u0432\u0435\u0440\u043d\u043e";
        feedback_color = "green";
    } else {
        if ((error_percentage > acceptable_error)) {
            quantity_msg = `на ${util.pad(Number.parseFloat(Math.abs(error_percentage)).toFixed(1), 1)}% больше`;
            feedback_color = "red";
        } else {
            quantity_msg = `на ${util.pad(Number.parseFloat(Math.abs(error_percentage)).toFixed(1), 1)}% меньше`;
            feedback_color = "red";
        }
    }
    
    // the Routine "stop_reprod_qntt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var quantity_fdbMaxDurationReached;
var quantity_fdbMaxDuration;
var quantity_fdbComponents;
function quantity_fdbRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'quantity_fdb' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    quantity_fdbClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    quantity_fdbMaxDurationReached = false;
    // update component parameters for each repeat
    quantity_fdb_text.setColor(new util.Color(feedback_color));
    quantity_fdb_text.setText(quantity_msg);
    psychoJS.experiment.addData('quantity_fdb.started', globalClock.getTime());
    quantity_fdbMaxDuration = null
    // keep track of which components have finished
    quantity_fdbComponents = [];
    quantity_fdbComponents.push(quantity_fdb_text);
    
    for (const thisComponent of quantity_fdbComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function quantity_fdbRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'quantity_fdb' ---
    // get current time
    t = quantity_fdbClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *quantity_fdb_text* updates
    if (t >= 0.0 && quantity_fdb_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      quantity_fdb_text.tStart = t;  // (not accounting for frame time here)
      quantity_fdb_text.frameNStart = frameN;  // exact frame index
      
      quantity_fdb_text.setAutoDraw(true);
    }
    
    
    // if quantity_fdb_text is active this frame...
    if (quantity_fdb_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (quantity_fdb_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      quantity_fdb_text.tStop = t;  // not accounting for scr refresh
      quantity_fdb_text.frameNStop = frameN;  // exact frame index
      // update status
      quantity_fdb_text.status = PsychoJS.Status.FINISHED;
      quantity_fdb_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of quantity_fdbComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function quantity_fdbRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'quantity_fdb' ---
    for (const thisComponent of quantity_fdbComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('quantity_fdb.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (quantity_fdbMaxDurationReached) {
        quantity_fdbClock.add(quantity_fdbMaxDuration);
    } else {
        quantity_fdbClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var byeMaxDurationReached;
var byeMaxDuration;
var byeComponents;
function byeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    byeClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    byeMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('bye.started', globalClock.getTime());
    byeMaxDuration = null
    // keep track of which components have finished
    byeComponents = [];
    byeComponents.push(bye_text);
    
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function byeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bye' ---
    // get current time
    t = byeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bye_text* updates
    if (t >= 0.0 && bye_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bye_text.tStart = t;  // (not accounting for frame time here)
      bye_text.frameNStart = frameN;  // exact frame index
      
      bye_text.setAutoDraw(true);
    }
    
    
    // if bye_text is active this frame...
    if (bye_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (bye_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      bye_text.tStop = t;  // not accounting for scr refresh
      bye_text.frameNStop = frameN;  // exact frame index
      // update status
      bye_text.status = PsychoJS.Status.FINISHED;
      bye_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function byeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bye' ---
    for (const thisComponent of byeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('bye.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (byeMaxDurationReached) {
        byeClock.add(byeMaxDuration);
    } else {
        byeClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var OSFMaxDurationReached;
var OSFMaxDuration;
var OSFComponents;
function OSFRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'OSF' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    OSFClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    OSFMaxDurationReached = false;
    // update component parameters for each repeat
    // Отключаем стандартное сохранение
    psychoJS._saveResults = 0;
    
    // Формируем имя файла
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Получаем все данные 
    let dataObj = psychoJS._experiment._trialsData;
    
    // Составляем полный список компонентов
    let allKeys = [];
    dataObj.forEach(trial => {
        Object.keys(trial).forEach(key => {
            if (!allKeys.includes(key)) {
                allKeys.push(key);
            }
        });
    });
    
    // Формируем CSV с заголовками
    let csv = allKeys.join(',') + '\n';
    
    dataObj.forEach(trial => {
        let row = allKeys.map(key => {
            let val = trial[key];
            // если значение undefined, ставим пустую строку
            return val !== undefined ? `"${val}"` : '';
        }).join(',');
        csv += row + '\n';
    });
    
    // Отправляем на OSF через DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'eMRPPwAColQZ', // меняем на свой ID
            filename: filename,
            data: csv,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data saved:', data);
        quitPsychoJS();
    })
    .catch(err => {
        console.error('Error saving data:', err);
        quitPsychoJS();
    });
    psychoJS.experiment.addData('OSF.started', globalClock.getTime());
    OSFMaxDuration = null
    // keep track of which components have finished
    OSFComponents = [];
    OSFComponents.push(resalt);
    
    for (const thisComponent of OSFComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function OSFRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'OSF' ---
    // get current time
    t = OSFClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *resalt* updates
    if (t >= 0.0 && resalt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resalt.tStart = t;  // (not accounting for frame time here)
      resalt.frameNStart = frameN;  // exact frame index
      
      resalt.setAutoDraw(true);
    }
    
    
    // if resalt is active this frame...
    if (resalt.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (resalt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      resalt.tStop = t;  // not accounting for scr refresh
      resalt.frameNStop = frameN;  // exact frame index
      // update status
      resalt.status = PsychoJS.Status.FINISHED;
      resalt.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of OSFComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function OSFRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'OSF' ---
    for (const thisComponent of OSFComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('OSF.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (OSFMaxDurationReached) {
        OSFClock.add(OSFMaxDuration);
    } else {
        OSFClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
