enum Color {
    Red,
    Green,
    Blue,
  }
  
  let selectedColor: Color = Color.Red;
  
  // enum example
  // helps us to store constants
  
  // numeric enum
  enum UserRequest {
    ReadData,
    // ReadData = 2,
    SaveData,
    UpdateData,
  }
  
  console.log(UserRequest);
  console.log(UserRequest.ReadData);
  console.log(UserRequest.SaveData);
  
  // string enum
  enum UserRequest {
    readData = 'READ_DATA',
    // ReadData = 2,
    saveData = 'SAVE_DATA',
    updateData = 'UPDATE_DATA',
  }
  
  console.log(UserRequest);
  console.log(UserRequest.ReadData);
  console.log(UserRequest.SaveData);
  console.log(UserRequest['UpdateData']);
  
  // Heterogeneous enum
  enum User {
    id = 101,
    name = 'Safaet',
  }

  console.log(User.name);
  