import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todoListSelector, searchSelector } from "../../redux/selectors";

export default function TodoList() {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')
  const [priority, setPriority] = useState("Medium")

  const todoList = useSelector(todoListSelector)
  // const search = useSelector(searchSelector)
  console.log(todoList)

  const handleAddTodo = () => {
    //dispatch()
    dispatch(addTodo({
      id: uuidv4(),
      name: todo,
      priority: priority,
      completed: false
    }))
    setTodo('')
    setPriority("Medium")
  }

  const handleInputChange = (e) => {
    setTodo(e.target.value)
  }

  const handlePriorytyChange = (value) => {
    console.log(value)
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) =>(
          <Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed}/>
        ))}
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todo} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorytyChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
