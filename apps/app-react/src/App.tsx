import { useRef, useState } from 'react';
import './App.css';
import {
	AppButton,
	AppList,
	AppInputTextField,
	AppListItem,
	defineCustomElements,
} from '@chepe/stencil-react';

void defineCustomElements();

type TodoItem = { id: number; text: string; completed: boolean };

function App() {
	const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
	const [inpuText, setInputText] = useState<string>('');
	const inputTextRef = useRef<HTMLAppInputTextFieldElement>(null);

	const onCreateButtonEvent = async () => {
		if (await inputTextRef.current?.isEmpty()) return;

		const newTodo: TodoItem = {
			id: todoItems.length + 1,
			text: inpuText,
			completed: false,
		};
		setTodoItems([...todoItems, newTodo]);
		inputTextRef.current?.clear();
	};

	const onDeleteEvent = (todoItem: TodoItem) => {
		const updateList = todoItems.filter((t) => t.id !== todoItem.id);
		setTodoItems(updateList);
	};
	return (
		<>
			<main className="flex flex-col items-center justify-center h-screen mx-auto max-w-md">
				<section className="w-full flex items-center">
					<AppInputTextField
						placeholder="Create a todo"
						ref={inputTextRef}
						className="w-full mr-1"
						onTextInputChangeEvent={(event: CustomEvent) => {
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							const { value } = event.detail;
							setInputText(value as string);
						}}
					/>
					<AppButton onClick={onCreateButtonEvent}>+</AppButton>
				</section>
				<section className="h-48 overflow-y-auto w-full">
					<AppList>
						{todoItems.map((todoItem) => (
							<AppListItem key={todoItem.id}>
								<span className="flex-1 capitalize">
									{todoItem.text}
								</span>
								<AppButton
									onClick={() => onDeleteEvent(todoItem)}
									size="sm">
									X
								</AppButton>
							</AppListItem>
						))}
					</AppList>
				</section>
			</main>
		</>
	);
}

export default App;
