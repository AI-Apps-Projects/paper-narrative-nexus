
import { ArrowLeft, Network, ZoomIn, ZoomOut, RotateCcw, Download, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Sample data matching your structure
const sampleNodes = [
  {"name": "Neural Networks", "type": "Model", "definition": "Computational models inspired by biological neural networks", "page": 1},
  {"name": "Transformers", "type": "Algorithm", "definition": "Attention-based neural network architecture", "page": 3},
  {"name": "BERT", "type": "Model", "definition": "Bidirectional Encoder Representations from Transformers", "page": 5},
  {"name": "Attention Mechanism", "type": "Method", "definition": "Mechanism to focus on relevant parts of input", "page": 2},
  {"name": "Language Models", "type": "Model", "definition": "Models that predict probability of word sequences", "page": 4},
  {"name": "GLUE Benchmark", "type": "Dataset", "definition": "General Language Understanding Evaluation benchmark", "page": 7},
  {"name": "F1 Score", "type": "Metric", "definition": "Harmonic mean of precision and recall", "page": 6},
];

const sampleEdges = [
  {"source": "Neural Networks", "target": "Transformers", "relationship": "IS-A", "page": 3},
  {"source": "Transformers", "target": "BERT", "relationship": "USES", "page": 5},
  {"source": "Transformers", "target": "Attention Mechanism", "relationship": "USES", "page": 3},
  {"source": "BERT", "target": "Language Models", "relationship": "IS-A", "page": 5},
  {"source": "BERT", "target": "GLUE Benchmark", "relationship": "EVALUATES-ON", "page": 7},
  {"source": "GLUE Benchmark", "target": "F1 Score", "relationship": "USES", "page": 7},
];

// Color mapping for concept types
const typeColors = {
  "Model": "#8b5cf6",
  "Algorithm": "#3b82f6", 
  "Dataset": "#10b981",
  "Metric": "#f59e0b",
  "Method": "#ef4444"
};

// Convert sample data to React Flow format
const createFlowNodes = (graphNodes: typeof sampleNodes): Node[] => {
  return graphNodes.map((node, index) => ({
    id: node.name,
    type: 'default',
    position: { 
      x: (index % 4) * 250 + 100, 
      y: Math.floor(index / 4) * 150 + 100 
    },
    data: { 
      label: node.name,
      type: node.type,
      definition: node.definition,
      page: node.page
    },
    style: {
      background: typeColors[node.type as keyof typeof typeColors] || '#6b7280',
      color: 'white',
      border: '1px solid #374151',
      borderRadius: '8px',
      fontSize: '12px',
      padding: '10px',
      minWidth: '120px',
      textAlign: 'center'
    }
  }));
};

const createFlowEdges = (graphEdges: typeof sampleEdges): Edge[] => {
  return graphEdges.map((edge, index) => ({
    id: `edge-${index}`,
    source: edge.source,
    target: edge.target,
    label: edge.relationship,
    type: 'smoothstep',
    labelStyle: { fontSize: '10px', fontWeight: 'bold' },
    style: { stroke: '#6b7280', strokeWidth: 2 }
  }));
};

const ConceptGraph = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(createFlowNodes(sampleNodes));
  const [edges, setEdges, onEdgesChange] = useEdgesState(createFlowEdges(sampleEdges));
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [visibleTypes, setVisibleTypes] = useState<Set<string>>(new Set(Object.keys(typeColors)));

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  }, []);

  const toggleTypeVisibility = (type: string) => {
    const newVisibleTypes = new Set(visibleTypes);
    if (newVisibleTypes.has(type)) {
      newVisibleTypes.delete(type);
    } else {
      newVisibleTypes.add(type);
    }
    setVisibleTypes(newVisibleTypes);

    // Filter nodes based on visibility
    const filteredNodes = createFlowNodes(sampleNodes).filter(node => 
      newVisibleTypes.has(node.data.type)
    );
    setNodes(filteredNodes);

    // Filter edges to only show connections between visible nodes
    const visibleNodeIds = new Set(filteredNodes.map(n => n.id));
    const filteredEdges = createFlowEdges(sampleEdges).filter(edge =>
      visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)
    );
    setEdges(filteredEdges);
  };

  const getTypeCounts = () => {
    const counts: Record<string, number> = {};
    sampleNodes.forEach(node => {
      counts[node.type] = (counts[node.type] || 0) + 1;
    });
    return counts;
  };

  const typeCounts = getTypeCounts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">Concept Graph</h1>
                  <p className="text-sm text-slate-600">Interactive knowledge visualization</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Paper Info */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl mb-2">Neural Networks for Natural Language Processing: A Comprehensive Review</CardTitle>
                <CardDescription className="text-base flex items-center gap-4">
                  <span>Authors: Smith, J., Johnson, M., Williams, K.</span>
                  <Badge variant="outline">47 Concepts Identified</Badge>
                  <Badge variant="outline">128 Relationships</Badge>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Controls Panel */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Graph Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-slate-700">Concept Types</h4>
                <div className="space-y-2">
                  {Object.entries(typeColors).map(([type, color]) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        checked={visibleTypes.has(type)}
                        onChange={() => toggleTypeVisibility(type)}
                        className="rounded" 
                      />
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="text-sm">{type}</span>
                      <Badge variant="secondary" className="ml-auto">{typeCounts[type] || 0}</Badge>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm text-slate-700">Legend</h4>
                <div className="text-xs space-y-1">
                  <div>• <strong>USES:</strong> One concept uses another</div>
                  <div>• <strong>IS-A:</strong> Inheritance relationship</div>
                  <div>• <strong>PART-OF:</strong> Component relationship</div>
                  <div>• <strong>EVALUATES-ON:</strong> Evaluation relationship</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Graph Visualization */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Interactive Concept Network</span>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{nodes.length} nodes</Badge>
                  <Badge variant="outline">{edges.length} edges</Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] border rounded-lg">
                <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  onNodeClick={onNodeClick}
                  fitView
                  attributionPosition="bottom-left"
                >
                  <Controls />
                  <MiniMap 
                    nodeStrokeColor={(n) => typeColors[n.data?.type as keyof typeof typeColors] || '#6b7280'}
                    nodeColor={(n) => typeColors[n.data?.type as keyof typeof typeColors] || '#6b7280'}
                    nodeBorderRadius={2}
                  />
                  <Background variant="dots" gap={12} size={1} />
                </ReactFlow>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Concept Details */}
        {selectedNode && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Selected Concept: {selectedNode.data.label}</CardTitle>
              <CardDescription>
                {selectedNode.data.type} concept from page {selectedNode.data.page}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Definition</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedNode.data.definition}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Connected Concepts</h4>
                  <div className="space-y-2">
                    {edges
                      .filter(edge => edge.source === selectedNode.id || edge.target === selectedNode.id)
                      .map((edge, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                          <span className="text-sm">
                            {edge.source === selectedNode.id ? edge.target : edge.source}
                          </span>
                          <Badge variant="outline">{edge.label}</Badge>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default ConceptGraph;
