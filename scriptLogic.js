  for (var i = 0; i < arrayData.length; i++) {
      if (arrayData[i].ID === "001") {
          var info = document.getElementById(`name${i}`);
          info.innerText = `${arrayData[i].Name} (Supervisor)`;
      } else {
          var info = document.getElementById(`name${i}`);
          info.innerText = `${arrayData[i].Name}`;
      }

      var info = document.getElementById(`id${i}`);
      info.innerText = `ID: ${arrayData[i].ID}`;
      var info = document.getElementById(`email${i}`);
      info.innerText = `Email: ${arrayData[i].Email}`;

      for (key in arrayData[i]) {
          if (key === "Office") {
              var info = document.getElementById(`unique${i}`);
              info.innerText = `${key}: ${arrayData[i][key]}`;
          }
          if (key === "GitHub") {
              var info = document.getElementById(`unique${i}`);
              info.innerText = `${key}: ${arrayData[i][key]}`;
              var info = document.getElementById(`name${i}`);
              info.innerText = `${arrayData[i].Name} (Employee)`;
          }
          if (key === "School") {
              var info = document.getElementById(`unique${i}`);
              info.innerText = `${key}: ${arrayData[i][key]}`;
              var info = document.getElementById(`name${i}`);
              info.innerText = `${arrayData[i].Name} (Intern)`;
          }
      }
  }