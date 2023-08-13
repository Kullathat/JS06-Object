const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };

function newEmp (employ) {
    if ( employ === 'john' || employ  === 'peter' || employ === 'mike' || employ  === 'sarah') {
            return console.log(employees.john)
        }  else {
            alert('Not Found') ;
        }
}

  
