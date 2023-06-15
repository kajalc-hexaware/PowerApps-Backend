const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task_id: {
    type: Number,
    required: true
  },
  task_name: {
    type: String,
    trim: true
  },
  task_start_date: {
    type: String
  },
  task_end_date: {
    type: String
  },
  task_deadline: {
    type: String
  },
  marks_allocated: {
    type: Number
  },
  max_marks: {
    type: Number
  },
  task_status: {
    type: String
  },
  isCompleted: {
    type: Boolean
  },
  task_feedback: {
    type: String,
    trim: true
  }
});

const goalSchema = new mongoose.Schema({
  goal_id: {
    type: Number
  },
  goal_name: {
    type: String,
    trim: true
  },
  mentee_id: {
    type: Number
  },
  mentor_id: {
    type: Number
  },
  domain_id: {
    type: Number
  },
  goal_start_date: {
    type: String
  },
  goal_end_date: {
    type: String
  },
  goal_duration: {
    type: String,
    trim: true
  },
  tasks_count: {
    type: Number
  },
  tasks: {
    type: [taskSchema]
  },
  isCompleted: {
    type: Boolean
  },
  goal_status: {
    type: String,
    trim: true
  },
  goal_feedback: {
    type: String,
    trim: true
  },
  total_marks: {
    type: Number
  }
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
