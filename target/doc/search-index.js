var searchIndex = {};
searchIndex['bin'] = {"items":[[0,"","bin",""],[10,"fmt","petgraph::scored","",0],[10,"clone","","",0],[10,"clone_from","","",0],[10,"eq","","",0],[10,"ne","","",0],[10,"assert_receiver_is_total_eq","","",0],[10,"partial_cmp","","",0],[10,"lt","","",0],[10,"le","","",0],[10,"gt","","",0],[10,"ge","","",0],[10,"cmp","","",0],[10,"clone","petgraph::digraph","",1],[10,"clone_from","","",1],[10,"fmt","","",1],[10,"new","","Create a new **DiGraph**.",1],[10,"node_count","","",1],[10,"add_node","","Add node **n** to the graph.",1],[10,"remove_node","","Return **true** if node **n** was removed.",1],[10,"contains_node","","Return **true** if the node is contained in the graph.",1],[10,"add_edge","","Add a directed edge from **a** to **b** to the graph.",1],[10,"remove_edge","","Remove edge from **a** to **b** from the graph.",1],[10,"contains_edge","","Return **true** if the directed edge from **a** to **b** is contained in the graph.",1],[10,"nodes","","Return an iterator over the nodes of the graph.",1],[10,"neighbors","","Return an iterator over the nodes that are connected with **from** by edges.",1],[10,"edges","","Return an iterator over the nodes that are connected with **from** by edges,\npaired with the edge weight.",1],[10,"edges_mut","","Return an iterator over the nodes that are connected with **from** by edges,\npaired with the edge weight.",1],[10,"edge","","Return a reference to the edge weight connecting **a** with **b**, or\n**None** if the edge does not exist in the graph.",1],[10,"edge_mut","","Return a mutable reference to the edge weight connecting **a** with **b**, or\n**None** if the edge does not exist in the graph.",1],[10,"add_diedge","","Add a directed edges from **a** to **b** and from **b** to **a** to the\ngraph.",1],[10,"reversed","","Return a cloned graph with all edges reversed.",1],[10,"next","","",2],[10,"size_hint","","",2],[10,"size_hint","","",2],[10,"next","","",3],[10,"size_hint","","",3],[10,"size_hint","","",3],[10,"next","","",4],[10,"size_hint","","",4],[10,"size_hint","","",4],[10,"clone","petgraph::graph","",5],[10,"clone_from","","",5],[10,"fmt","","",5],[10,"new","","Create a new **Graph**.",5],[10,"node_count","","",5],[10,"add_node","","Add node **n** to the graph.",5],[10,"remove_node","","Return **true** if node **n** was removed.",5],[10,"contains_node","","Return **true** if the node is contained in the graph.",5],[10,"add_edge","","Add an edge connecting **a** and **b** to the graph.",5],[10,"remove_edge","","Remove edge from **a** to **b** from the graph.",5],[10,"contains_edge","","Return **true** if the edge connecting **a** with **b** is contained in the graph.",5],[10,"nodes","","Return an iterator over the nodes of the graph.",5],[10,"neighbors","","Return an iterator over the nodes that are connected with **from** by edges.",5],[10,"edges","","Return an iterator over the nodes that are connected with **from** by edges,\npaired with the edge weight.",5],[10,"edge","","Return a reference to the edge weight connecting **a** with **b**, or\n**None** if the edge does not exist in the graph.",5],[10,"edge_mut","","Return a mutable reference to the edge weight connecting **a** with **b**, or\n**None** if the edge does not exist in the graph.",5],[10,"next","","",6],[10,"size_hint","","",6],[10,"size_hint","","",6],[10,"next","","",7],[10,"size_hint","","",7],[10,"size_hint","","",7],[10,"next","","",8],[10,"size_hint","","",8],[10,"hash","petgraph::ograph","",9],[10,"cmp","","",9],[10,"assert_receiver_is_total_eq","","",9],[10,"partial_cmp","","",9],[10,"lt","","",9],[10,"le","","",9],[10,"gt","","",9],[10,"ge","","",9],[10,"lt","","",9],[10,"le","","",9],[10,"gt","","",9],[10,"ge","","",9],[10,"eq","","",9],[10,"ne","","",9],[10,"ne","","",9],[10,"fmt","","",9],[10,"clone","","",9],[10,"clone_from","","",9],[10,"hash","","",10],[10,"cmp","","",10],[10,"assert_receiver_is_total_eq","","",10],[10,"partial_cmp","","",10],[10,"lt","","",10],[10,"le","","",10],[10,"gt","","",10],[10,"ge","","",10],[10,"lt","","",10],[10,"le","","",10],[10,"gt","","",10],[10,"ge","","",10],[10,"eq","","",10],[10,"ne","","",10],[10,"ne","","",10],[10,"clone","","",10],[10,"clone_from","","",10],[10,"fmt","","",10],[10,"fmt","","",11],[10,"clone","","",11],[10,"clone_from","","",11],[10,"fmt","","",12],[10,"clone","","",12],[10,"clone_from","","",12],[10,"is_directed","","",11],[10,"is_directed","","",12],[10,"clone","","",13],[10,"clone_from","","",13],[10,"fmt","","",13],[10,"next_edge","","Accessor for data structure internals: the first edge in the given direction.",13],[10,"clone","","",14],[10,"clone_from","","",14],[10,"fmt","","",14],[10,"next_edge","","Accessor for data structure internals: the next edge for the given direction.",14],[10,"source","","Return the source node index.",14],[10,"target","","Return the target node index.",14],[10,"clone","","",15],[10,"clone_from","","",15],[10,"fmt","","",15],[10,"new","","Create a new **OGraph** with directed edges.",15],[10,"new_undirected","","Create a new **OGraph** with undirected edges.",15],[10,"with_capacity","","Create a new **OGraph** with estimated capacity.",15],[10,"node_count","","Return the number of nodes (vertices) in the graph.",15],[10,"edge_count","","Return the number of edges in the graph.",15],[10,"is_directed","","Return whether the graph has directed edges or not.",15],[10,"into_edge_type","","Cast the graph as either undirected or directed. No edge adjustments\nare done.",15],[10,"add_node","","Add a node (also called vertex) with weight **w** to the graph.",15],[10,"node_weight","","Access node weight for node **a**.",15],[10,"node_weight_mut","","Access node weight for node **a**.",15],[10,"neighbors","","Return an iterator of all nodes with an edge starting from **a**.",15],[10,"neighbors_directed","","Return an iterator of all neighbors that have an edge between them and **a**,\nin the specified direction.\nIf the graph is undirected, this is equivalent to *.neighbors(a)*.",15],[10,"neighbors_undirected","","Return an iterator of all neighbors that have an edge between then and **a**,\nin either direction.\nIf the graph is undirected, this is equivalent to *.neighbors(a)*.",15],[10,"edges","","Return an iterator over the neighbors of node **a**, paired with their respective edge\nweights.",15],[10,"edges_both","","Return an iterator over the edgs from **a** to its neighbors, then *to* **a** from its\nneighbors.",15],[10,"add_edge","","Add an edge from **a** to **b** to the graph, with its edge weight.",15],[10,"update_edge","","Add or update an edge from **a** to **b**.",15],[10,"edge_weight","","Access the edge weight for **e**.",15],[10,"edge_weight_mut","","Access the edge weight for **e** mutably.",15],[10,"remove_node","","Remove **a** from the graph if it exists, and return its weight.\nIf it doesn't exist in the graph, return **None**.",15],[10,"remove_edge","","Remove an edge and return its edge weight, or **None** if it didn't exist.",15],[10,"find_edge","","Lookup an edge from **a** to **b**.",15],[10,"find_edge_undirected","","Lookup an edge between **a** and **b**, in either direction.",15],[10,"reverse","","Reverse the direction of all edges",15],[10,"raw_nodes","","Access the internal node array",15],[10,"raw_edges","","Access the internal edge array",15],[10,"first_edge","","Accessor for data structure internals: the first edge in the given direction.",15],[10,"next_edge","","Accessor for data structure internals: the next edge for the given direction.",15],[10,"without_edges","","Return an iterator over either the nodes without edges to them or from them.",15],[10,"next","","",16],[10,"size_hint","","",16],[10,"next","","",17],[10,"size_hint","","",17],[10,"next","","",18],[10,"size_hint","","",18],[10,"next","","",19],[10,"size_hint","","",19],[10,"index","","Index the **OGraph** by **NodeIndex** to access node weights.",15],[10,"index_mut","","Index the **OGraph** by **NodeIndex** to access node weights.",15],[10,"index","","Index the **OGraph** by **EdgeIndex** to access edge weights.",15],[10,"index_mut","","Index the **OGraph** by **EdgeIndex** to access edge weights.",15],[10,"visit","collections::bit","",20],[10,"contains","","",20],[10,"visit","std::collections::hash::set","",21],[10,"contains","","",21],[10,"visit_map","petgraph::ograph","",15],[10,"visit_map","petgraph::digraph","",1],[10,"visit_map","petgraph::graph","",5],[10,"visit_map","petgraph::visit","",22],[10,"visit_map","","",23],[10,"assert_receiver_is_total_eq","","",24],[10,"eq","","",24],[10,"ne","","",24],[10,"ne","","",24],[10,"clone","","",24],[10,"clone_from","","",24],[10,"color_visit_map","petgraph::graph","",5],[10,"color_visit_map","petgraph::ograph","",15],[10,"is_white","collections::bit","",25],[10,"color","","",25],[10,"visit","","",25],[10,"is_white","","",25],[10,"color","std::collections::hash::map","",26],[10,"visit","","",26],[10,"is_white","","",26],[10,"clone","petgraph::visit","",27],[10,"clone_from","","",27],[10,"new","","Create a new **Dfs**, using the graph's visitor map.",27],[10,"next","","Return the next node in the dfs, or **None** if the traversal is done.",27],[10,"clone","","",28],[10,"clone_from","","",28],[10,"new","","",28],[10,"next","","",28],[10,"size_hint","","",28],[10,"clone","","",29],[10,"clone_from","","",29],[10,"new","","Create a new **Bfs**, using the graph's visitor map.",29],[10,"next","","Return the next node in the dfs, or **None** if the traversal is done.",29],[10,"clone","","",30],[10,"clone_from","","",30],[10,"new","","",30],[10,"next","","",30],[10,"size_hint","","",30],[10,"clone","petgraph::unionfind","",31],[10,"clone_from","","",31],[10,"fmt","","",31],[10,"new","","Create a new **UnionFind** of **n** disjoint sets.",31],[10,"find","","Return the representative for **x**.",31],[10,"find_mut","","Return the representative for **x**.",31],[10,"union","","Unify the two sets containing **x** and **y**.",31],[10,"eq","petgraph","",32],[10,"ne","","",32],[10,"ne","","",32],[10,"fmt","","",32],[10,"clone","","",32],[10,"clone_from","","",32],[10,"clone","","",33],[10,"clone_from","","",33],[10,"eq","","Ptr compares by pointer equality, i.e if they point to the same value",33],[10,"ne","","",33],[10,"partial_cmp","","",33],[10,"lt","","",33],[10,"le","","",33],[10,"gt","","",33],[10,"ge","","",33],[10,"cmp","","Ptr is ordered by pointer value, i.e. an arbitrary but stable and total order.",33],[10,"deref","","",33],[10,"assert_receiver_is_total_eq","","",33],[10,"hash","","",33],[10,"fmt","","",33],[10,"fmt","","",34],[10,"deref","","",35],[10,"fmt","","",35],[1,"MinScored","bin","**MinScored\\<K, T\\>** holds a score **K** and a scored object **T** in\na pair for use with a **BinaryHeap**."],[1,"DiGraph","","**DiGraph\\<N, E\\>** is a directed graph, with generic node values **N** and\nedge weights **E**."],[1,"Graph","","**Graph\\<N, E\\>** is a regular graph, with generic node values **N** and edge weights **E**."],[1,"Ptr","","A reference that is hashed and compared by its pointer value."],[1,"Node","",""],[1,"NodeCell","",""],[1,"BfsIter","","An iterator for a breadth first traversal of a graph."],[1,"DfsIter","","An iterator for a depth first traversal of a graph."],[3,"dijkstra","","Dijkstra's shortest path algorithm."]],"paths":[[1,"MinScored"],[1,"DiGraph"],[1,"Nodes"],[1,"Neighbors"],[1,"Edges"],[1,"Graph"],[1,"Nodes"],[1,"Neighbors"],[1,"Edges"],[1,"NodeIndex"],[1,"EdgeIndex"],[1,"Directed"],[1,"Undirected"],[1,"Node"],[1,"Edge"],[1,"OGraph"],[1,"WithoutEdges"],[1,"Neighbors"],[1,"EdgesMut"],[1,"Edges"],[1,"BitvSet"],[1,"HashSet"],[1,"AsUndirected"],[1,"Reversed"],[2,"Color"],[1,"Bitv"],[1,"HashMap"],[1,"Dfs"],[1,"DfsIter"],[1,"Bfs"],[1,"BfsIter"],[1,"UnionFind"],[2,"EdgeDirection"],[1,"Ptr"],[1,"Node"],[1,"NodeCell"]]};
searchIndex['petgraph'] = {"items":[[0,"","petgraph",""],[1,"MinScored","","**MinScored\\<K, T\\>** holds a score **K** and a scored object **T** in\na pair for use with a **BinaryHeap**."],[1,"Ptr","","A reference that is hashed and compared by its pointer value."],[1,"Node","",""],[1,"NodeCell","",""],[2,"EdgeDirection","","Edge direction"],[12,"Outgoing","","A **Outgoing** edge is an outward edge *from* the current node.",0],[12,"Incoming","","An **Incoming** edge is an inbound edge *to* the current node.",0],[3,"dijkstra","","Dijkstra's shortest path algorithm."],[10,"fmt","","",1],[10,"clone","","",1],[10,"eq","","",1],[10,"partial_cmp","","",1],[10,"cmp","","",1],[0,"digraph","",""],[1,"DiGraph","petgraph::digraph","**DiGraph\\<N, E\\>** is a directed graph, with generic node values **N** and\nedge weights **E**."],[1,"Nodes","",""],[1,"Neighbors","",""],[1,"Edges","",""],[10,"clone","","",2],[10,"fmt","","",2],[10,"new","","Create a new **DiGraph**.",2],[10,"node_count","","",2],[10,"add_node","","Add node **n** to the graph.",2],[10,"remove_node","","Return **true** if node **n** was removed.",2],[10,"contains_node","","Return **true** if the node is contained in the graph.",2],[10,"add_edge","","Add a directed edge from **a** to **b** to the graph.",2],[10,"remove_edge","","Remove edge from **a** to **b** from the graph.",2],[10,"contains_edge","","Return **true** if the directed edge from **a** to **b** is contained in the graph.",2],[10,"nodes","","Return an iterator over the nodes of the graph.",2],[10,"neighbors","","Return an iterator over the nodes that are connected with **from** by edges.",2],[10,"edges","","Return an iterator over the nodes that are connected with **from** by edges,\npaired with the edge weight.",2],[10,"edges_mut","","Return an iterator over the nodes that are connected with **from** by edges,\npaired with the edge weight.",2],[10,"edge","","Return a reference to the edge weight connecting **a** with **b**, or\n**None** if the edge does not exist in the graph.",2],[10,"edge_mut","","Return a mutable reference to the edge weight connecting **a** with **b**, or\n**None** if the edge does not exist in the graph.",2],[10,"add_diedge","","Add a directed edges from **a** to **b** and from **b** to **a** to the\ngraph.",2],[10,"reversed","","Return a cloned graph with all edges reversed.",2],[4,"Item","",""],[10,"next","","",3],[10,"size_hint","","",3],[4,"Item","",""],[10,"next","","",4],[10,"size_hint","","",4],[4,"Item","",""],[10,"next","","",5],[10,"size_hint","","",5],[0,"graph","petgraph",""],[1,"Graph","petgraph::graph","**Graph\\<N, E\\>** is a regular graph, with generic node values **N** and edge weights **E**."],[1,"Nodes","",""],[1,"Neighbors","",""],[1,"Edges","",""],[11,"from","","",6],[11,"edges","","",6],[11,"iter","","",6],[10,"clone","","",7],[10,"fmt","","",7],[10,"new","","Create a new **Graph**.",7],[10,"node_count","","",7],[10,"add_node","","Add node **n** to the graph.",7],[10,"remove_node","","Return **true** if node **n** was removed.",7],[10,"contains_node","","Return **true** if the node is contained in the graph.",7],[10,"add_edge","","Add an edge connecting **a** and **b** to the graph.",7],[10,"remove_edge","","Remove edge from **a** to **b** from the graph.",7],[10,"contains_edge","","Return **true** if the edge connecting **a** with **b** is contained in the graph.",7],[10,"nodes","","Return an iterator over the nodes of the graph.",7],[10,"neighbors","","Return an iterator over the nodes that are connected with **from** by edges.",7],[10,"edges","","Return an iterator over the nodes that are connected with **from** by edges,\npaired with the edge weight.",7],[10,"edge","","Return a reference to the edge weight connecting **a** with **b**, or\n**None** if the edge does not exist in the graph.",7],[10,"edge_mut","","Return a mutable reference to the edge weight connecting **a** with **b**, or\n**None** if the edge does not exist in the graph.",7],[4,"Item","",""],[10,"next","","",8],[10,"size_hint","","",8],[4,"Item","",""],[10,"next","","",9],[10,"size_hint","","",9],[4,"Item","",""],[10,"next","","",6],[0,"ograph","petgraph",""],[1,"NodeIndex","petgraph::ograph",""],[1,"EdgeIndex","",""],[1,"Directed","","Marker type for a directed graph."],[1,"Undirected","","Marker type for an undirected graph."],[1,"Node","","The graph's node type."],[11,"weight","","Associated node data.",10],[1,"Edge","","The graph's edge type."],[11,"weight","","Associated edge data.",11],[1,"OGraph","","**OGraph\\<N, E, Ty\\>** is a graph datastructure using an adjacency list representation."],[1,"WithoutEdges","","An iterator over either the nodes without edges to them or from them."],[1,"Neighbors","","Iterator over the neighbors of a node."],[1,"Edges","","Iterator over the edges of a node."],[3,"toposort","","Perform a topological sort of a directed graph."],[3,"is_cyclic","","Return **true** if the input graph contains a cycle."],[3,"min_spanning_tree","","Return a *Minimum Spanning Tree* of a graph."],[18,"EDGE_END","","An invalid **EdgeIndex** used to denote absence of an edge, for example\nto end an adjacency list."],[6,"EdgeType","","A graph's edge type determines whether is has directed edges or not."],[9,"is_directed","","",12],[10,"hash","","",13],[10,"cmp","","",13],[10,"partial_cmp","","",13],[10,"lt","","",13],[10,"le","","",13],[10,"gt","","",13],[10,"ge","","",13],[10,"eq","","",13],[10,"ne","","",13],[10,"fmt","","",13],[10,"clone","","",13],[10,"hash","","",14],[10,"cmp","","",14],[10,"partial_cmp","","",14],[10,"lt","","",14],[10,"le","","",14],[10,"gt","","",14],[10,"ge","","",14],[10,"eq","","",14],[10,"ne","","",14],[10,"clone","","",14],[10,"fmt","","",14],[10,"fmt","","",15],[10,"clone","","",15],[10,"fmt","","",16],[10,"clone","","",16],[10,"is_directed","","",15],[10,"is_directed","","",16],[10,"clone","","",10],[10,"fmt","","",10],[10,"next_edge","","Accessor for data structure internals: the first edge in the given direction.",10],[10,"clone","","",11],[10,"fmt","","",11],[10,"next_edge","","Accessor for data structure internals: the next edge for the given direction.",11],[10,"source","","Return the source node index.",11],[10,"target","","Return the target node index.",11],[10,"clone","","",17],[10,"fmt","","",17],[10,"new","","Create a new **OGraph** with directed edges.",17],[10,"new_undirected","","Create a new **OGraph** with undirected edges.",17],[10,"with_capacity","","Create a new **OGraph** with estimated capacity.",17],[10,"node_count","","Return the number of nodes (vertices) in the graph.",17],[10,"edge_count","","Return the number of edges in the graph.",17],[10,"is_directed","","Return whether the graph has directed edges or not.",17],[10,"into_edge_type","","Cast the graph as either undirected or directed. No edge adjustments\nare done.",17],[10,"add_node","","Add a node (also called vertex) with weight **w** to the graph.",17],[10,"node_weight","","Access node weight for node **a**.",17],[10,"node_weight_mut","","Access node weight for node **a**.",17],[10,"neighbors","","Return an iterator of all nodes with an edge starting from **a**.",17],[10,"neighbors_directed","","Return an iterator of all neighbors that have an edge between them and **a**,\nin the specified direction.\nIf the graph is undirected, this is equivalent to *.neighbors(a)*.",17],[10,"neighbors_undirected","","Return an iterator of all neighbors that have an edge between then and **a**,\nin either direction.\nIf the graph is undirected, this is equivalent to *.neighbors(a)*.",17],[10,"edges","","Return an iterator over the neighbors of node **a**, paired with their respective edge\nweights.",17],[10,"edges_both","","Return an iterator over the edgs from **a** to its neighbors, then *to* **a** from its\nneighbors.",17],[10,"add_edge","","Add an edge from **a** to **b** to the graph, with its edge weight.",17],[10,"update_edge","","Add or update an edge from **a** to **b**.",17],[10,"edge_weight","","Access the edge weight for **e**.",17],[10,"edge_weight_mut","","Access the edge weight for **e** mutably.",17],[10,"remove_node","","Remove **a** from the graph if it exists, and return its weight.\nIf it doesn't exist in the graph, return **None**.",17],[10,"remove_edge","","Remove an edge and return its edge weight, or **None** if it didn't exist.",17],[10,"find_edge","","Lookup an edge from **a** to **b**.",17],[10,"find_edge_undirected","","Lookup an edge between **a** and **b**, in either direction.",17],[10,"reverse","","Reverse the direction of all edges",17],[10,"raw_nodes","","Access the internal node array",17],[10,"raw_edges","","Access the internal edge array",17],[10,"first_edge","","Accessor for data structure internals: the first edge in the given direction.",17],[10,"next_edge","","Accessor for data structure internals: the next edge for the given direction.",17],[10,"without_edges","","Return an iterator over either the nodes without edges to them or from them.",17],[4,"Item","",""],[10,"next","","",18],[4,"Item","",""],[10,"next","","",19],[4,"Item","",""],[10,"next","","",20],[4,"Output","",""],[10,"index","","Index the **OGraph** by **NodeIndex** to access node weights.",17],[4,"Output","",""],[10,"index_mut","","Index the **OGraph** by **NodeIndex** to access node weights.",17],[4,"Output","",""],[10,"index","","Index the **OGraph** by **EdgeIndex** to access edge weights.",17],[4,"Output","",""],[10,"index_mut","","Index the **OGraph** by **EdgeIndex** to access edge weights.",17],[0,"visit","petgraph",""],[1,"AsUndirected","petgraph::visit","Wrapper type for walking the graph as if it is undirected"],[1,"Reversed","","Wrapper type for walking edges the other way"],[1,"Dfs","","A depth first search (DFS) of a graph."],[11,"stack","","",21],[11,"discovered","","",21],[1,"DfsIter","","An iterator for a depth first traversal of a graph."],[1,"Bfs","","A breadth first search (BFS) of a graph."],[11,"stack","","",22],[11,"discovered","","",22],[1,"BfsIter","","An iterator for a breadth first traversal of a graph."],[2,"Color","","“Color” of nodes used in a regular depth-first search"],[12,"White","","Unvisited",23],[12,"Gray","","Discovered",23],[12,"Black","","Visited",23],[6,"Graphlike","",""],[17,"NodeId","petgraph::visit::Graphlike",""],[6,"IntoNeighbors","petgraph::visit","A graph trait for accessing the neighbors iterator **I**."],[17,"Iter","petgraph::visit::IntoNeighbors",""],[9,"neighbors","petgraph::visit","",24],[6,"VisitMap","",""],[9,"visit","","Return **true** if the value is not already present.",25],[9,"contains","","",25],[6,"Visitable","","Trait for Graph that knows which datastructure is the best for its visitor map"],[17,"Map","petgraph::visit::Visitable",""],[9,"visit_map","petgraph::visit","",26],[6,"ColorVisitable","","Trait for Graph that knows which datastructure is the best for its visitor map"],[17,"Map","petgraph::visit::ColorVisitable",""],[9,"color_visit_map","petgraph::visit","",27],[6,"ColorMap","",""],[9,"color","","",28],[9,"visit","","",28],[10,"is_white","","",28],[4,"Iter","",""],[4,"Iter","",""],[4,"Iter","",""],[4,"Iter","",""],[4,"Iter","",""],[10,"visit","collections::bit","",29],[10,"contains","","",29],[10,"visit","std::collections::hash::set","",30],[10,"contains","","",30],[4,"NodeId","petgraph::visit",""],[4,"Map","",""],[10,"visit_map","petgraph::ograph","",17],[4,"NodeId","petgraph::visit",""],[4,"Map","",""],[10,"visit_map","petgraph::digraph","",2],[4,"NodeId","petgraph::visit",""],[4,"Map","",""],[10,"visit_map","petgraph::graph","",7],[4,"NodeId","petgraph::visit",""],[4,"NodeId","",""],[4,"Map","",""],[10,"visit_map","","",31],[4,"Map","",""],[10,"visit_map","","",32],[10,"eq","","",23],[10,"ne","","",23],[10,"clone","","",23],[4,"Map","",""],[10,"color_visit_map","petgraph::graph","",7],[4,"Map","petgraph::visit",""],[10,"color_visit_map","petgraph::ograph","",17],[10,"is_white","collections::bit","",33],[10,"color","","",33],[10,"visit","","",33],[10,"color","std::collections::hash::map","",34],[10,"visit","","",34],[10,"clone","petgraph::visit","",21],[10,"new","","Create a new **Dfs**, using the graph's visitor map.",21],[10,"next","","Return the next node in the dfs, or **None** if the traversal is done.",21],[10,"clone","","",35],[10,"new","","",35],[4,"Item","",""],[10,"next","","",35],[10,"clone","","",22],[10,"new","","Create a new **Bfs**, using the graph's visitor map.",22],[10,"next","","Return the next node in the dfs, or **None** if the traversal is done.",22],[10,"clone","","",36],[10,"new","","",36],[4,"Item","",""],[10,"next","","",36],[0,"unionfind","petgraph","**UnionFind** is a disjoint-set data structure."],[1,"UnionFind","petgraph::unionfind","**UnionFind\\<K\\>** is a disjoint-set data structure. It tracks set membership of *n* elements\nindexed from *0* to *n - 1*. The scalar type is **K** which must be an unsigned integer type."],[10,"clone","","",37],[10,"fmt","","",37],[10,"new","","Create a new **UnionFind** of **n** disjoint sets.",37],[10,"find","","Return the representative for **x**.",37],[10,"find_mut","","Return the representative for **x**.",37],[10,"union","","Unify the two sets containing **x** and **y**.",37],[10,"eq","petgraph","",0],[10,"ne","","",0],[10,"fmt","","",0],[10,"clone","","",0],[10,"clone","","",38],[10,"eq","","Ptr compares by pointer equality, i.e if they point to the same value",38],[10,"partial_cmp","","",38],[10,"cmp","","Ptr is ordered by pointer value, i.e. an arbitrary but stable and total order.",38],[4,"Target","",""],[10,"deref","","",38],[10,"hash","","",38],[10,"fmt","","",38],[10,"fmt","","",39],[4,"Target","",""],[10,"deref","","",40],[10,"fmt","","",40]],"paths":[[2,"EdgeDirection"],[1,"MinScored"],[1,"DiGraph"],[1,"Nodes"],[1,"Neighbors"],[1,"Edges"],[1,"Edges"],[1,"Graph"],[1,"Nodes"],[1,"Neighbors"],[1,"Node"],[1,"Edge"],[6,"EdgeType"],[1,"NodeIndex"],[1,"EdgeIndex"],[1,"Directed"],[1,"Undirected"],[1,"OGraph"],[1,"WithoutEdges"],[1,"Neighbors"],[1,"Edges"],[1,"Dfs"],[1,"Bfs"],[2,"Color"],[6,"IntoNeighbors"],[6,"VisitMap"],[6,"Visitable"],[6,"ColorVisitable"],[6,"ColorMap"],[1,"BitvSet"],[1,"HashSet"],[1,"AsUndirected"],[1,"Reversed"],[1,"Bitv"],[1,"HashMap"],[1,"DfsIter"],[1,"BfsIter"],[1,"UnionFind"],[1,"Ptr"],[1,"Node"],[1,"NodeCell"]]};

initSearch(searchIndex);
