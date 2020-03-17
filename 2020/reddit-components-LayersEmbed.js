// https://www.redditstatic.com/desktop2x/reddit-components-LayersEmbed.363b44df8d0abdb4d21e.js
// Retrieved at 3/17/2020, 2:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LayersEmbed"], {
		"./src/graphql/operations/SubredditLayers.json": function(e) {
			e.exports = JSON.parse('{"id":"363cd3f2e49f"}')
		},
		"./src/graphql/operations/SubredditLayersByIds.json": function(e) {
			e.exports = JSON.parse('{"id":"ac126cf0db7a"}')
		},
		"./src/graphql/operations/SubredditLayersConfig.json": function(e) {
			e.exports = JSON.parse('{"id":"58282184edf1"}')
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, a) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./src/higherOrderComponents/asModal/index.tsx"),
				o = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = a("./src/reddit/controls/TextButton/index.tsx"),
				i = a("./src/reddit/i18n/utils.ts"),
				l = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = a("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				h = a.n(d);
			const u = e => e.preventDefault();
			t.a = Object(n.a)(e => r.a.createElement(o.c, null, r.a.createElement(o.g, null, r.a.createElement(l.a, null, r.a.createElement(o.n, null, e.headerText || Object(i.c)("Confirm")), r.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(o.b, null)))), r.a.createElement(o.j, null, r.a.createElement(o.m, {
				className: h.a.ModalText
			}, e.modalText)), r.a.createElement(o.e, null, r.a.createElement(o.a, {
				className: h.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || Object(i.c)("Cancel")), r.a.createElement(o.r, {
				className: h.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
		},
		"./src/reddit/components/LayersEmbed/LayersCanvas/DragHandler/index.m.less": function(e, t, a) {
			e.exports = {
				dragHandle: "wtIX2QV-WhdMOY61s3LTY"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersCanvas/Inspector/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3_4fT2G-XHTG7R9Bm3LWg3",
				header: "_2Fo5iLX6dDRjb63yp94VnJ",
				title: "_3fjMoim4PzelRvk9PfJioM",
				addLayerIcon: "_1o9R8bOgo5mNno5Cm_65zo",
				text: "-Ar0Brssk7m0WKu8C21ae",
				layers: "_1_PpuNfvKwXJGcj6He2ZE_",
				layer: "_1VpjTNzCkLYpwmqldahKjd",
				loader: "_1FB380L1wxoCW-3J0eDFsZ"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersCanvas/index.m.less": function(e, t, a) {
			e.exports = {
				picker: "_3PrR5es3SdXl4u88yiyfw_"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/DraftLayer/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1zsywIMroi20Y30J9I01Yk",
				pencilIcon: "_2h2zKkb3oPLCmLPjI6GcLL",
				trashIcon: "Lt-ewjhAwhlIenLoIHJW2"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/Footer/index.m.less": function(e, t, a) {
			e.exports = {
				footer: "_3gPOzQ-Y1W8-CKUhvYB2D_",
				help: "_15Q4CvvbF8SFmwANTPkmDV"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/Header/index.m.less": function(e, t, a) {
			e.exports = {
				addLayer: "_3f1Cf0b1OEcNOC6YKKgVz4",
				addLayerActive: "_2iRm5mzDyW97KE07uRVaIK",
				selectLayerMessage: "_3hnQDAv93FRkjBgk_QCo8I",
				header: "-F190yKxcU1_kIFAcTX-m",
				icon: "_3Evo53HEI4GWjtyrccB1EK",
				wordmark: "_3r35-vS1zSk0NJfa8HxowZ",
				surfaceIcon: "_2kknLzR7Uq1wRbIe5mOtjZ"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/PanelEntry/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3zLvgzKhjaMhzMnmY4K9Iw",
				surfaceAdd: "_24BZf-gAps1VXqTxp83c84",
				active: "LxPQJcYKZcp6adKtSVC8C",
				surfaced: "_33N5jQa90cmt3WHSGtmcTF",
				image: "_1Fu01xrp-tXgahOIW0NjL4",
				name: "_138DakBgGtlmZXzEa2mqec",
				verticalRule: "_5psjtuaQfHE_ZUv7__KHG",
				overflow: "vL2qFYLXyjQCRzrLZx_XH",
				surfaceIcon: "_235IdoYFgEzHnNdwgONCZJ",
				surfaceRemove: "mSC7i3LTFntS_jgMHzNNk"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/SearchBar/index.m.less": function(e, t, a) {
			e.exports = {
				container: "OeG7XLTdyJ15F3XXZRzvn",
				iconContainer: "_3nYpomZ1Bkrhh-_2o9w26Z",
				input: "_1NFsWAP_lH4aov7zk6ubKD"
			}
		},
		"./src/reddit/components/LayersEmbed/LayersPanel/index.m.less": function(e, t, a) {
			e.exports = {
				scroller: "_2GY0smo7wzakRUqH1dMEGr",
				loader: "_1wrteWUfM9MNUnKB7uciJi",
				surfaceHeader: "_1jZScJrE3mQWzIynSAjcny",
				addSurface: "oFNH1hy7vcljNY6jShFSn",
				surfaceHeaderText: "_2O9z2_0dn7JU5RG5cnTpFr",
				surfacesCount: "_3El6lpCxfKrk5zRm5pxeVi",
				surfacesWrapper: "_3F9GI6VLGlupTkn4h5uU1Z",
				surfacesScroller: "_1jMQKGk0lLDeWIEu3oWPi5",
				surfaceIconBase: "_3AAH1H6fM7pdWM6ZXMGkNl",
				surfaceIcon: "_3jD5l9TjTECztjU3-E-GGA",
				surfaceIconPlus: "mrMwZ7RnAHq2jZkiyAQm6",
				surfaceItem: "_3Nxp_iRyS4WUncZ1fWhrD6",
				surfaceTitle: "_1UIxrPtiIUYVi1eBbFcFFw",
				surfaceLayersCount: "MAby4JtyOny85mfd21NQ0",
				surfaceActive: "X0VrJaQnVec7sedGhxgJe",
				surfaceEmptyText: "_204qFBG8qG0hdJu0dERP7w"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/AddLayer/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1aj78cfK2DGcYjXfhW__PZ",
				iconDefault: "_1g9Q65em5fLQj2SIiGi2LO",
				iconRotated: "kIptq_dA-Mun0HyCZiz-b",
				a: "_3z3DB3aJhX_RGfQwH8Hmam",
				b: "_3-6PYkXFR_dBBL0GTvgLc9",
				e: "_3_XiNR8JzWIOxD56fQVwag",
				f: "_3_8M_8x6gyr1R6O4bhEkDg"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/Cancel/index.m.less": function(e, t, a) {
			e.exports = {
				background: "yV4tMM31xw5fd2pymWPdW"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/Confirm/index.m.less": function(e, t, a) {
			e.exports = {
				background: "_2rPZqOFClOpkti3begBIUX"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/DragHandlerGrapple/index.m.less": function(e, t, a) {
			e.exports = {
				dragHandlerGrapple: "_2uHtla0ud_2r4GWanqohBh"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/Help/index.m.less": function(e, t, a) {
			e.exports = {
				a: "_3rEFPDUQzmzMVR-6svmjFs",
				c: "pkOpm1ZzSJxm6lGaxNncr"
			}
		},
		"./src/reddit/components/LayersEmbed/icons/Logo/index.m.less": function(e, t, a) {
			e.exports = {
				b: "_3pI0LE1AQ-31WgHUVSU8Pk",
				c: "sFCmWWMZd6IrFPaJJu2zv",
				d: "UoHVV1dqFgE9UqQ5iPsa0"
			}
		},
		"./src/reddit/components/LayersEmbed/index.m.less": function(e, t, a) {
			e.exports = {
				colCanvas: "_2izXpZ70xuGNsFcot44f9E",
				colPanel: "_2VmMmY56AK0rUzJ9CkeTIp",
				container: "XvQHkxZYIFQufipWrmO44",
				fixedArInner: "_3bsSnSTsmdOmGl0BqmFEhM",
				fixedArWrapper: "_3xUZammIe2BU8uUjvEpjh5",
				loaderWrapper: "_3cW2flEQE3_TQkwYSB3bQe"
			}
		},
		"./src/reddit/components/LayersEmbed/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			a("./node_modules/core-js/modules/es6.regexp.split.js"), a("./node_modules/core-js/modules/es6.regexp.constructor.js"), a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/lodash/debounce.js"),
				r = a.n(s),
				n = a("./node_modules/lodash/isEqual.js"),
				o = a.n(n),
				c = a("./node_modules/lodash/omit.js"),
				i = a.n(c),
				l = a("./node_modules/react/index.js"),
				d = a.n(l),
				h = a("./node_modules/react-redux/es/index.js"),
				u = a("./node_modules/reselect/es/index.js"),
				m = a("./src/lib/getUrlQueryParams/index.ts"),
				p = a("./src/reddit/actions/layers.ts"),
				f = a("./src/reddit/actions/toaster.ts"),
				y = a("./src/reddit/components/ConfirmUserActionModal/index.tsx");
			const g = 32,
				x = 10,
				E = 100;
			var b = a("./src/reddit/components/TrackingHelper/index.tsx"),
				v = a("./src/reddit/contexts/ApiContext.tsx"),
				L = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				S = a("./src/reddit/endpoints/post/index.tsx"),
				C = a("./src/graphql/operations/SubredditLayers.json"),
				w = a("./src/graphql/operations/SubredditLayersByIds.json"),
				I = a("./src/graphql/operations/SubredditLayersConfig.json"),
				P = a("./src/lib/makeGqlRequest/index.ts");
			const k = (e, t) => Object(P.a)(e, Object.assign({}, I, {
					variables: {
						subredditId: t
					}
				})),
				M = (e, t, a, s, r, n) => Object(P.a)(e, Object.assign({}, C, {
					variables: {
						subredditId: t,
						first: a,
						after: s,
						box: r,
						layerName: n
					}
				})),
				O = (e, t, a) => Object(P.a)(e, Object.assign({}, w, {
					variables: {
						subredditId: t,
						ids: a
					}
				}));
			var j = a("./src/reddit/featureFlags/layers.ts"),
				_ = e => {
					if (!(e && e.id && e.layersByIds && Array.isArray(e.layersByIds))) return {};
					const {
						id: t,
						layersByIds: a
					} = e;
					return {
						[t]: a.filter(Boolean)
					}
				},
				F = e => {
					let t = null;
					if (e.layersConfig) {
						const {
							image: a,
							websocketUrl: s
						} = e.layersConfig;
						t = {
							canvasImage: {
								url: a.url,
								width: a.dimensions.width,
								height: a.dimensions.height
							},
							websocketUrl: s
						}
					}
					return {
						[e.id]: t
					}
				},
				B = a("./node_modules/lodash/get.js"),
				R = a.n(B),
				N = a("./src/reddit/endpoints/post/create.ts"),
				T = e => {
					if (!(e && e.id && e.layers && Array.isArray(e.layers.edges))) return {};
					const {
						id: t,
						layers: a
					} = e;
					return {
						[t]: {
							cursor: R()(a, "pageInfo.endCursor", ""),
							layers: a.edges.map(e => Object.assign({}, e.node, {
								authorId: R()(e, "node.postInfo.authorInfo.id", null),
								postId: Object(N.e)(e.node.postUrl)
							}))
						}
					}
				},
				A = a("./src/reddit/helpers/localStorage/index.ts"),
				D = a("./src/reddit/helpers/trackers/layers.ts"),
				z = a("./src/reddit/i18n/utils.ts"),
				q = a("./src/reddit/models/Toast/index.ts"),
				H = a("./src/reddit/selectors/layers.ts"),
				G = a("./src/reddit/selectors/moderatorPermissions.ts"),
				W = a("./src/config.ts"),
				U = a("./node_modules/lodash/clamp.js"),
				Z = a.n(U),
				V = a("./src/lib/getMobileOperatingSystem/index.ts"),
				Y = a("./src/reddit/components/LayersEmbed/icons/AddLayer/index.m.less"),
				J = a.n(Y),
				X = e => {
					let {
						isRotated: t,
						className: a,
						onClick: s
					} = e;
					return d.a.createElement("svg", {
						className: a,
						onClick: s,
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24"
					}, d.a.createElement("defs", null, d.a.createElement("clipPath", null, d.a.createElement("rect", {
						className: J.a.a,
						width: "24",
						height: "24"
					})), d.a.createElement("clipPath", null, d.a.createElement("rect", {
						className: J.a.b,
						width: "24",
						height: "24"
					}))), d.a.createElement("g", {
						className: J.a.container
					}, d.a.createElement("g", {
						transform: "translate(4 4)"
					}, d.a.createElement("rect", {
						className: J.a.e,
						width: "16",
						height: "16",
						rx: "3.164"
					}), d.a.createElement("g", {
						transform: t ? "translate(5 5) rotate(45, 3, 3)" : "translate(5 5)"
					}, d.a.createElement("line", {
						className: J.a.f,
						y2: "6",
						transform: "translate(3)"
					}), d.a.createElement("line", {
						className: J.a.f,
						x1: "6",
						transform: "translate(0 3)"
					})))))
				},
				K = a("./src/reddit/components/LayersEmbed/icons/Cancel/index.m.less"),
				Q = a.n(K);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			class ee extends d.a.Component {
				render() {
					return d.a.createElement("svg", $({
						height: ee.size,
						width: ee.size
					}, this.props, {
						style: Object.assign({
							position: "absolute",
							cursor: "pointer"
						}, this.props.style ? this.props.style : {})
					}), d.a.createElement("g", null, d.a.createElement("g", {
						className: Q.a.background
					}, d.a.createElement("path", {
						d: "M26 39.008c-2.105 0-4.16-.408-6.109-1.213a15.951 15.951 0 01-7.19-5.894 15.951 15.951 0 01-2.702-8.897c0-3.179.934-6.255 2.701-8.897a15.951 15.951 0 017.191-5.894A15.917 15.917 0 0126 7c2.097 0 4.145.404 6.085 1.2a15.913 15.913 0 015.254 3.507 15.922 15.922 0 014.66 11.297A15.92 15.92 0 0137.34 34.3a15.914 15.914 0 01-5.254 3.507c-1.94.797-3.987 1.2-6.085 1.2zm.04-15.653l.707.707 3.53 3.53.121.121.074.155a.325.325 0 00.34.181.322.322 0 00.273-.272.322.322 0 00-.181-.34l-.155-.074-.121-.122-3.53-3.53-.708-.707.708-.707 3.365-3.366a.324.324 0 00-.35-.35l-3.366 3.365-.707.707-.708-.707-3.365-3.366a.325.325 0 00-.35.351l3.365 3.366.707.707-.707.707-3.366 3.365a.324.324 0 00.351.351l3.365-3.365.708-.707z"
					}), d.a.createElement("path", {
						fill: "#fff",
						d: "M26 8a15.004 15.004 0 1010.63 25.595c5.826-5.86 5.826-15.323 0-21.182A15.002 15.002 0 0026 8m.04 13.239l3.53-3.53a1.322 1.322 0 011.506.258c.397.397.5 1 .259 1.507l-3.53 3.53 3.53 3.53A1.324 1.324 0 1129.57 28.3l-3.53-3.53-3.53 3.53a1.322 1.322 0 01-1.507-.258c-.397-.397-.5-1-.259-1.507l3.53-3.53-3.53-3.53a1.324 1.324 0 011.765-1.766l3.53 3.53M26 6v2-2c2.23 0 4.405.43 6.466 1.276 2.1.862 3.978 2.115 5.582 3.725a16.916 16.916 0 014.952 12.003c0 4.528-1.758 8.79-4.95 12a16.91 16.91 0 01-5.584 3.728A16.939 16.939 0 0126 40.008c-2.237 0-4.42-.434-6.49-1.29a16.948 16.948 0 01-7.641-6.261 16.948 16.948 0 01-2.87-9.453c0-3.377.993-6.646 2.87-9.453a16.948 16.948 0 017.64-6.262A16.911 16.911 0 0126 5.999z"
					}))))
				}
			}
			ee.size = 52;
			var te = a("./src/reddit/components/LayersEmbed/icons/Confirm/index.m.less"),
				ae = a.n(te);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			class re extends d.a.Component {
				render() {
					return d.a.createElement("svg", se({
						height: re.size,
						width: re.size
					}, this.props, {
						style: Object.assign({
							position: "absolute",
							cursor: "pointer"
						}, this.props.style ? this.props.style : {})
					}), d.a.createElement("g", null, d.a.createElement("g", {
						className: ae.a.background
					}, d.a.createElement("path", {
						d: "M26 39.008c-2.105 0-4.16-.408-6.109-1.213a15.951 15.951 0 01-7.19-5.894 15.951 15.951 0 01-2.702-8.897c0-3.179.934-6.255 2.701-8.897a15.951 15.951 0 017.191-5.894A15.917 15.917 0 0126 7c2.097 0 4.145.404 6.085 1.2a15.913 15.913 0 015.254 3.507 15.922 15.922 0 014.66 11.297A15.92 15.92 0 0137.34 34.3a15.914 15.914 0 01-5.254 3.507c-1.94.797-3.988 1.2-6.085 1.2zm-6.403-13.994l3.513 3.514a.322.322 0 00.458 0l8.725-8.726a.323.323 0 00-.38-.428l-7.816 7.764-.7.695-.705-.69-2.636-2.584a.323.323 0 00-.443.014.323.323 0 00-.016.441z"
					}), d.a.createElement("path", {
						fill: "#fff",
						d: "M26 8a15.004 15.004 0 1010.63 25.595c5.825-5.86 5.825-15.323 0-21.182A15.002 15.002 0 0026 8m-2.661 21.622a1.32 1.32 0 01-.936-.387l-3.53-3.53a1.324 1.324 0 011.871-1.872l2.648 2.595 7.943-7.89a1.32 1.32 0 011.617.242c.419.444.48 1.117.148 1.63l-8.826 8.825a1.32 1.32 0 01-.935.387M25.999 6v2-2c2.23 0 4.405.43 6.466 1.276 2.1.862 3.978 2.115 5.582 3.725a16.916 16.916 0 014.952 12.003c0 4.528-1.758 8.79-4.95 12a16.91 16.91 0 01-5.584 3.728A16.939 16.939 0 0126 40.008c-2.237 0-4.42-.434-6.49-1.29a16.948 16.948 0 01-7.641-6.261 16.948 16.948 0 01-2.87-9.453c0-3.377.993-6.646 2.87-9.453a16.948 16.948 0 017.64-6.262A16.911 16.911 0 0126 5.999z"
					}))))
				}
			}
			re.size = 52;
			var ne = a("./src/reddit/components/LayersEmbed/icons/DragHandlerGrapple/index.m.less"),
				oe = a.n(ne);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var ie = e => d.a.createElement("svg", ce({
					className: oe.a.dragHandlerGrapple,
					viewBox: "0 0 38 20"
				}, e), d.a.createElement("g", null, d.a.createElement("path", {
					d: "M8,2 C8,2 9,2 9,3 L9,5 C9,5 8,6 8,6 L6,6 C5,6 5,5 5,5 L5,3 C5,2 5,2 6,2 L8,2 Z M14,2 C14,2 15,2 15,3 L15,5 C15,5 14,6 14,6 L12,6 C11,6 11,5 11,5 L11,3 C11,2 11,2 12,2 L14,2 Z M20,2 C20,2 21,2 21,3 L21,5 C21,5 20,6 20,6 L18,6 C17,6 17,5 17,5 L17,3 C17,2 17,2 18,2 L20,2 Z M26,2 C26,2 27,2 27,3 L27,5 C27,5 26,6 26,6 L24,6 C25,6 23,5 23,5 L23,3 C23,2 23,2 24,2 L26,2 Z M32,2 C32,2 33,2 33,3 L33,5 C33,5 32,6 32,6 L30,6 C31,6 29,5 29,5 L29,3 C29,2 29,2 30,2 L32,2 Z M8,8 C8,8 9,8 9,9 L9,11 C9,11 8,12 8,12 L6,12 C5,12 5,11 5,11 L5,9 C5,8 5,8 6,8 L8,8 Z M14,8 C14,8 15,8 15,9 L15,11 C15,11 14,12 14,12 L12,12 C11,12 11,11 11,11 L11,9 C11,8 11,8 12,8 L14,8 Z M20,8 C20,8 21,8 21,9 L21,11 C21,11 20,12 20,12 L18,12 C17,12 17,11 17,11 L17,9 C17,8 17,8 18,8 L20,8 Z M26,8 C26,8 27,8 27,9 L27,11 C27,11 26,12 26,12 L24,12 C23,12 23,11 23,11 L23,9 C23,8 23,8 24,8 L26,8 Z M32,8 C32,8 33,8 33,9 L33,11 C33,11 32,12 32,12 L30,12 C29,12 29,11 29,11 L29,9 C29,8 29,8 30,8 L32,8 Z M8,14 C8,14 9,14 9,15 L9,17 C9,17 8,18 8,18 L6,18 C5,18 5,17 5,17 L5,15 C5,14 5,14 6,14 L8,14 Z M14,14 C14,14 15,14 15,15 L15,17 C15,17 14,18 14,18 L12,18 C11,18 11,17 11,17 L11,15 C11,14 11,14 12,14 L14,14 Z M20,14 C20,14 21,14 21,15 L21,17 C21,17 20,18 20,18 L18,18 C17,18 17,17 17,17 L17,15 C17,14 17,14 18,14 L20,14 Z M26,14 C26,14 27,14 27,15 L27,17 C27,17 26,18 26,18 L24,18 C23,18 23,17 23,17 L23,15 C23,14 23,14 24,14 L26,14 Z M32,14 C32,14 33,14 33,15 L33,17 C33,17 32,18 32,18 L30,18 C29,18 29,17 29,17 L29,15 C29,14 29,14 30,14 L32,14 Z"
				}))),
				le = a("./src/reddit/components/LayersEmbed/icons/Help/index.m.less"),
				de = a.n(le);

			function he() {
				return (he = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var ue = e => d.a.createElement("svg", he({
					xmlns: "http://www.w3.org/2000/svg",
					width: "25.568",
					height: "25.568",
					viewBox: "0 0 25.568 25.568"
				}, e), d.a.createElement("defs", null, d.a.createElement("clipPath", null, d.a.createElement("rect", {
					className: de.a.a,
					width: "25.568",
					height: "25.568"
				}))), d.a.createElement("g", null, d.a.createElement("path", {
					className: de.a.c,
					d: "M752.523,29.045A8.523,8.523,0,1,0,744,20.523,8.523,8.523,0,0,0,752.523,29.045Zm-1-8.642v1.956h1.79v-.92a3.068,3.068,0,0,0,.852-.281,2.587,2.587,0,0,0,.716-.524,2.5,2.5,0,0,0,.665-1.739,2.593,2.593,0,0,0-.213-1.074,2.247,2.247,0,0,0-.6-.831,2.858,2.858,0,0,0-.946-.533,3.667,3.667,0,0,0-1.214-.192,3.4,3.4,0,0,0-1.15.179,2.893,2.893,0,0,0-.845.473,2.426,2.426,0,0,0-.562.652,3.185,3.185,0,0,0-.331.746l1.558.652a1.567,1.567,0,0,1,.436-.78,1.178,1.178,0,0,1,.831-.307,1.065,1.065,0,0,1,.746.256.931.931,0,0,1,.293.746v.179a1.1,1.1,0,0,1-.511,1.023A3.292,3.292,0,0,1,751.522,20.4Zm.042,4.807a1.171,1.171,0,0,0,.882.281,1.133,1.133,0,0,0,.869-.281.959.959,0,0,0,.269-.69v-.307a.959.959,0,0,0-.268-.69,1.133,1.133,0,0,0-.869-.281,1.172,1.172,0,0,0-.882.281.989.989,0,0,0-.255.69v.307a.989.989,0,0,0,.256.69Z",
					transform: "translate(-739.739 -7.739)"
				}))),
				me = a("./src/reddit/components/LayersEmbed/icons/Logo/index.m.less"),
				pe = a.n(me),
				fe = e => {
					let {
						className: t
					} = e;
					return d.a.createElement("svg", {
						className: t,
						xmlns: "http://www.w3.org/2000/svg",
						width: "21.023",
						height: "21.023",
						viewBox: "0 0 21.023 21.023"
					}, d.a.createElement("defs", null, d.a.createElement("clipPath", null, d.a.createElement("rect", {
						width: "21.023",
						height: "21.023"
					}))), d.a.createElement("g", {
						transform: "translate(1.168 1.168)"
					}, d.a.createElement("circle", {
						className: pe.a.b,
						cx: "9.344",
						cy: "9.344",
						r: "9.344"
					}), d.a.createElement("path", {
						className: pe.a.c,
						d: "M11.154,263.411,9.7,262.687l-3.194,1.591a1.889,1.889,0,0,1-1.678,0l-3.193-1.59-1.451.723a.332.332,0,0,0,0,.6l4.943,2.461a1.227,1.227,0,0,0,1.086,0l4.943-2.461a.332.332,0,0,0,0-.6Zm0,0",
						transform: "translate(3.597 -252.321)"
					}), d.a.createElement("path", {
						className: pe.a.d,
						d: "M.184,3.516,5.127,5.978a1.226,1.226,0,0,0,1.086,0l4.941-2.462a.332.332,0,0,0,0-.6L6.213.46a1.226,1.226,0,0,0-1.086,0L.184,2.921a.332.332,0,0,0,0,.6Zm0,0",
						transform: "translate(3.597 4.684)"
					})))
				},
				ye = e => d.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					width: "3",
					height: "14",
					viewBox: "0 0 3 14"
				}, d.a.createElement("g", {
					transform: "translate(0 0)",
					fill: "inherit"
				}, d.a.createElement("circle", {
					cx: "1.5",
					cy: "1.5",
					r: "1.5",
					transform: "translate(0 5.5)"
				}), d.a.createElement("circle", {
					cx: "1.5",
					cy: "1.5",
					r: "1.5"
				}), d.a.createElement("circle", {
					cx: "1.5",
					cy: "1.5",
					r: "1.5",
					transform: "translate(0 11)"
				})));

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var xe = e => d.a.createElement("svg", ge({
					width: 86,
					height: 18.174
				}, e), d.a.createElement("defs", null, d.a.createElement("clipPath", {
					id: "wordmarkPrefixA"
				}, d.a.createElement("path", {
					d: "M0 0h86v18.174H0z"
				}))), d.a.createElement("g", {
					clipPath: "url(#wordmarkPrefixA)"
				}, d.a.createElement("path", {
					fill: "none",
					d: "M0 0h86v18.174H0z"
				}), d.a.createElement("g", {
					"data-name": "Group 1305"
				}, d.a.createElement("g", {
					"data-name": "Group 544"
				}, d.a.createElement("g", {
					"data-name": "Group 543"
				}, d.a.createElement("path", {
					"data-name": "Path 367",
					d: "M24.654 9.346a29.894 29.894 0 01-.577-1.863c-.237.969-.509 1.98-.868 3.054h1.834z",
					fill: "none"
				}), d.a.createElement("path", {
					"data-name": "Path 368",
					d: "M79.823 5.678a2.32 2.32 0 00-.035-.392 3.55 3.55 0 00-1.065-.151h-1.786v2.77h.607a2.107 2.107 0 002.279-2.227z",
					fill: "none"
				}), d.a.createElement("path", {
					"data-name": "Path 369",
					d: "M10.928 14.199l.154-1.4H6.047v1.4z",
					fill: "#ff4500"
				}), d.a.createElement("path", {
					"data-name": "Path 370",
					d: "M4.764 1.395V0H-.001v16.775h1.283V1.395z",
					fill: "#ff4500"
				}), d.a.createElement("path", {
					"data-name": "Path 371",
					d: "M24.591 5.748h-.1c-.132.567-.265 1.144-.409 1.736.167.606.355 1.226.577 1.863l.388 1.191h-1.834l-.069.208-.414 1.191h3.6l-.389-1.191a47.136 47.136 0 01-1.35-4.998z",
					fill: "#ff4500"
				}), d.a.createElement("path", {
					"data-name": "Path 372",
					d: "M26.908 1.395L26.437 0h-6.318l-5.7 16.775h1.756l5.223-15.38z",
					fill: "#ff4500"
				}), d.a.createElement("path", {
					"data-name": "Path 373",
					d: "M26.777 15.584l.4 1.19h.807l-.4-1.19z",
					fill: "#ff4500"
				}), d.a.createElement("path", {
					"data-name": "Path 374",
					d: "M34.083 1.395h4.712L38.212 0H32.8l5.645 11.1v5.678h1.283v-4.283z",
					fill: "#ff4500"
				}), d.a.createElement("path", {
					"data-name": "Path 375",
					d: "M42.106 7.976c.466-1.346.906-2.512 1.4-3.781l1.114-2.8h3.5l.709-1.4h-5.49l-1.114 2.8c-.368.948-.706 1.837-1.048 2.788.279.768.539 1.555.829 2.391z",
					fill: "#ff4500"
				}), d.a.createElement("path", {
					"data-name": "Rectangle 1061",
					fill: "#ff4500",
					d: "M59.19 12.8h6.408v1.399H59.19z"
				}), d.a.createElement("path", {
					"data-name": "Path 376",
					d: "M65.397 1.395V0H53.149v16.775h1.283V1.395z",
					fill: "#ff4500"
				}), d.a.createElement("path", {
					"data-name": "Path 377",
					d: "M64.471 7.903l.145-1.4h-5.428v1.4z",
					fill: "#ff4500"
				}), d.a.createElement("path", {
					"data-name": "Path 378",
					d: "M84.607 13.795l.109-.993h-.207a2.024 2.024 0 01-.962-.269 3.311 3.311 0 001.06 1.262z",
					fill: "#ff4500"
				}), d.a.createElement("path", {
					"data-name": "Path 379",
					d: "M78.003 13.299c.053.1.108.206.163.316a6 6 0 001.852 2.443 9.462 9.462 0 01-.569-1.044 3.175 3.175 0 00-1.446-1.715z",
					fill: "#ff4500"
				}), d.a.createElement("path", {
					"data-name": "Path 380",
					d: "M76.937 1.395h1.994a8.639 8.639 0 014.959 1.327C82.765.767 80.207.001 77.649.001H70.89v16.774h1.283V1.395z",
					fill: "#ff4500"
				}), d.a.createElement("path", {
					"data-name": "Path 381",
					d: "M79.789 5.283a2.322 2.322 0 01.035.392 2.107 2.107 0 01-2.279 2.227h-.607v1.4h1.89a2.107 2.107 0 002.279-2.227 1.747 1.747 0 00-1.318-1.792z",
					fill: "#ff4500"
				}), d.a.createElement("path", {
					"data-name": "Rectangle 1062",
					fill: "#14d8c3",
					d: "M4.765 1.399h1.283v11.444H4.765z"
				}), d.a.createElement("path", {
					"data-name": "Path 382",
					d: "M10.643 16.774h-9.36v1.4h10.643l.44-3.988h-1.437z",
					fill: "#14d8c3"
				}), d.a.createElement("path", {
					"data-name": "Path 383",
					d: "M10.928 14.196H6.047v-1.394H4.764v-11.4H1.282v15.373h9.36z",
					fill: "#1e2a3e"
				}), d.a.createElement("path", {
					"data-name": "Path 384",
					d: "M23.313 4.355h-.1a48.845 48.845 0 01-1.346 5l-.414 1.191h1.766c.359-1.073.632-2.085.869-3.054-.307-1.094-.541-2.137-.775-3.137z",
					fill: "#14d8c3"
				}), d.a.createElement("path", {
					"data-name": "Path 385",
					d: "M20.193 14.185l-.906 2.589h-3.11l-.474 1.4h4.868l.906-2.59h5.33l-.476-1.4z",
					fill: "#14d8c3"
				}), d.a.createElement("path", {
					"data-name": "Path 386",
					d: "M26.867 1.399l5.2 15.38H27.98l.476 1.394h4.894L27.679 1.399z",
					fill: "#14d8c3"
				}), d.a.createElement("path", {
					"data-name": "Path 387",
					d: "M26.899 1.399h-5.507l-5.223 15.375h3.114l.906-2.58h6.137l.476 1.394h.807l.4 1.186h4.087zm-4.16 10.526l.414-1.187.069-.208h-1.766l.414-1.187a48.489 48.489 0 001.346-4.979h.1c.233 1 .468 2.035.77 3.124.145-.59.277-1.165.409-1.73h.1a46.781 46.781 0 001.346 4.979l.388 1.187z",
					fill: "#1e2a3e"
				}), d.a.createElement("path", {
					"data-name": "Path 388",
					d: "M40.736 6.577h.1c.118-.341.234-.67.35-.992-.17-.468-.347-.928-.543-1.389l-1.165-2.8h-.7l.582 1.4c.522 1.219.911 2.434 1.376 3.781z",
					fill: "#14d8c3"
				}), d.a.createElement("path", {
					"data-name": "Path 389",
					d: "M43.18 11.102v5.678h-3.482v1.394h4.765v-5.678l5.645-11.1h-1.992z",
					fill: "#14d8c3"
				}), d.a.createElement("path", {
					"data-name": "Path 390",
					d: "M43.194 11.099l4.936-9.7h-3.5l-1.114 2.786a108.379 108.379 0 00-1.4 3.767h-.1c-.29-.834-.549-1.618-.829-2.383-.116.321-.232.649-.35.989h-.105c-.466-1.342-.855-2.554-1.372-3.767l-.582-1.392h-4.712l5.645 11.094v4.282h3.482z",
					fill: "#1e2a3e"
				}), d.a.createElement("path", {
					"data-name": "Path 391",
					d: "M65.599 16.774H54.427v1.4h12.455v-3.988h-1.283z",
					fill: "#14d8c3"
				}), d.a.createElement("path", {
					"data-name": "Path 392",
					d: "M57.902 3.962v2.564h1.283V5.362l7.483.026V1.4h-1.283v2.589z",
					fill: "#14d8c3"
				}), d.a.createElement("path", {
					"data-name": "Path 393",
					d: "M57.904 10.479v2.331h1.283v-.931h6.292l.414-3.988h-1.428l-.269 2.588z",
					fill: "#14d8c3"
				}), d.a.createElement("path", {
					"data-name": "Path 394",
					d: "M65.602 14.196h-6.408v-1.394h-1.283V10.48h6.292l.269-2.579h-5.279V6.507H57.91V3.953l7.483.026V1.4H54.428v15.375H65.6z",
					fill: "#1e2a3e"
				}), d.a.createElement("path", {
					"data-name": "Path 395",
					d: "M78.724 5.139a3.55 3.55 0 011.065.15c-.188-1.107-1.182-1.55-2.347-1.55h-1.787v4.169h1.283v-2.77z",
					fill: "#14d8c3"
				}), d.a.createElement("path", {
					"data-name": "Path 396",
					d: "M85.793 14.186a2.13 2.13 0 01-1.185-.406l-.331 2.995H82.49a4.145 4.145 0 01-2.473-.716 4.12 4.12 0 003.755 2.115h1.787l.44-3.988z",
					fill: "#14d8c3"
				}), d.a.createElement("path", {
					"data-name": "Path 397",
					d: "M75.654 11.647v5.127h-3.482v1.4h4.765v-5.127a3.251 3.251 0 011.066.252 2.544 2.544 0 00-2.349-1.652z",
					fill: "#14d8c3"
				}), d.a.createElement("path", {
					"data-name": "Path 398",
					d: "M81.351 9.995a3.224 3.224 0 01.88 1.113 3.217 3.217 0 001.317 1.466l-.035-.067a3.224 3.224 0 00-.88-1.114 5.9 5.9 0 003.133-4.868 4.433 4.433 0 00-1.877-3.8 4.733 4.733 0 01.594 2.4 5.9 5.9 0 01-3.132 4.87z",
					fill: "#14d8c3"
				}), d.a.createElement("path", {
					"data-name": "Path 399",
					d: "M84.277 16.774l.33-2.984a3.306 3.306 0 01-1.059-1.257 3.211 3.211 0 01-1.317-1.461 3.216 3.216 0 00-.88-1.109c1.657-1.058 3.133-2.632 3.133-4.85a4.7 4.7 0 00-.594-2.388 8.641 8.641 0 00-4.959-1.327h-6.758v15.375h3.482v-5.108a2.543 2.543 0 012.349 1.646 3.168 3.168 0 011.446 1.709 9.417 9.417 0 00.569 1.04 4.156 4.156 0 002.473.713zm-5.45-7.481h-1.89V7.899h-1.283V3.745h1.787c1.165 0 2.159.441 2.348 1.544a1.741 1.741 0 011.317 1.785 2.1 2.1 0 01-2.279 2.219z",
					fill: "#1e2a3e"
				})))))),
				Ee = a("./src/lib/classNames/index.ts"),
				be = a("./src/reddit/components/LayersEmbed/LayersCanvas/DragHandler/index.m.less"),
				ve = a.n(be);

			function Le() {
				return (Le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			class Se extends d.a.Component {
				render() {
					const {
						className: e,
						style: t
					} = this.props, a = Object(Ee.a)(ve.a.dragHandle, e), s = Object.assign({
						height: Se.height
					}, t || {});
					return d.a.createElement("div", Le({}, this.props, {
						className: a,
						style: s
					}), d.a.createElement(ie, null))
				}
			}
			Se.height = 25;
			var Ce = Se,
				we = a("./src/reddit/components/Scroller/Simple.tsx"),
				Ie = a("./src/reddit/controls/Typography/index.tsx"),
				Pe = a("./src/reddit/actions/post.ts"),
				ke = a("./src/reddit/actions/reportFlow.ts"),
				Me = a("./src/reddit/components/OverflowMenu/index.tsx"),
				Oe = a("./src/reddit/components/ReportFlow/index.tsx"),
				je = a("./src/reddit/controls/Dropdown/Row.tsx");

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Fe = e => d.a.createElement("svg", _e({
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, e), d.a.createElement("path", {
					d: "M18.4,11.1l-2.6-1.3l2.9-1.5c0.3-0.2,0.5-0.4,0.5-0.6c0-0.2-0.2-0.5-0.5-0.6l-7.7-3.9C10.8,3.1,10.4,3,10,3 C9.6,3,9.3,3.1,9,3.2L1.2,7.1C0.9,7.3,0.7,7.5,0.7,7.7c0,0.2,0.2,0.5,0.5,0.6l2.9,1.5l-2.6,1.3c-0.5,0.2-0.8,0.7-0.8,1.1 c0,0.5,0.3,0.9,0.8,1.1l7.2,3.6c0.3,0.2,0.8,0.3,1.2,0.3c0.5,0,0.9-0.1,1.2-0.3l7.2-3.6c0.5-0.2,0.8-0.7,0.8-1.1 C19.2,11.7,18.9,11.3,18.4,11.1z M9,12.2l0-4L7.2,8.1l2.8-3l2.8,3.1h-1.9l0.1,4l3.2-1.6l3.1,1.6l-6.8,3.4c-0.1,0.1-0.4,0.1-0.6,0.1 c-0.2,0-0.4,0-0.6-0.1l-6.8-3.4l3.1-1.6L9,12.2z"
				})),
				Be = a("./src/reddit/components/LayersEmbed/LayersPanel/PanelEntry/index.m.less"),
				Re = a.n(Be);
			const Ne = Object(u.c)({
				currentUserId: e => R()(e, "user.account.id", null),
				reportFlowIsOpen: (e, t) => {
					let {
						layer: a
					} = t;
					return e.reportFlow.postOrCommentId === ke.a + a.postId
				}
			});
			var Te = Object(h.b)(Ne, e => ({
					onViewPostClick: t => {
						const a = {
							permalink: t
						};
						e(Object(Pe.L)({
							postOrComment: a
						}))
					},
					onReportPostClick: t => e(Object(Pe.y)(t))
				}))(e => {
					let {
						className: t,
						currentUserId: a,
						dropdownId: s,
						isActive: r,
						isCreationEnabled: n,
						isSurfacingEnabled: o,
						isModerator: c,
						layer: i,
						reportFlowIsOpen: l,
						onLayerSelect: h,
						onViewPostClick: u,
						onReferenceClick: m,
						onReportPostClick: p,
						showDeleteModal: f,
						onAddLayerToSurface: y,
						onRemoveLayerFromSurface: g,
						isSurfaced: x
					} = e;
					return d.a.createElement("div", {
						className: Object(Ee.a)(Re.a.container, r ? Re.a.active : void 0, t),
						onClick: h
					}, d.a.createElement("img", {
						className: Re.a.image,
						src: i.imageUrl,
						alt: i.name
					}), d.a.createElement("div", {
						className: Re.a.verticalRule
					}), d.a.createElement(Ie.b, {
						className: Re.a.name,
						title: Object(z.c)("Layer ".concat(i.id))
					}, Object(z.c)("Layer ".concat(i.id))), o && d.a.createElement(Fe, {
						className: Object(Ee.a)(Re.a.surfaceIcon, x ? Re.a.surfaceRemove : Re.a.surfaceAdd),
						onClick: x ? g : y
					}), d.a.createElement(Me.b, {
						className: Re.a.overflow,
						dropdownId: s,
						icon: d.a.createElement(ye, null)
					}, d.a.createElement(je.b, {
						onClick: () => u(i.postUrl),
						displayText: Object(z.c)("View Post")
					}), n && d.a.createElement(je.b, {
						onClick: () => m(i.imageUrl, i.box),
						displayText: Object(z.c)("Use as Reference")
					}), i.authorId && i.authorId !== a && d.a.createElement(je.b, {
						onClick: () => p(i.postId),
						displayText: Object(z.c)("Report")
					}), c && d.a.createElement(je.b, {
						onClick: f,
						displayText: Object(z.c)("Delete Post")
					})), l && d.a.createElement(Oe.a, {
						withOverlay: !0,
						overlayCustomStyles: Oe.b,
						postId: i.postId
					}))
				}),
				Ae = a("./src/reddit/icons/svgs/Plus/index.tsx"),
				De = a("./src/reddit/components/LayersEmbed/LayersCanvas/Inspector/index.m.less"),
				ze = a.n(De);
			class qe extends d.a.PureComponent {
				constructor() {
					super(...arguments), this.scrollContainerId = "layers-inspector-scroll-container", this.estimatedEntryHeightPx = 40, this.loaderSizePx = 10, this.getContainer = () => document.getElementById(this.scrollContainerId), this.onLayerSelectFromInspector = e => () => this.props.onLayerSelect(e, !0), this.onAddLayerToSurface = e => () => this.props.addLayerToSurface(e), this.onRemoveLayerFromSurface = e => () => this.props.removeLayerFromSurface(e)
				}
				render() {
					const {
						isCreationEnabled: e,
						isSurfacingEnabled: t,
						layerInspectorElementOffset: a,
						layers: s,
						loading: r,
						loadError: n,
						point: o,
						show: c,
						onAddLayer: i,
						onLoadMore: l,
						onReferenceClick: h,
						isModerator: u,
						openDeleteModal: m,
						surfaces: p,
						currentSurfaceId: f
					} = this.props;
					if (!c || !o) return null;
					let y;
					if (n) y = d.a.createElement(Ie.d, {
						className: ze.a.text
					}, Object(z.c)("Load error"));
					else if (s && 0 === s.length) y = d.a.createElement(Ie.d, {
						className: ze.a.text
					}, Object(z.c)("None"));
					else {
						const a = s && s.length ? s[s.length - 1].id : void 0;
						y = s && d.a.createElement("div", {
							id: this.scrollContainerId,
							className: ze.a.layers
						}, d.a.createElement(we.b, {
							getContainer: this.getContainer,
							loadMoreToken: a,
							onLoadMore: l,
							preventScrollOnMount: !0
						}, s.map(a => {
							const s = f ? p[f] : null,
								r = !!s && !!s.find(e => a.id === e.id);
							return {
								estHeight: this.estimatedEntryHeightPx,
								id: r ? "surfaced-".concat(a.id) : a.id,
								render: () => d.a.createElement(Te, {
									onAddLayerToSurface: this.onAddLayerToSurface(a),
									onRemoveLayerFromSurface: this.onRemoveLayerFromSurface(a.id),
									isSurfaced: r,
									isModerator: u,
									showDeleteModal: m(a.postId),
									className: ze.a.layer,
									dropdownId: "inspector-".concat(a.id),
									isActive: a.id === this.props.activeLayerId,
									isCreationEnabled: e,
									isSurfacingEnabled: t,
									key: a.id,
									layer: a,
									onLayerSelect: this.onLayerSelectFromInspector(a),
									onReferenceClick: h
								})
							}
						}))) || null
					}
					const g = {
						left: o.x + qe.baseOffsetPx + a.x,
						top: o.y + qe.baseOffsetPx + a.y
					};
					return d.a.createElement("div", {
						className: ze.a.container,
						style: g
					}, d.a.createElement("div", {
						className: ze.a.header
					}, d.a.createElement(Ie.e, {
						className: ze.a.title
					}, Object(z.c)("LAYERS HERE:")), r && d.a.createElement(L.a, {
						className: ze.a.loader,
						sizePx: this.loaderSizePx
					}), e && d.a.createElement("div", {
						className: ze.a.addLayerIcon,
						onClick: i
					}, d.a.createElement(Ae.a, null))), y)
				}
			}
			qe.baseOffsetPx = 5;
			var He = qe,
				Ge = a("./src/reddit/components/LayersEmbed/LayersCanvas/index.m.less"),
				We = a.n(Ge);
			const Ue = "url(".concat(W.a.assetPath, "/img/transparency-background.png)");
			class Ze extends d.a.Component {
				constructor(e) {
					super(e), this._canvas = d.a.createRef(), this._picker = d.a.createRef(), this.ctx = null, this.image = new Image, this.ws = null, this.wsMessageProcessTimeout = 5e3, this.layerInspectorElementOffset = {
						x: 0,
						y: 0
					}, this.confirmPosition = {
						x: 0,
						y: 0
					}, this.cancelPosition = {
						x: 0,
						y: 0
					}, this.isMobile = Object(V.a)(), this.inspectedAreaBorderColor = "#F04921", this.highlightedAreaBorderColor = "#2699FB", this.pickerBorderWidth = 6, this.inspectedAreaSize = 50, this.layerImage = new Image, this.pickerBox = {
						x: 0,
						y: 0,
						width: 100,
						height: 100
					}, this.setImage = () => {
						const {
							canvasImage: e
						} = this.props.layersConfig;
						this.image.src = e.url + "?dummy=" + Math.random()
					}, this.debouncedSetImage = r()(this.setImage, 1e3, {
						leading: !0,
						maxWait: 1e3
					}), this.processWsMessage = e => {
						"update" === JSON.parse(e.data).type && this.setImage()
					}, this.debouncedProcessWsMessage = r()(this.processWsMessage, this.wsMessageProcessTimeout, {
						leading: !0,
						maxWait: this.wsMessageProcessTimeout
					}), this.componentDidUpdate = e => {
						let t, a;
						e.isPickerBoxEnabled && !this.props.isPickerBoxEnabled && (t = !1), e.isInspectorActiveLayer && !this.props.isInspectorActiveLayer && (a = !1), this.props.isPickerBoxEnabled && this.state.showInspector && (this.props.onLayerSelect(null, !1), a = !1);
						const s = {
							showConfirmButtons: t,
							showInspector: a
						};
						if (Object.keys(s).map(e => s[e]).some(e => void 0 !== e) && this.setState(Object.assign({}, s)), this.canvas && !e.isPickerBoxEnabled && this.props.isPickerBoxEnabled) {
							const {
								width: e,
								height: t
							} = this.canvas;
							this.pickerBox = Object.assign({}, this.pickerBox, {
								x: e / 2 - this.pickerBox.width / 2,
								y: t / 2 - this.pickerBox.height / 2
							}), this.forceUpdate()
						}
						this.draw()
					}, this.onMouseEnter = () => {
						if (this.canvas && (!this.state.showConfirmButtons || !this.props.isPickerBoxEnabled)) return this.props.isPickerBoxEnabled && !this.isMobile && this.picker ? (this.canvas.onmousemove = this.onMove, this.picker.onmousemove = this.onMove, void(this.picker.onclick = this.confirmBackgroundSelection)) : void(this.props.isPickerBoxEnabled && this.isMobile || (this.canvas.onclick = this.onLayersInspect))
					}, this.onMouseLeaveCanvas = () => {
						this.canvas && (this.canvas.onmousemove = null, this.canvas.onclick = null)
					}, this.onMouseLeavePicker = () => {
						this.picker && (this.picker.onmousemove = null, this.picker.onclick = null)
					}, this.clearEventHandlers = () => {
						this.onMouseLeaveCanvas(), this.onMouseLeavePicker()
					}, this.updateCanvasEventHandlers = () => {
						this.clearEventHandlers(), this.onMouseEnter()
					}, this.onMove = e => {
						if (!this.picker || !this.canvas) return;
						const t = this.canvas.width / this.canvas.offsetWidth;
						let a;
						a = this.isMobile ? this.getShiftedTouchPosition(this.canvas, e) : this.getShiftedMousePosition(this.canvas, e);
						const {
							canvasImage: s
						} = this.props.layersConfig;
						this.pickerBox.x = Z()(a.x, 0, s.width - this.pickerBox.width), this.pickerBox.y = Z()(a.y, 0, s.height - this.pickerBox.height), this.picker.style.left = "".concat(this.pickerBox.x / t, "px"), this.picker.style.top = "".concat(this.pickerBox.y / t, "px")
					}, this.onTouchStart = () => {
						document.documentElement.style.overflow = "hidden", this.setState(e => Object.assign({}, e, {
							showConfirmButtons: !1
						}))
					}, this.onTouchEnd = () => {
						this.confirmBackgroundSelection(), document.documentElement.style.overflow = "auto"
					}, this.onLayersInspect = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.canvas) return;
						if (this.props.onLayerSelect(null, !0), this.state.showInspector) return void this.setState({
							inspectedArea: void 0,
							inspectedPoint: void 0,
							showInspector: !1
						});
						const t = this.getMousePagePosition(this.canvas, e),
							a = this.getMouseCanvasPosition(this.canvas, e),
							s = this.getInspectedAreaFromPoint(this.canvas, a),
							r = this.canvas.width / this.canvas.offsetWidth;
						this.layerInspectorElementOffset = {
							x: s.endPoint.x / r - t.x,
							y: s.endPoint.y / r - t.y
						}, this.props.fetchInspectorLayers(s), this.setState({
							inspectedArea: s,
							inspectedPoint: t,
							showInspector: !0
						})
					}, this.onLoadMoreInspectedLayers = () => {
						this.state.inspectedArea && this.props.fetchInspectorLayers(this.state.inspectedArea)
					}, this.draw = () => {
						if (!this.ctx) return;
						this.clear(this.ctx), this.drawImage(this.ctx);
						const {
							surfaces: e,
							currentSurfaceId: t
						} = this.props, a = t ? e[t] : null;
						if (a && a.forEach(e => this.highlightLayer(this.ctx, e)), !this.props.isPickerBoxEnabled) {
							this.highlightInspectedArea(this.ctx);
							const e = this.props.isInspectorActiveLayer ? this.highlightedAreaBorderColor : this.inspectedAreaBorderColor;
							this.highlightLayer(this.ctx, this.props.activeLayer, e)
						}
						this.updateCanvasEventHandlers()
					}, this.drawImage = e => {
						if (!e || !this.image) return;
						const {
							width: t,
							height: a
						} = this.props.layersConfig.canvasImage;
						e.drawImage(this.image, 0, 0, t, a)
					}, this.highlightLayer = (e, t, a) => {
						if (!e || !t) return;
						const s = R()(t, "box.startPoint"),
							r = R()(t, "box.endPoint");
						if (!(s && r && s.x && s.y && r.x && r.y)) return;
						const n = r.x - s.x,
							o = r.y - s.y;
						a && (e.strokeStyle = a, e.beginPath(), e.rect(s.x, s.y, n, o), e.closePath(), e.stroke());
						const c = new Image;
						c.onload = () => {
							e.drawImage(c, s.x, s.y, n, o)
						}, c.src = t.imageUrl
					}, this.highlightInspectedArea = e => {
						const {
							showInspector: t,
							inspectedArea: a
						} = this.state;
						t && a && (e.strokeStyle = this.inspectedAreaBorderColor, e.beginPath(), e.rect(a.startPoint.x, a.startPoint.y, a.endPoint.x - a.startPoint.x, a.endPoint.y - a.startPoint.y), e.closePath(), e.stroke())
					}, this.getShiftedMousePosition = (e, t) => {
						const a = this.getMouseCanvasPosition(e, t),
							s = this.pickerBox.width / 2,
							r = this.pickerBox.height / 2;
						return {
							x: a.x - s,
							y: a.y - r
						}
					}, this.getShiftedTouchPosition = (e, t) => {
						const a = this.getTouchCanvasPosition(e, t),
							s = e.width / e.offsetWidth,
							r = this.pickerBox.width / 2,
							n = this.pickerBox.height,
							o = Ce.height * s / 2;
						return {
							x: a.x - r,
							y: a.y - (n + o)
						}
					}, this.getTouchCanvasPosition = (e, t) => {
						const a = e.getBoundingClientRect(),
							s = a.left,
							r = a.top,
							n = e.width / e.offsetWidth,
							o = t.targetTouches[0];
						return o ? {
							x: (o.clientX - s) * n,
							y: (o.clientY - r) * n
						} : {
							x: 0,
							y: 0
						}
					}, this.getMouseCanvasPosition = (e, t) => {
						const a = e.getBoundingClientRect(),
							s = a.left,
							r = a.top,
							n = e.width / e.offsetWidth;
						return {
							x: (t.clientX - s) * n,
							y: (t.clientY - r) * n
						}
					}, this.getMousePagePosition = (e, t) => {
						const a = e.getBoundingClientRect();
						return {
							x: t.clientX - a.left,
							y: t.clientY - a.top
						}
					}, this.getLayerBackground = () => {
						const {
							x: e,
							y: t,
							width: a,
							height: s
						} = this.pickerBox, r = {
							startPoint: {
								x: e,
								y: t
							},
							endPoint: {
								x: e + a,
								y: t + s
							}
						}, n = document.createElement("canvas");
						if (!n) return;
						const o = n.getContext("2d");
						o && (n.width = a, n.height = s, o.drawImage(this.image, e, t, a, s, 0, 0, a, s), this.props.onBackgroundSelect(n.toDataURL(), r), this.setState({
							showConfirmButtons: !1
						}, this.updateCanvasEventHandlers))
					}, this.getLayerBackgroundFromInspector = () => {
						this.state.inspectedArea && (this.pickerBox.x = this.state.inspectedArea.startPoint.x, this.pickerBox.y = this.state.inspectedArea.startPoint.y), this.getLayerBackground()
					}, this.confirmBackgroundSelection = () => {
						if (!this.canvas) return;
						const {
							x: e,
							y: t,
							width: a,
							height: s
						} = this.pickerBox, r = this.canvas.width / this.canvas.offsetWidth;
						this.confirmPosition = {
							x: (e + a) / r,
							y: (t + s / 2) / r
						}, this.cancelPosition = {
							x: e / r - ee.size,
							y: (t + s / 2) / r
						}, this.setState({
							showConfirmButtons: !0
						}, this.updateCanvasEventHandlers)
					}, this.continueBackgroundSelection = () => this.setState(e => Object.assign({}, e, {
						showConfirmButtons: !1
					}), this.updateCanvasEventHandlers), this.state = {
						showInspector: !1,
						showConfirmButtons: !1,
						inspectedPoint: void 0,
						inspectedArea: void 0
					}
				}
				get canvas() {
					return this._canvas.current
				}
				get picker() {
					return this._picker.current
				}
				componentDidMount() {
					if (!this.canvas) return;
					if (this.ctx = this.canvas.getContext("2d"), !this.ctx) return;
					const {
						canvasImage: e,
						websocketUrl: t
					} = this.props.layersConfig, {
						width: a,
						height: s
					} = e;
					this.ctx.canvas.width = a, this.ctx.canvas.height = s, this.ctx.lineWidth = this.pickerBorderWidth, this.image.setAttribute("crossOrigin", "anonymous"), this.image.onload = this.draw, this.image.onerror = () => {
						this.image = new Image
					}, this.debouncedSetImage(), this.ws = new WebSocket(t), this.ws.onmessage = this.debouncedProcessWsMessage, this.ws.onerror = e => {
						this.ws && this.ws.close()
					}, this.layerImage.onload = () => {
						this.draw()
					}
				}
				componentWillUnmount() {
					this.ws && this.ws.close()
				}
				getInspectedAreaFromPoint(e, t) {
					const {
						x: a,
						y: s
					} = t, r = this.inspectedAreaSize, n = a + r > e.width ? Math.abs(e.width - a - r) : 0, o = s + r > e.height ? Math.abs(e.height - s - r) : 0, c = {
						x: a > r ? a - r - n : 0,
						y: s > r ? s - r - o : 0
					}, i = 0 === c.x ? Math.abs(a - r) : 0, l = 0 === c.y ? Math.abs(s - r) : 0;
					return {
						startPoint: c,
						endPoint: {
							x: a + r < e.width ? a + r + i : e.width,
							y: s + r < e.height ? s + r + l : e.height
						}
					}
				}
				clear(e) {
					const {
						width: t,
						height: a
					} = this.props.layersConfig.canvasImage;
					e.clearRect(0, 0, t, a)
				}
				render() {
					const {
						activeLayer: e,
						isCreationEnabled: t,
						isSurfacingEnabled: a,
						isPickerBoxEnabled: s,
						layersConfig: r,
						layersInspected: n,
						onLayerSelect: o,
						onBackgroundSelect: c,
						layersInspectedRequestInProgress: i,
						layersInspectedRequestFailed: l,
						isModerator: h,
						openDeleteModal: u,
						surfaces: m,
						currentSurfaceId: p,
						addLayerToSurface: f,
						removeLayerFromSurface: y
					} = this.props, {
						showConfirmButtons: g,
						showInspector: x,
						inspectedPoint: E
					} = this.state, b = this.confirmPosition.y - re.size / 2, v = {
						top: b,
						left: this.confirmPosition.x
					}, L = {
						top: b,
						left: this.cancelPosition.x
					}, {
						width: S,
						height: C
					} = r.canvasImage, w = s && !g, I = {
						cursor: w ? "none" : "pointer",
						backgroundImage: Ue
					}, P = this.canvas ? this.canvas.width / this.canvas.offsetWidth : 1;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement("canvas", {
						width: S,
						height: C,
						ref: this._canvas,
						style: I,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeaveCanvas
					}), d.a.createElement(He, {
						surfaces: m,
						currentSurfaceId: p,
						addLayerToSurface: f,
						removeLayerFromSurface: y,
						activeLayerId: e && e.id || null,
						isCreationEnabled: t,
						isSurfacingEnabled: a,
						isModerator: h,
						openDeleteModal: u,
						layerInspectorElementOffset: this.layerInspectorElementOffset,
						show: x,
						point: E,
						layers: n,
						loading: i,
						loadError: l,
						onAddLayer: this.getLayerBackgroundFromInspector,
						onLoadMore: this.onLoadMoreInspectedLayers,
						onLayerSelect: o,
						onReferenceClick: c
					}), s && g && d.a.createElement(d.a.Fragment, null, d.a.createElement(ee, {
						onClick: this.continueBackgroundSelection,
						style: L
					}), d.a.createElement(re, {
						onClick: this.getLayerBackground,
						style: v
					})), s && d.a.createElement("div", {
						className: We.a.picker,
						ref: this._picker,
						style: {
							cursor: w ? "none" : "default",
							left: Math.floor(this.pickerBox.x / P),
							top: Math.floor(this.pickerBox.y / P),
							height: Math.floor(this.pickerBox.height / P),
							width: Math.floor(this.pickerBox.width / P)
						}
					}, this.isMobile && d.a.createElement(Ce, {
						onTouchStart: this.onTouchStart,
						onTouchMove: this.onMove,
						onTouchEnd: this.onTouchEnd,
						style: {
							marginTop: this.pickerBox.height / P
						}
					})))
				}
			}
			var Ve = Ze,
				Ye = (a("./node_modules/core-js/modules/es6.array.sort.js"), a("./node_modules/fbt/lib/FbtPublic.js")),
				Je = a("./src/lib/copyToClipboard/index.ts"),
				Xe = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Ke = a("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				Qe = a("./src/reddit/icons/svgs/LayerDuplicate/index.tsx"),
				$e = a("./src/reddit/icons/svgs/Share/index.tsx"),
				et = a("./src/reddit/icons/svgs/Trash/index.tsx"),
				tt = a("./src/reddit/icons/svgs/Pencil/index.tsx"),
				at = a("./src/reddit/components/LayersEmbed/LayersPanel/DraftLayer/index.m.less"),
				st = a.n(at);
			var rt = e => d.a.createElement("div", {
					className: Object(Ee.a)(Re.a.container, st.a.container)
				}, d.a.createElement(tt.a, {
					className: st.a.pencilIcon,
					onClick: e.onEditDraft
				}), d.a.createElement("div", {
					className: Re.a.verticalRule
				}), d.a.createElement(Ie.b, {
					className: Re.a.name,
					title: Object(z.c)("Layer Draft")
				}, Object(z.c)("Layer Draft")), d.a.createElement(et.a, {
					className: st.a.trashIcon,
					onClick: e.onDeleteDraft
				})),
				nt = a("./src/reddit/components/LayersEmbed/LayersPanel/Footer/index.m.less"),
				ot = a.n(nt);
			var ct = () => d.a.createElement("div", {
					className: ot.a.footer
				}, d.a.createElement("a", {
					"data-redditstyle": !0,
					href: "https://www.reddit.com/r/Layer/comments/cxkwxu/the_layer_maker_quick_start_guide_user_manual/",
					target: "_blank"
				}, d.a.createElement(ue, {
					className: ot.a.help
				}))),
				it = a("./src/reddit/components/LayersEmbed/LayersPanel/Header/index.m.less"),
				lt = a.n(it);
			const dt = () => d.a.createElement("div", {
				className: lt.a.icon
			});
			var ht = e => {
					let {
						isPickerBoxEnabled: t,
						isCreationEnabled: a,
						isSurfacingEnabled: s,
						onAddLayerClick: r,
						onExpandSurfacesClick: n
					} = e;
					const o = Object(Ee.a)(lt.a.icon, lt.a.addLayer, {
							[lt.a.addLayerActive]: t
						}),
						c = Object(z.c)("<< SELECT AN AREA FOR YOUR LAYER");
					return d.a.createElement("div", {
						className: lt.a.header
					}, t ? d.a.createElement(Ie.b, {
						className: lt.a.selectLayerMessage,
						title: c
					}, c) : d.a.createElement(d.a.Fragment, null, d.a.createElement(fe, {
						className: lt.a.icon
					}), d.a.createElement(xe, {
						className: lt.a.wordmark
					})), a ? d.a.createElement(X, {
						isRotated: t,
						onClick: r,
						className: o
					}) : s ? d.a.createElement(Fe, {
						className: lt.a.surfaceIcon,
						onClick: n
					}) : d.a.createElement(dt, null))
				},
				ut = a("./src/reddit/controls/Input/index.tsx"),
				mt = a("./src/reddit/icons/svgs/Search/index.tsx"),
				pt = a("./src/reddit/components/LayersEmbed/LayersPanel/SearchBar/index.m.less"),
				ft = a.n(pt);
			var yt = e => d.a.createElement("div", {
					className: ft.a.container
				}, d.a.createElement("div", {
					className: ft.a.iconContainer
				}, d.a.createElement(mt.a, null)), d.a.createElement(ut.a, {
					onChange: e.onSearchTextChange,
					value: e.value,
					className: ft.a.input,
					type: "search"
				})),
				gt = a("./src/reddit/components/LayersEmbed/LayersPanel/index.m.less"),
				xt = a.n(gt);
			class Et extends d.a.Component {
				constructor(e) {
					super(e), this.scrollContainerId = "layers-embed-scroll-container", this.estimatedEntryHeightPx = 40, this.getContainer = () => document.getElementById(this.scrollContainerId), this.onLayerSelectFromPanelFactory = e => () => this.props.onLayerSelect(e, !1), this.onToggleSurfaceFactory = e => () => this.props.toggleSurface(e), this.onDuplicateSurfaceFactory = e => t => {
						t.stopPropagation(), this.props.duplicateSurface(e)
					}, this.onRemoveSurfaceFactory = e => t => {
						t.stopPropagation(), this.props.removeSurface(e)
					}, this.onAddLayerToSurfaceFactory = e => () => this.props.addLayerToSurface(e), this.onRemoveLayerFromSurfaceFactory = e => () => this.props.removeLayerFromSurface(e), this.copySurfaceUrlToClipboardFactory = e => t => {
						t.stopPropagation();
						const {
							currentSurfaceId: a,
							surfaces: s,
							toggleSurface: r
						} = this.props, n = s[e] || [];
						if (!n.length) return void this.props.showToast(Object(f.d)(Ye.fbt._("Surface is empty", null, {
							hk: "3Ek7Zj"
						}), q.b.Error));
						const o = n.map(e => e.id).join(","),
							c = "".concat(window.location.origin, "/r/").concat(this.props.subredditName, "/?surfaceLayers=").concat(o);
						Object(Je.a)(c) ? this.props.showToast(Object(f.d)(Ye.fbt._("Link has been copied", null, {
							hk: "3tMDVE"
						}), q.b.SuccessCommunityGreen)) : this.props.showToast(Object(f.d)(Ye.fbt._("Something went wrong", null, {
							hk: "1z7tqe"
						}), q.b.Error)), a !== e && r(e)
					}, this.toggleExpandSurfacesPanel = () => this.setState(e => ({
						isSurfacingPanelExpanded: !e.isSurfacingPanelExpanded
					})), this.toggleExpandSurfaceFactory = e => t => {
						t.stopPropagation();
						const {
							currentSurfaceId: a,
							toggleSurface: s
						} = this.props;
						if (a !== e) return s(e), void this.setState({
							isSurfaceExpanded: !0
						});
						this.setState(e => ({
							isSurfaceExpanded: !e.isSurfaceExpanded
						}))
					}, this.state = {
						isSurfaceExpanded: !1,
						isSurfacingPanelExpanded: !!Object.keys(e.surfaces).length
					}
				}
				componentDidUpdate(e) {
					Object.keys(e.surfaces).length < Object.keys(this.props.surfaces).length && !this.state.isSurfacingPanelExpanded && this.setState({
						isSurfacingPanelExpanded: !0
					})
				}
				render() {
					const {
						openDeleteModal: e,
						isModerator: t,
						hasLayerDraft: a,
						isLoading: s,
						isCreationEnabled: r,
						isSurfacingEnabled: n,
						isPickerBoxEnabled: o,
						layersSearchValue: c,
						layers: i,
						layersSearchResult: l,
						layersSearchRequestCompleted: h,
						onLoadMore: u,
						onAddLayerClick: m,
						onReferenceClick: p,
						onEditDraft: f,
						onDeleteDraft: y,
						onLayersSearch: b,
						surfaces: v,
						addSurface: S,
						currentSurfaceId: C,
						isSurfaceLoading: w
					} = this.props, {
						isSurfaceExpanded: I,
						isSurfacingPanelExpanded: P
					} = this.state;
					let k, M;
					l && l.length ? k = l : h && c.length > 1 ? k = l : (k = i, M = i && i.length ? i[i.length - 1].id : void 0);
					const O = C ? v[C] : null,
						j = k ? k.map(a => {
							const s = !!O && !!O.find(e => a.id === e.id);
							return {
								estHeight: this.estimatedEntryHeightPx,
								id: s ? "surfaced-".concat(a.id) : a.id,
								render: () => d.a.createElement(Te, {
									onAddLayerToSurface: this.onAddLayerToSurfaceFactory(a),
									onRemoveLayerFromSurface: this.onRemoveLayerFromSurfaceFactory(a.id),
									isSurfaced: s,
									isModerator: t,
									showDeleteModal: e(a.postId),
									dropdownId: "panel-".concat(a.id),
									isActive: a.id === this.props.activeLayerId,
									isCreationEnabled: r,
									isSurfacingEnabled: n,
									layer: a,
									key: a.id,
									onLayerSelect: this.onLayerSelectFromPanelFactory(a),
									onReferenceClick: p
								})
							}
						}) : [],
						_ = Object.keys(v).length,
						F = w ? d.a.createElement(L.a, {
							center: !0,
							sizePx: g / 2
						}) : _ < x ? d.a.createElement("p", {
							className: xt.a.addSurface,
							onClick: S
						}, d.a.createElement(Ae.a, {
							className: xt.a.surfaceIconPlus
						}), Ye.fbt._("Add new surface", null, {
							hk: "8n8YY"
						}), d.a.createElement(Ie.f, {
							className: xt.a.surfacesCount
						}, _, " / ", x)) : d.a.createElement("p", {
							className: xt.a.surfaceHeaderText
						}, Ye.fbt._("Maximum number of surfaces reached", null, {
							hk: "heKT9"
						}));
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(ht, {
						isPickerBoxEnabled: o,
						isCreationEnabled: r,
						isSurfacingEnabled: n,
						onAddLayerClick: m,
						onExpandSurfacesClick: this.toggleExpandSurfacesPanel
					}), P && d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
						className: xt.a.surfaceHeader
					}, F), d.a.createElement("div", {
						className: xt.a.surfacesWrapper
					}, d.a.createElement("div", {
						className: xt.a.surfacesScroller
					}, Object.keys(v).sort((e, t) => Number(e) - Number(t)).map(a => {
						const s = v[a];
						return d.a.createElement(d.a.Fragment, {
							key: "surface-".concat(a)
						}, d.a.createElement("div", {
							className: Object(Ee.a)(xt.a.surfaceItem, C === a ? xt.a.surfaceActive : void 0),
							onClick: this.onToggleSurfaceFactory(a)
						}, d.a.createElement("p", {
							className: xt.a.surfaceTitle
						}, Ye.fbt._("Surface {surfaceId}", [Ye.fbt._param("surfaceId", a)], {
							hk: "17Jo0q"
						}), d.a.createElement(Ie.f, {
							className: xt.a.surfaceLayersCount
						}, "".concat(s ? s.length : 0, "/").concat(E))), d.a.createElement("p", {
							onClick: this.onDuplicateSurfaceFactory(a)
						}, d.a.createElement(Qe.a, {
							className: xt.a.surfaceIcon
						})), d.a.createElement("p", {
							onClick: this.copySurfaceUrlToClipboardFactory(a)
						}, d.a.createElement($e.a, {
							className: xt.a.surfaceIcon
						})), d.a.createElement("p", {
							onClick: this.onRemoveSurfaceFactory(a)
						}, d.a.createElement(et.a, {
							className: xt.a.surfaceIcon
						})), d.a.createElement("p", {
							onClick: this.toggleExpandSurfaceFactory(a)
						}, C === a && I ? d.a.createElement(Ke.a, {
							className: xt.a.surfaceIconBase
						}) : d.a.createElement(Xe.a, {
							className: xt.a.surfaceIconBase
						}))), C === a && I && (O && O.length ? O.map(s => d.a.createElement(Te, {
							onAddLayerToSurface: this.onAddLayerToSurfaceFactory(s),
							onRemoveLayerFromSurface: this.onRemoveLayerFromSurfaceFactory(s.id),
							isSurfaced: !0,
							isModerator: t,
							showDeleteModal: e(s.postId),
							dropdownId: "surface-".concat(a, "-").concat(s.id),
							isActive: s.id === this.props.activeLayerId,
							isCreationEnabled: r,
							isSurfacingEnabled: n,
							layer: s,
							key: "surface-".concat(a, "-").concat(s.id),
							onLayerSelect: this.onLayerSelectFromPanelFactory(s),
							onReferenceClick: p
						})) : d.a.createElement("p", {
							className: xt.a.surfaceEmptyText
						}, Ye.fbt._("Surface is empty, add some layers", null, {
							hk: "3iXJZp"
						}))))
					})))), d.a.createElement(yt, {
						value: c,
						onSearchTextChange: b
					}), d.a.createElement("div", {
						id: this.scrollContainerId,
						className: xt.a.scroller
					}, a && r && d.a.createElement(rt, {
						onEditDraft: f,
						onDeleteDraft: y
					}), s ? d.a.createElement(L.a, {
						center: !0,
						className: xt.a.loader,
						sizePx: g
					}) : d.a.createElement(we.b, {
						getContainer: this.getContainer,
						loadMoreToken: M,
						onLoadMore: u,
						preventScrollOnMount: !0
					}, j)), d.a.createElement(ct, null))
				}
			}
			var bt = Et,
				vt = a("./src/reddit/components/LayersEmbed/index.m.less"),
				Lt = a.n(vt);
			const St = Object(u.c)({
					isCreationEnabled: j.a,
					isSurfacingEnabled: j.d,
					isModerator: G.g,
					layerDraft: H.b
				}),
				Ct = Object(h.b)(St, (e, t) => ({
					openEditor: t => e(p.g(t)),
					openLayerDraft: () => e(p.j()),
					deleteLayerDraft: () => e(p.h()),
					showToast: t => e(Object(f.e)(Object.assign({}, t, {
						duration: f.a
					})))
				}));
			class wt extends d.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.layersFetchLimit = 25, this.updateComponentHeightTimeoutMs = 500, this.updateComponentHeight = () => {
						const e = document.querySelector(".".concat(Lt.a.fixedArWrapper));
						e && this.setState({
							componentHeight: "".concat(Math.floor(e.getBoundingClientRect().height), "px")
						})
					}, this.debouncedUpdateComponentHeight = r()(this.updateComponentHeight, this.updateComponentHeightTimeoutMs, {
						leading: !0,
						maxWait: this.updateComponentHeightTimeoutMs
					}), this.onLayerSelect = (e, t) => this.setState(a => {
						let s = e;
						return s && a.activeLayer && a.activeLayer.id === s.id && (s = null), {
							isInspectorActiveLayer: t,
							isPickerBoxEnabled: !1,
							activeLayer: s
						}
					}), this.hideDeleteModal = () => this.setState({
						layerToDeleteId: null,
						shouldShowDeleteModal: !1
					}), this.openDeleteModal = e => () => this.setState({
						layerToDeleteId: e,
						shouldShowDeleteModal: !0
					}), this.deleteLayer = async () => {
						const {
							apiContext: e,
							showToast: t
						} = this.props;
						if (this.state.layerToDeleteId)
							if ((await Object(S.l)(e(), this.state.layerToDeleteId, !1)).ok) {
								t(Object(f.d)(Object(z.c)("Post has been deleted"), q.b.SuccessMod))
							} else {
								t(Object(f.d)(Object(z.c)("Post has not been deleted"), q.b.Error))
							}
					}, this.syncPersistedSurfaces = () => {
						const e = Object.keys(this.state.surfaces).reduce((e, t) => {
							const a = this.state.surfaces[t];
							return Object.assign({}, e, {
								[t]: a ? a.map(e => e.id) : null
							})
						}, {});
						Object(A.X)(e)
					}, this.addSurface = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
						const a = Object.keys(t.state.surfaces).length;
						a >= 10 ? t.props.showToast(Object(f.d)(Object(z.c)("Maximum number of surfaces reached"), q.b.Error)) : t.setState(t => {
							const a = t.latestSurfaceId + 1;
							return {
								latestSurfaceId: a,
								currentSurfaceId: String(a),
								surfaces: Object.assign({}, t.surfaces, {
									[String(a)]: e.length ? [...e] : []
								})
							}
						}, t.syncPersistedSurfaces)
					}, this.duplicateSurface = e => {
						const t = this.state.surfaces[e];
						t && this.addSurface(t)
					}, this.removeSurface = e => this.setState(t => ({
						surfaces: i()(t.surfaces, e),
						currentSurfaceId: t.currentSurfaceId === e ? null : t.currentSurfaceId
					}), this.syncPersistedSurfaces), this.toggleSurface = e => {
						this.state.surfaces[e] && this.setState(t => ({
							currentSurfaceId: t.currentSurfaceId !== e ? e : null
						}))
					}, this.addLayerToCurrentSurface = e => {
						const {
							currentSurfaceId: t,
							surfaces: a
						} = this.state;
						if (0 === Object.keys(a).length) return void this.addSurface([e]);
						if (!t) {
							const e = Object(f.d)(Object(z.c)("Please select surface to add layer."), q.b.Error);
							return void this.props.showToast(e)
						}
						const s = this.state.surfaces[t];
						s && (s.length >= E ? this.props.showToast(Object(f.d)(Object(z.c)("Layers per surface limit exceeded."), q.b.Error)) : this.setState(a => ({
							surfaces: Object.assign({}, a.surfaces, {
								[t]: [...s || [], e]
							})
						}), this.syncPersistedSurfaces))
					}, this.removeLayerFromSurface = e => {
						const {
							currentSurfaceId: t
						} = this.state;
						if (!t) return;
						const a = this.state.surfaces[t] || [];
						this.setState(s => ({
							surfaces: Object.assign({}, s.surfaces, {
								[t]: a.filter(t => t.id !== e)
							})
						}), this.syncPersistedSurfaces)
					}, this.loadSurfaces = async function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
							a = arguments.length > 1 ? arguments[1] : void 0;
						const s = Object.keys(a);
						let r = 0;
						s.length && (r = Math.max(...s.map(e => Number(e))));
						const n = t.getSurfaceLayersFromUrlParams(e, a);
						if (n && n.length) {
							r += 1;
							const e = String(r);
							s.push(e), a[e] = [...n]
						}
						t.setState({
							latestSurfaceId: r,
							currentSurfaceId: e && r ? String(r) : null,
							surfaces: Object.assign({}, s.reduce((e, t) => Object.assign({}, e, {
								[t]: null
							}), {}))
						});
						const o = [...new Set(s.reduce((e, t) => [...e, ...a[t]], []))],
							c = await t.loadSurfaceByLayerIds(o);
						if (!c) return;
						const i = c.filter(Boolean).reduce((e, t) => Object.assign({}, e, {
								[t.id]: t
							}), {}),
							l = s.reduce((e, t) => Object.assign({}, e, {
								[t]: a[t].map(e => i[e]).filter(Boolean)
							}), {});
						Object.keys(l).length && t.setState(e => ({
							surfaces: Object.assign({}, e.surfaces, l)
						}), t.syncPersistedSurfaces)
					}, this.getSurfaceLayersFromUrlParams = (e, t) => {
						const a = new RegExp("^[0-9]+$"),
							s = [...new Set(e.split(",").filter(e => a.test(e)))];
						if (!this.isSurfaceIsDuplicate(s, t)) return s
					}, this.isSurfaceIsDuplicate = (e, t) => !!Object.keys(t).find(a => {
						if (t[a].length !== e.length) return !1;
						for (let s = 0; s < e.length; s++)
							if (e[s] !== t[a][s]) return !1;
						return !0
					}), this.onAddLayerClick = () => this.setState(e => ({
						activeLayer: null,
						isPickerBoxEnabled: !e.isPickerBoxEnabled
					})), this.onBackgroundSelect = (e, t) => {
						const a = new Image;
						a.onload = () => {
							this.props.openEditor({
								background: a,
								box: t
							}), this.props.sendEvent(D.c)
						}, a.src = e, this.setState({
							isPickerBoxEnabled: !1
						})
					}, this.fetchLayersConfigFromGql = async () => {
						const {
							gqlContext: e,
							subredditId: t
						} = this.props;
						this.setState({
							layersConfig: null,
							layersConfigRequestInProgress: !0,
							layersConfigRequestFailed: !1
						});
						const a = await k(e(), t);
						let s = null,
							r = !1;
						if (a.ok) {
							s = F(a.body.data.subreddit)[t] || null
						} else r = !0;
						this.setState({
							layersConfig: s,
							layersConfigRequestFailed: r,
							layersConfigRequestInProgress: !1
						})
					}, this.fetchLayersFromGql = async () => {
						if (this.state.layersRequestInProgress) return;
						const {
							gqlContext: e,
							subredditId: t
						} = this.props;
						this.setState({
							layersRequestInProgress: !0,
							layersRequestFailed: !1
						});
						let a = this.state.layersCursor;
						const s = await M(e(), t, this.layersFetchLimit, a);
						let r = this.state.layers && this.state.layers.slice() || [],
							n = !1;
						if (s.ok) {
							const e = T(s.body.data.subreddit)[t];
							e && (r = e.layers && e.layers.length ? [...r, ...e.layers] : r, a = e.cursor || a)
						} else n = !0;
						this.setState({
							layers: r,
							layersCursor: a,
							layersRequestFailed: n,
							layersRequestInProgress: !1
						})
					}, this.loadSurfaceByLayerIds = async e => {
						if (this.state.surfaceLayersRequestInProgress) return;
						if (!e || 0 === e.length) return [];
						this.setState({
							surfaceLayersRequestInProgress: !0
						});
						const {
							gqlContext: t,
							subredditId: a
						} = this.props, s = await O(t(), a, e);
						if (s.ok) {
							const e = _(s.body.data.subreddit)[a];
							return e && e.length ? this.props.showToast(Object(f.d)(Object(z.c)("Surfaces have been loaded"), q.b.SuccessCommunityGreen)) : this.props.showToast(Object(f.d)(Object(z.c)("Surfaces have not been loaded, something went wrong"), q.b.Error)), this.setState({
								surfaceLayersRequestInProgress: !1
							}), e
						}
					}, this.getNormalizedLayersFromResponse = (e, t) => {
						const a = T(e.body.data.subreddit)[t];
						return a && a.layers || null
					}, this.fetchInspectorLayersFromGql = async e => {
						const {
							gqlContext: t,
							subredditId: a
						} = this.props;
						let s = this.state.layersInspectedCursor;
						o()(e, this.state.layersInspectedBox) ? this.setState({
							layersInspectedRequestInProgress: !0,
							layersInspectedRequestFailed: !1
						}) : (s = "", this.setState({
							layersInspectedBox: e,
							layersInspectedCursor: s,
							layersInspected: null,
							layersInspectedRequestInProgress: !0,
							layersInspectedRequestFailed: !1
						}));
						const r = await M(t(), a, this.layersFetchLimit, s, e);
						let n = this.state.layersInspected && this.state.layersInspected.slice() || [],
							c = !1;
						if (r.ok) {
							const e = T(r.body.data.subreddit)[a];
							e && (n = e.layers && e.layers.length ? [...n, ...e.layers] : n, s = e.cursor || s)
						} else c = !0;
						this.setState({
							layersInspected: n,
							layersInspectedCursor: s,
							layersInspectedRequestFailed: c,
							layersInspectedRequestInProgress: !1
						})
					}, this.fetchSearchLayersFromGql = async () => {
						const {
							gqlContext: e,
							subredditId: t
						} = this.props, {
							layersSearchValue: a
						} = this.state;
						if (!a || a.length < 2) return;
						this.setState({
							layersSearchResult: null,
							layersSearchedRequestInProgress: !0,
							layersSearchedRequestFailed: !1
						});
						const s = await M(e(), t, this.layersFetchLimit, void 0, void 0, a);
						let r = null,
							n = !1;
						s.ok ? r = this.getNormalizedLayersFromResponse(s, t) : n = !0, this.setState({
							layersSearchResult: r,
							layersSearchedRequestFailed: n,
							layersSearchRequestCompleted: !0,
							layersSearchedRequestInProgress: !1
						})
					}, this.debouncedFetchSearchLayersFromGql = r()(this.fetchSearchLayersFromGql, 1e3, {
						leading: !0
					}), this.handleSearchTextChange = e => {
						this.setState(Object.assign({
							layersSearchRequestCompleted: !1,
							layersSearchValue: e.target.value
						}, e.target.value ? {} : {
							layersSearchResult: null
						}), this.debouncedFetchSearchLayersFromGql)
					}, this.state = {
						activeLayer: null,
						componentHeight: "",
						isPickerBoxEnabled: !1,
						isInspectorActiveLayer: !1,
						layersConfig: null,
						layersConfigRequestInProgress: !1,
						layersConfigRequestFailed: !1,
						layers: null,
						layersCursor: "",
						layersRequestInProgress: !1,
						layersRequestFailed: !1,
						layersInspected: null,
						layersInspectedBox: null,
						layersInspectedCursor: "",
						layersInspectedRequestInProgress: !1,
						layersInspectedRequestFailed: !1,
						layersSearchValue: "",
						layersSearchResult: null,
						layersSearchedRequestInProgress: !1,
						layersSearchedRequestFailed: !1,
						layersSearchRequestCompleted: !0,
						layerToDeleteId: null,
						shouldShowDeleteModal: !1,
						surfaces: {},
						currentSurfaceId: null,
						latestSurfaceId: 0,
						surfaceLayersRequestInProgress: !1
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.debouncedUpdateComponentHeight), this.updateComponentHeight(), this.fetchLayersConfigFromGql(), this.fetchLayersFromGql();
					const e = Object(m.a)().get("surfaceLayers"),
						t = Object(A.x)() || {};
					this.loadSurfaces(e, t)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.debouncedUpdateComponentHeight), this.props.deleteLayerDraft()
				}
				render() {
					const {
						activeLayer: e,
						isInspectorActiveLayer: t,
						isPickerBoxEnabled: a,
						layers: s,
						layersConfig: r,
						layersSearchResult: n,
						layersSearchValue: o,
						layersRequestInProgress: c,
						layersSearchedRequestInProgress: i,
						layersSearchRequestCompleted: l,
						shouldShowDeleteModal: h,
						surfaces: u,
						currentSurfaceId: m,
						surfaceLayersRequestInProgress: p
					} = this.state, {
						isCreationEnabled: f,
						isSurfacingEnabled: x,
						isModerator: E,
						subredditName: b,
						showToast: v
					} = this.props;
					let S = null;
					S = r ? d.a.createElement(Ve, {
						activeLayer: e,
						fetchInspectorLayers: this.fetchInspectorLayersFromGql,
						isCreationEnabled: f,
						isSurfacingEnabled: x,
						isInspectorActiveLayer: t,
						isModerator: E,
						isPickerBoxEnabled: a,
						layersConfig: r,
						layersInspected: this.state.layersInspected,
						layersInspectedRequestInProgress: this.state.layersInspectedRequestInProgress,
						layersInspectedRequestFailed: this.state.layersInspectedRequestFailed,
						onBackgroundSelect: this.onBackgroundSelect,
						onLayerSelect: this.onLayerSelect,
						openDeleteModal: this.openDeleteModal,
						surfaces: u,
						currentSurfaceId: m,
						addLayerToSurface: this.addLayerToCurrentSurface,
						removeLayerFromSurface: this.removeLayerFromSurface
					}) : d.a.createElement("div", {
						className: Lt.a.loaderWrapper
					}, d.a.createElement(L.a, {
						sizePx: g
					}));
					const C = !s && c;
					return d.a.createElement("div", {
						className: Lt.a.container
					}, d.a.createElement("div", {
						className: Lt.a.colCanvas
					}, d.a.createElement("div", {
						className: Lt.a.fixedArWrapper
					}, d.a.createElement("div", {
						className: Lt.a.fixedArInner
					}, S))), d.a.createElement("div", {
						style: {
							height: this.state.componentHeight
						},
						className: Lt.a.colPanel
					}, d.a.createElement(bt, {
						activeLayerId: e && e.id || null,
						isLoading: C || i,
						isCreationEnabled: f,
						isSurfacingEnabled: x,
						isPickerBoxEnabled: a,
						isModerator: E,
						hasLayerDraft: !!this.props.layerDraft,
						layersSearchValue: o,
						layers: s,
						layersSearchResult: n,
						layersSearchRequestCompleted: l,
						onAddLayerClick: this.onAddLayerClick,
						onLayerSelect: this.onLayerSelect,
						onLoadMore: this.fetchLayersFromGql,
						onReferenceClick: this.onBackgroundSelect,
						onEditDraft: this.props.openLayerDraft,
						onDeleteDraft: this.props.deleteLayerDraft,
						onLayersSearch: this.handleSearchTextChange,
						openDeleteModal: this.openDeleteModal,
						subredditName: b,
						surfaces: u,
						currentSurfaceId: m,
						addSurface: this.addSurface,
						duplicateSurface: this.duplicateSurface,
						removeSurface: this.removeSurface,
						toggleSurface: this.toggleSurface,
						addLayerToSurface: this.addLayerToCurrentSurface,
						removeLayerFromSurface: this.removeLayerFromSurface,
						isSurfaceLoading: p,
						showToast: v
					})), E && h && this.state.layerToDeleteId && d.a.createElement(y.a, {
						toggleModal: this.hideDeleteModal,
						onConfirm: this.deleteLayer,
						actionText: Object(z.c)("delete post"),
						headerText: Object(z.c)("Delete post?"),
						modalText: Object(z.c)("Are you sure you want to delete this post? You can't undo this."),
						withOverlay: !0
					}))
				}
			}
			t.default = Ct(Object(v.b)(Object(b.c)(wt)))
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, a) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return L
			}));
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/lessComponent.tsx"),
				l = a("./src/reddit/actions/tooltip.ts"),
				d = a("./src/reddit/i18n/utils.ts"),
				h = a("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = a("./src/reddit/controls/Dropdown/index.tsx"),
				m = a("./src/reddit/controls/Dropdown/Row.tsx"),
				p = a("./src/reddit/icons/fonts/Menu/index.tsx"),
				f = a("./src/reddit/selectors/tooltip.ts"),
				y = a("./src/reddit/components/OverflowMenu/index.m.less"),
				g = a.n(y);
			const x = i.a.wrapped(u.a, "_Dropdown", g.a),
				E = Object(h.a)(x),
				b = i.a.button("MenuButton", g.a),
				v = i.a.wrapped(p.a, "MenuIcon", g.a),
				L = i.a.wrapped(m.b, "DropdownRow", g.a),
				S = Object(o.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: a
						} = t;
						return Object(f.b)(a)(e)
					}
				}),
				C = Object(n.b)(S, (e, t) => {
					let {
						dropdownId: a
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: a
						}))
					}
				}),
				w = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = C(e => r.a.createElement(b, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": Object(d.c)("more options"),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: w(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(v, null), r.a.createElement(E, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			}));
			var s = a("./src/higherOrderComponents/makeAsync.tsx"),
				r = a("./src/lib/loadWithRetries/index.ts");
			const n = {
					backgroundColor: a("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => Promise.all([a.e("ReportFlow~ReportPage"), a.e("ReportFlow")]).then(a.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/lib/lessComponent.tsx"),
				r = a("./src/reddit/controls/Input/index.m.less"),
				n = a.n(r);
			t.a = s.a.input("input", n.a)
		},
		"./src/reddit/helpers/defaultStyledSVG/index.m.less": function(e, t, a) {
			e.exports = {
				defaultSVG: "_2tsJkJBrXn7yERCuGwPDHh",
				defaultSvg: "_2tsJkJBrXn7yERCuGwPDHh"
			}
		},
		"./src/reddit/helpers/trackers/layers.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return n
			})), a.d(t, "b", (function() {
				return o
			})), a.d(t, "e", (function() {
				return c
			})), a.d(t, "d", (function() {
				return i
			})), a.d(t, "a", (function() {
				return l
			}));
			var s = a("./src/telemetry/models/Timer.ts"),
				r = a("./src/reddit/selectors/telemetry.ts");
			const n = e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: r.subreddit(e),
					actionInfo: Object.assign({}, r.defaults(e).actionInfo, {
						pageType: "layer_maker"
					})
				}),
				o = e => t => Object.assign({
					source: "layer_maker",
					action: "click",
					noun: "create"
				}, r.defaults(t), {
					subreddit: r.subreddit(t),
					user: Object.assign({}, r.defaults(t).user, {
						app_name: "layer_maker"
					}),
					timer: {
						type: s.TimerType.LayerCreationTime,
						millis: e
					}
				}),
				c = e => ({
					source: "layer_maker",
					action: "click",
					noun: "delete",
					subreddit: r.subreddit(e)
				}),
				i = e => t => ({
					source: "layer_maker",
					action: "click",
					noun: "color_picker",
					subreddit: r.subreddit(t),
					actionInfo: Object.assign({}, r.defaults(t).actionInfo, {
						settingValue: e
					})
				}),
				l = e => ({
					source: "layer_maker",
					action: "click",
					noun: "close",
					subreddit: r.subreddit(e)
				})
		},
		"./src/reddit/icons/svgs/LayerDuplicate/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24",
				className: e.className
			}, r.a.createElement("g", null, r.a.createElement("g", {
				transform: "translate(-78 82.5)"
			}, r.a.createElement("path", {
				d: "M-435,387.5h-7a3,3,0,0,1-3-3v-7a3,3,0,0,1,3-3h1v2h-1a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-1h2v1A3,3,0,0,1-435,387.5Zm3-8h-2v-2a1,1,0,0,0-1-1h-2v-2h2a3,3,0,0,1,3,3Z",
				transform: "translate(526 -448.5)"
			}), r.a.createElement("path", {
				d: "M96-66H89a3,3,0,0,1-3-3v-7a3,3,0,0,1,3-3h7a3,3,0,0,1,3,3v7A3,3,0,0,1,96-66ZM89-77a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7a1,1,0,0,0-1-1Z"
			}))))
		},
		"./src/reddit/icons/svgs/Share/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = a("./src/lib/lessComponent.tsx"),
				c = a("./src/reddit/helpers/defaultStyledSVG/index.m.less"),
				i = a.n(c);
			var l = e => o.a.wrapped(e, "defaultSVG", i.a),
				d = a("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(n.a)(l(e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: e.fill || Object(d.a)(e).actionIcon
			}, r.a.createElement("path", {
				fill: "inherit",
				d: "M11.43375,2.195625 C11.031875,1.831875 10.3125,2.116875 10.3125,2.6590625 L10.3125,5.9096875 C10,5.975625 9.2321875,6.0775 8.675625,6.2209375 C3.85875,7.4628125 0.5928125,11.9 0.5928125,16.874375 C0.5928125,17.479375 1.308125,17.7309375 1.6634375,17.24125 C3.67375,14.4715625 6.875,12.561875 10.3125,12.1584375 L10.3125,14.8409375 C10.3125,15.383125 11.031875,15.668125 11.43375,15.304375 L18.673125,8.75 L11.43375,2.195625 Z"
			})))))
		},
		"./src/reddit/icons/svgs/Trash/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("polygon", {
				points: "10,38.8 30,38.8 31.2,10.9 8.7,10.9"
			}), r.a.createElement("path", {
				d: "M27.5,3.8H25c0-1.4-1.1-2.5-2.5-2.5h-5c-1.4,0-2.5,1.1-2.5,2.5h-2.5c-2.8,0-5,2.2-5,5h25C32.5,6,30.3,3.8,27.5,3.8z"
			}))))
		}
	}
]);
//# sourceMappingURL=reddit-components-LayersEmbed.363b44df8d0abdb4d21e.js.map