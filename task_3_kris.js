	const Stud_arr = [
				{
                FirstName: "Anna",
                LastName: "Georga",
                Age: 19,
                StudGrade: 7.0,	
                },
                {
                FirstName: "Danil",
                LastName: "Lev",
                Age: 20,
                StudGrade: 6.4,
                },
			];	

		const form = document.querySelector('#form');
		const module_function = (function () {

			const Stud = [];
			let table;

		function AddStud(FirstName, LastName, Age, StudGrade) {
			this.FirstName = FirstName;
			this.LastName = LastName;
			this.Age = Age;
			this.StudGrade = StudGrade;
		}

		function AddNewStud(FirstName, LastName, Age, StudGrade) {
			const ObjStud = new AddStud(FirstName, LastName, Age, StudGrade)
			Stud.push(ObjStud);
			if (Stud.length === 1) {
				table = document.createElement('table');
				const row = document.createElement('tr');
				const firstTrTableHTML = `
				<td>First Name</td>
				<td>Last Name</td>
				<td>Age</td>
				<td>Grade</td>
				<td></td>`;
				row.insertAdjacentHTML('beforeend', firstTrTableHTML);
				table.appendChild(row);
			}
			NewStudDescription();
			StudAvaregeGrade();
		}
		function AddCol() {
			const Student = Stud[Stud.length - 1];
			const row = document.createElement('tr');
			const NextOneTrTableHTML = 
			`<td>${ Student.FirstName }</td>
			 <td>${ Student.LastName }</td>
			 <td>${ Student.Age }</td>
			 <td>${ Student.StudGrade }</td>`;
			row.insertAdjacentHTML('beforeend', NextOneTrTableHTML)
			table.appendChild(row);

			document.body.appendChild(table);
		}

		function NewStudDescription() {
			const ObjStud = Stud[Stud.length - 1];
			const row = document.createElement('tr');
			for(let prop in ObjStud) {
				const column = document.createElement('td');
				column.textContent = ObjStud[prop];
				row.appendChild(column);
			}
			const DeletStud = document.createElement('td');
			DeletStud.textContent = 'Delete';
			row.appendChild(DeletStud);
			table.appendChild(row);
			document.body.appendChild(table);
		}

		function StudAvaregeGrade() {
			const element = document.querySelector('table');
			element.addEventListener('click', DeletStud);
			const ResultEl = document.querySelector('#result');
			let avg = 0;
			Stud.forEach(item => {
				avg += +item.StudGrade;
			});

			ResultEl.textContent = +(avg / Stud.length).toFixed(2);
		}


		function DeletStud(event) {
			if (event.target.closest('tr') && event.target.textContent === 'Delete') {
				const deletedElement = event.target.closest('tr');
				Array.from(table.children).forEach((child, index) => {
					if (child === deletedElement) {
						Stud.splice(index - 1, 1);
						deletedElement.remove();
					}
				})
			}
		}

		return {AddNewStud};
})();


		Stud_arr.forEach( Student => {
					module_function.AddNewStud(Student.FirstName, Student.LastName, Student.Age, Student.StudGrade);
		});

		form.addEventListener('submit', event => {
			event.preventDefault();
			const FirstName = form.FirstName.value.trim();
			const LastName = form.LastName.value.trim();
			const Age = form.Age.value.trim();
			const StudGrade = form.StudGrade.value.trim();
			if (!FirstName || !LastName || !Age || !StudGrade) {
				console.log('erro');
				return;
			}
			module_function.AddNewStud(FirstName, LastName, Age, StudGrade);
			form.reset();
});
			module_function.AddNewStud('Michelle', 'Ladukova', 17,6.6);	