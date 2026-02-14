export type CowStatus = 'Active' | 'In Treatment' | 'Deceased';

export type CowEventType =
  | 'Weight Check'
  | 'Treatment'
  | 'Moved Pen'
  | 'Death';

export interface CowEvent {
  id: string;
  type: CowEventType;
  date: string;
  value?: number;
}

export interface Cow {
  id: string;
  earTag: string;
  sex: 'Male' | 'Female';
  pen: string;
  status: CowStatus;
  weight?: number;
  dailyGain?: number;
  events: CowEvent[];
  lastEventDate: string;
}
