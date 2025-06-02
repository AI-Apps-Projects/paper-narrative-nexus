
import { ArrowLeft, TrendingUp, Play, Pause, SkipForward, SkipBack, Download, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const NarrativeArc = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
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
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">Narrative Arc</h1>
                  <p className="text-sm text-slate-600">Story flow and argument structure</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Reading Mode
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
                  <Badge variant="outline">7 Sections</Badge>
                  <Badge variant="outline">Strong Logical Flow</Badge>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Timeline Controls */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Narrative Timeline</span>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <SkipBack className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Play className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <SkipForward className="w-4 h-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Current: Introduction</span>
                <span>Progress: 15%</span>
              </div>
              <Progress value={15} className="h-2" />
              <div className="flex justify-between text-xs text-slate-500">
                <span>Start</span>
                <span>Abstract</span>
                <span>Intro</span>
                <span>Methods</span>
                <span>Results</span>
                <span>Discussion</span>
                <span>Conclusion</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Narrative Flow */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Argument Structure Flow</CardTitle>
              <CardDescription>Follow the logical progression of ideas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Section 1 */}
                <div className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-slate-900">Introduction & Problem Statement</h3>
                        <Badge variant="outline">Current</Badge>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">
                        Establishes the research gap in current NLP architectures and motivates the need for comprehensive analysis.
                      </p>
                      <div className="space-y-2">
                        <div className="text-xs text-slate-500">Key Elements:</div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">Research Gap</Badge>
                          <Badge variant="secondary" className="text-xs">Motivation</Badge>
                          <Badge variant="secondary" className="text-xs">Objectives</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-4 top-8 w-px h-6 bg-orange-200"></div>
                </div>

                {/* Section 2 */}
                <div className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-300 text-slate-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <div className="flex-1 opacity-60">
                      <h3 className="font-semibold text-slate-900 mb-2">Literature Review & Background</h3>
                      <p className="text-slate-600 text-sm mb-3">
                        Comprehensive review of existing neural network approaches in NLP, establishing theoretical foundation.
                      </p>
                      <div className="space-y-2">
                        <div className="text-xs text-slate-500">Key Elements:</div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">Prior Work</Badge>
                          <Badge variant="secondary" className="text-xs">Limitations</Badge>
                          <Badge variant="secondary" className="text-xs">Gaps</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-4 top-8 w-px h-6 bg-slate-200"></div>
                </div>

                {/* Section 3 */}
                <div className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-300 text-slate-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div className="flex-1 opacity-60">
                      <h3 className="font-semibold text-slate-900 mb-2">Methodology & Approach</h3>
                      <p className="text-slate-600 text-sm mb-3">
                        Describes systematic review methodology, evaluation criteria, and analytical framework.
                      </p>
                      <div className="space-y-2">
                        <div className="text-xs text-slate-500">Key Elements:</div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">Systematic Review</Badge>
                          <Badge variant="secondary" className="text-xs">Criteria</Badge>
                          <Badge variant="secondary" className="text-xs">Framework</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-4 top-8 w-px h-6 bg-slate-200"></div>
                </div>

                {/* Section 4 */}
                <div className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-300 text-slate-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      4
                    </div>
                    <div className="flex-1 opacity-60">
                      <h3 className="font-semibold text-slate-900 mb-2">Results & Analysis</h3>
                      <p className="text-slate-600 text-sm mb-3">
                        Presents findings from the systematic review, including performance comparisons and trend analysis.
                      </p>
                      <div className="space-y-2">
                        <div className="text-xs text-slate-500">Key Elements:</div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">Performance Data</Badge>
                          <Badge variant="secondary" className="text-xs">Trends</Badge>
                          <Badge variant="secondary" className="text-xs">Comparisons</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-4 top-8 w-px h-6 bg-slate-200"></div>
                </div>

                {/* Section 5 */}
                <div className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-300 text-slate-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      5
                    </div>
                    <div className="flex-1 opacity-60">
                      <h3 className="font-semibold text-slate-900 mb-2">Discussion & Implications</h3>
                      <p className="text-slate-600 text-sm mb-3">
                        Interprets results, discusses implications for the field, and identifies future research directions.
                      </p>
                      <div className="space-y-2">
                        <div className="text-xs text-slate-500">Key Elements:</div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">Interpretation</Badge>
                          <Badge variant="secondary" className="text-xs">Implications</Badge>
                          <Badge variant="secondary" className="text-xs">Future Work</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Current Section Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Section Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">Section: Introduction</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Length:</span>
                      <span>1,247 words</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Reading time:</span>
                      <span>~5 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Key points:</span>
                      <span>4 main ideas</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-2">Argument Strength</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Evidence Quality</span>
                      <Badge variant="secondary">Strong</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Logical Flow</span>
                      <Badge variant="secondary">Excellent</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Clarity</span>
                      <Badge variant="secondary">High</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start text-sm">
                    Abstract
                  </Button>
                  <Button variant="default" className="w-full justify-start text-sm">
                    Introduction
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm">
                    Literature Review
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm">
                    Methodology
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm">
                    Results
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm">
                    Discussion
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm">
                    Conclusion
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NarrativeArc;
