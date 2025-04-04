import React from 'react';
import { BookOpen, Award, Lightbulb } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Organic Farming 101',
    type: 'Course',
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800',
    icon: BookOpen,
  },
  {
    id: 2,
    title: 'Sustainable Agriculture Certification',
    type: 'Certification',
    duration: '3 months',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800',
    icon: Award,
  },
  {
    id: 3,
    title: 'Water Conservation Techniques',
    type: 'Best Practice',
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1439127989242-c3749a012eac?w=800',
    icon: Lightbulb,
  },
];

const KnowledgeHub = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Knowledge Hub</h2>
        <div className="flex gap-2">
          <select className="border rounded-md px-3 py-2 text-gray-700">
            <option>All Resources</option>
            <option>Courses</option>
            <option>Certifications</option>
            <option>Best Practices</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          const Icon = course.icon;
          return (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-600">{course.type}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KnowledgeHub;