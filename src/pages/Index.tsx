import { FileText, GitBranch, TrendingUp, Upload, Brain, Network } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">ResearchLens</h1>
                <p className="text-sm text-slate-600">AI-Powered Paper Analysis</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Upload className="w-4 h-4 mr-2" />
              Upload Paper
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Transform Research Papers into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Actionable Insights</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Upload any research paper and get comprehensive analysis, visual concept mapping, 
            and narrative structure breakdown powered by advanced AI.
          </p>
        </div>

        {/* Analysis Components Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Analysis Component */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">Deep Analysis</CardTitle>
              <CardDescription className="text-slate-600">
                Comprehensive breakdown of methodology, findings, and implications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Key findings extraction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Methodology assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Statistical significance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Citation analysis</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-6 group-hover:bg-emerald-50 group-hover:border-emerald-300" asChild>
                <Link to="/analysis">View Analysis</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Concept Graph Component */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Network className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">Concept Graph</CardTitle>
              <CardDescription className="text-slate-600">
                Visual network of interconnected concepts and relationships
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Concept mapping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Relationship analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Knowledge clustering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Interactive visualization</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-6 group-hover:bg-purple-50 group-hover:border-purple-300" asChild>
                <Link to="/concept-graph">Explore Graph</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Narrative Arc Component */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">Narrative Arc</CardTitle>
              <CardDescription className="text-slate-600">
                Story flow and logical progression throughout the paper
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Argument structure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Logical flow mapping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Evidence progression</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Conclusion strength</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-6 group-hover:bg-orange-50 group-hover:border-orange-300" asChild>
                <Link to="/narrative-arc">View Timeline</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Feature Highlights */}
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Why Choose ResearchLens?</h3>
            <p className="text-slate-600 text-lg">Advanced AI meets academic rigor</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Multi-format Support</h4>
              <p className="text-sm text-slate-600">PDF, DOC, LaTeX and more</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-200 transition-colors">
                <Brain className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">AI-Powered</h4>
              <p className="text-sm text-slate-600">Advanced language models</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                <Network className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Visual Insights</h4>
              <p className="text-sm text-slate-600">Interactive visualizations</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Export Ready</h4>
              <p className="text-sm text-slate-600">Multiple output formats</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ResearchLens</span>
            </div>
            <p className="text-slate-400">Making research papers more accessible through AI analysis</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
