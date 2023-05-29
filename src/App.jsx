import { useState } from 'react';
function App() {
	const [showFeedbackForm, setShowFeedbackForm] = useState(false);
	const [formValue, setFormValue] = useState({
		author: '',
		rating: 1,
		comment: '',
	});
	const [errors, setErrors] = useState({});

	function handleSubmit(e) {
		e.preventDefault();
		const validationErrors = {};

		if (formValue.author.length < 2 || formValue.author.length > 15) {
			validationErrors.name = 'Name must be between 2 and 15 characters';
		}

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		// Display alert to show form submission success
		alert(`Current State is ${JSON.stringify(formValue)}`);

		setFormValue({
			author: '',
			rating: 1,
			comment: '',
		});
		setErrors({});
		setShowFeedbackForm(false);
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Cinthol Soap</h1>
				<button onClick={() => setShowFeedbackForm(true)}>Give Feedback</button>
			</header>

			{showFeedbackForm && (
				<div className='feedback-modal'>
					<div className='feedback-form'>
						<h2>Feedback Form</h2>
						<form onSubmit={handleSubmit}>
							<label>
								Your Name:
								<input
									type='text'
									value={formValue.author}
									onChange={(e) => setFormValue({ ...formValue, author: e.target.value })}
								/>
								{errors.name && <span className='error'>{errors.name}</span>}
							</label>
							<label>
								Rating:
								<select
									value={formValue.rating}
									onChange={(e) => setFormValue({ ...formValue, rating: e.target.value })}
								>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
								</select>
							</label>
							<label>
								Comment:
								<textarea
									value={formValue.comment}
									onChange={(e) =>
										setFormValue({ ...formValue, comment: e.target.value })
									}
								/>
							</label>
							<button type='submit'>Submit</button>
						</form>
						<button
							className='close-button'
							onClick={() => setShowFeedbackForm(false)}
						>
							X
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
