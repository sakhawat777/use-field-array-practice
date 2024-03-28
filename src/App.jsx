import './App.css';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

function App() {
	const { register, control, handleSubmit } = useForm({
		// defaultValues: {};
	});
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'test',
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ul>
				{fields.map((item, index) => (
					<li key={item.id}>
						<input {...register(`test.${index}.firstName`)} />
						<Controller
							render={({ field }) => <input {...field} />}
							name={`test.${index}.lastName`}
							control={control}
						/>
						<button type='button' onClick={() => remove(index)}>
							Delete
						</button>
					</li>
				))}
			</ul>
			<button
				type='button'
				onClick={() => append({ firstName: 'bill', lastName: 'luo' })}>
				Append
			</button>
			<input type='submit' />
		</form>
	);
}

export default App;
