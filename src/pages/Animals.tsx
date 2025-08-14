import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  AlertTriangle, 
  Heart, 
  Info,
  Search,
  Filter,
  Globe,
  TreePine,
  Waves
} from 'lucide-react';

interface Animal {
  id: number;
  name: string;
  scientificName: string;
  image: string;
  status: 'Critically Endangered' | 'Endangered' | 'Vulnerable' | 'Near Threatened';
  population: string;
  habitat: string;
  location: string;
  threats: string[];
  facts: string[];
  conservationEfforts: string;
  category: 'Marine' | 'Terrestrial' | 'Avian';
}

const Animals: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const animals: Animal[] = [
    {
      id: 1,
      name: 'Vaquita',
      scientificName: 'Phocoena sinus',
      image: '🐬',
      status: 'Critically Endangered',
      population: '< 20 individuals',
      habitat: 'Marine - Gulf of California',
      location: 'Mexico',
      threats: ['Illegal fishing', 'Bycatch', 'Habitat degradation'],
      facts: [
        'Smallest cetacean species in the world',
        'Only found in the northern Gulf of California',
        'Known as the "panda of the sea" due to distinctive markings'
      ],
      conservationEfforts: 'International conservation programs, fishing restrictions, and habitat protection',
      category: 'Marine'
    },
    {
      id: 2,
      name: 'Sumatran Orangutan',
      scientificName: 'Pongo abelii',
      image: '🦧',
      status: 'Critically Endangered',
      population: '~14,000 individuals',
      habitat: 'Tropical rainforest',
      location: 'Sumatra, Indonesia',
      threats: ['Deforestation', 'Illegal pet trade', 'Hunting'],
      facts: [
        'One of the most intelligent primates',
        'Builds nests in trees every night',
        'Shares 97% of DNA with humans'
      ],
      conservationEfforts: 'Forest protection, anti-poaching measures, and rehabilitation programs',
      category: 'Terrestrial'
    },
    {
      id: 3,
      name: 'California Condor',
      scientificName: 'Gymnogyps californianus',
      image: '🦅',
      status: 'Critically Endangered',
      population: '~500 individuals',
      habitat: 'Mountainous regions and coastal areas',
      location: 'California, Arizona, Utah',
      threats: ['Lead poisoning', 'Habitat loss', 'Power line collisions'],
      facts: [
        'Largest flying bird in North America',
        'Wingspan can reach 9.5 feet',
        'Can live up to 60 years in the wild'
      ],
      conservationEfforts: 'Captive breeding programs, lead ammunition bans, and habitat restoration',
      category: 'Avian'
    },
    {
      id: 4,
      name: 'Javan Rhino',
      scientificName: 'Rhinoceros sondaicus',
      image: '🦏',
      status: 'Critically Endangered',
      population: '~75 individuals',
      habitat: 'Tropical rainforest and grasslands',
      location: 'Java, Indonesia',
      threats: ['Poaching', 'Habitat loss', 'Natural disasters'],
      facts: [
        'Smallest rhino species',
        'Only found in Ujung Kulon National Park',
        'Excellent swimmers despite their size'
      ],
      conservationEfforts: 'Protected area management, anti-poaching patrols, and population monitoring',
      category: 'Terrestrial'
    },
    {
      id: 5,
      name: 'Hawksbill Sea Turtle',
      scientificName: 'Eretmochelys imbricata',
      image: '🐢',
      status: 'Critically Endangered',
      population: '~25,000 nesting females',
      habitat: 'Coral reefs and tropical oceans',
      location: 'Global tropical waters',
      threats: ['Illegal trade', 'Habitat destruction', 'Climate change'],
      facts: [
        'Named for their hawk-like beak',
        'Play crucial role in coral reef health',
        'Can live up to 50 years'
      ],
      conservationEfforts: 'International trade bans, protected nesting beaches, and marine protected areas',
      category: 'Marine'
    },
    {
      id: 6,
      name: 'Amur Leopard',
      scientificName: 'Panthera pardus orientalis',
      image: '🐆',
      status: 'Critically Endangered',
      population: '~100 individuals',
      habitat: 'Temperate forests',
      location: 'Russian Far East and China',
      threats: ['Poaching', 'Habitat fragmentation', 'Prey depletion'],
      facts: [
        'Most northern leopard subspecies',
        'Adapted to cold climates',
        'Excellent climbers and swimmers'
      ],
      conservationEfforts: 'Anti-poaching measures, habitat corridors, and prey population management',
      category: 'Terrestrial'
    }
  ];

  const filteredAnimals = animals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         animal.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || animal.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || animal.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Critically Endangered': return 'text-red-600 bg-red-100';
      case 'Endangered': return 'text-orange-600 bg-orange-100';
      case 'Vulnerable': return 'text-yellow-600 bg-yellow-100';
      case 'Near Threatened': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Marine': return <Waves className="w-5 h-5" />;
      case 'Terrestrial': return <TreePine className="w-5 h-5" />;
      case 'Avian': return <Globe className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 to-forest-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Endangered Animals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the incredible species at risk and learn how you can help protect them. 
            Each animal has a unique story and important role in our ecosystem.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search animals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
            >
              <option value="All">All Categories</option>
              <option value="Marine">Marine</option>
              <option value="Terrestrial">Terrestrial</option>
              <option value="Avian">Avian</option>
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
            >
              <option value="All">All Statuses</option>
              <option value="Critically Endangered">Critically Endangered</option>
              <option value="Endangered">Endangered</option>
              <option value="Vulnerable">Vulnerable</option>
              <option value="Near Threatened">Near Threatened</option>
            </select>
          </div>
        </motion.div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAnimals.map((animal, index) => (
            <motion.div
              key={animal.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="animal-card group"
            >
              {/* Animal Header */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {animal.image}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{animal.name}</h3>
                <p className="text-gray-600 italic text-sm mb-3">{animal.scientificName}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(animal.status)}`}>
                  {animal.status}
                </span>
              </div>

              {/* Animal Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm"><strong>Population:</strong> {animal.population}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm"><strong>Location:</strong> {animal.location}</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-600">
                  {getCategoryIcon(animal.category)}
                  <span className="text-sm"><strong>Habitat:</strong> {animal.habitat}</span>
                </div>

                {/* Threats */}
                <div>
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <AlertTriangle className="w-4 h-4 text-coral-500" />
                    <span className="text-sm font-medium">Main Threats:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {animal.threats.map((threat, idx) => (
                      <span key={idx} className="px-2 py-1 bg-coral-100 text-coral-700 text-xs rounded-full">
                        {threat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Facts */}
                <div>
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Info className="w-4 h-4 text-ocean-500" />
                    <span className="text-sm font-medium">Quick Facts:</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {animal.facts.slice(0, 2).map((fact, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-ocean-500 mt-1">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conservation Efforts */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Heart className="w-4 h-4 text-forest-500" />
                    <span className="text-sm font-medium">Conservation Efforts:</span>
                  </div>
                  <p className="text-sm text-gray-600">{animal.conservationEfforts}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredAnimals.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No animals found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Animals;
