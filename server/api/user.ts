import axios from 'axios'
export default (req, res) => {
  return [{
        "userId": "test_id1",
        "name": "Profavor",
        "grade": "CL3",
        "dept": "Dept Name1",
        "company": "Miracom INC"
    },
    {
        "userId": "test_id2",
        "name": "Staricex",
        "grade": "CL3",
        "dept": "Dept Name2",
        "company": "Prusoft"
    }]
}