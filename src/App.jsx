import Button from "./components/ui/Button";
import { X, Play, Plus, RotateCcw, FileText } from "lucide-react";
import Input from "./components/ui/Input";
import Textarea from "./components/ui/Textarea";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Button variant="bordered">Активные</Button>
      <Button variant="colored">
        <Play className="h-3.5 w-3.5" />
        Старт 
      </Button>
      <Button variant="colored">Все</Button>
      <Button variant="colored">
        <Plus className="h-5 w-5" />
      </Button>
      <Button variant="bordered">
        <RotateCcw className="h-5 w-5" />
      </Button>
      <Button variant="icon" aria-label="Добавить новую задачу">
        <FileText className="h-5 w-5" />
      </Button>
      <Button variant="danger">
        <X className="h-5 w-5" />
      </Button>

      <Input type='text' placeholder="Добавить новую задачу..."/>
      <Input type='number'/>

      <Textarea placeholder='Добавить описание' />
    </div>
  );
}

export default App;
