
import { ArrowLeft, Network, ZoomIn, ZoomOut, RotateCcw, Download, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ConceptGraph = () => {
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
                <h4 className="font-medium text-sm text-slate-700">Zoom & Navigation</h4>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm text-slate-700">Concept Types</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Core Concepts</span>
                    <Badge variant="secondary" className="ml-auto">12</Badge>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Methods</span>
                    <Badge variant="secondary" className="ml-auto">8</Badge>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Metrics</span>
                    <Badge variant="secondary" className="ml-auto">15</Badge>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Technologies</span>
                    <Badge variant="secondary" className="ml-auto">12</Badge>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm text-slate-700">Layout Options</h4>
                <select className="w-full p-2 text-sm border rounded-md">
                  <option>Force-directed</option>
                  <option>Hierarchical</option>
                  <option>Circular</option>
                  <option>Grid</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Graph Visualization */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Interactive Concept Network</span>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">47 nodes</Badge>
                  <Badge variant="outline">128 edges</Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[16/10] bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border-2 border-dashed border-purple-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Network className="w-16 h-16 text-purple-400 mx-auto" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700">Interactive Concept Graph</h3>
                    <p className="text-slate-500">Drag nodes to explore relationships</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <span>Core Concepts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span>Methods</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                      <span>Metrics</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                      <span>Technologies</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Concept Details */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Selected Concept: Neural Networks</CardTitle>
            <CardDescription>Core concept with 12 direct relationships</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Connected Concepts</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                    <span className="text-sm">Transformers</span>
                    <Badge variant="outline">Strong</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                    <span className="text-sm">Attention Mechanisms</span>
                    <Badge variant="outline">Strong</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                    <span className="text-sm">Language Models</span>
                    <Badge variant="outline">Medium</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                    <span className="text-sm">BERT</span>
                    <Badge variant="outline">Medium</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Concept Definition</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Neural networks form the foundational architecture for modern NLP systems. In this paper, 
                  they are discussed as the base computational model that enables learning complex language 
                  patterns through interconnected layers of artificial neurons.
                </p>
                <div className="mt-4">
                  <h5 className="font-medium text-sm mb-2">Appears in sections:</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Introduction</Badge>
                    <Badge variant="secondary">Methodology</Badge>
                    <Badge variant="secondary">Results</Badge>
                    <Badge variant="secondary">Discussion</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ConceptGraph;
