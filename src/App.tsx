import './App.scss';
import './locales/i18n';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import CountDown from './components/CountDown'


export default function App() {
  // useTheme();
  return <CountDown />
}