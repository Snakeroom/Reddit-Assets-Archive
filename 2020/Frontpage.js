// https://www.redditstatic.com/desktop2x/Frontpage.902ef69a60b396210427.js
// Retrieved at 11/12/2020, 11:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage"], {
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/LRUCache/index.ts");
			class o {
				constructor() {
					this.listenerMap = {}
				}
				_resetListenerMap() {
					this.listenerMap = {}
				}
				_resetKey(e) {
					this.listenerMap[e] = []
				}
				reset(e) {
					e ? this._resetKey(e) : this._resetListenerMap()
				}
				addListeners(e) {
					this.listenerMap[e] || (this.listenerMap[e] = []);
					for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) s[r - 1] = arguments[r];
					this.listenerMap[e].push(...s)
				}
				removeListeners(e) {
					for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) s[r - 1] = arguments[r];
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const n = s.length,
						i = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !s.includes(e)), this.listenerMap[e].length - i === n
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
			var c = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/async.tsx"),
				d = s("./src/reddit/constants/page.ts");
			const l = new i.a(50),
				u = e => {
					const {
						numInstance: t,
						layout: s,
						listingKey: r,
						listingPosition: i
					} = e, u = "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(r);
					let m = l.get(u);
					if (m) return m;
					const b = new o;
					return m = {
						estHeight: c.d,
						id: "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(r),
						trackOnEnteredViewport() {
							b.publish(c.b)
						},
						render: () => n.a.createElement(a.a, {
							listingPosition: i,
							numInstance: t,
							listingKey: r,
							listingName: d.b,
							pubsub: b
						})
					}, l.set(u, m), m
				}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts").then(s.bind(null, "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx"
				}
			});
			t.a = n
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				c = s.n(o);
			class a extends n.a.Component {
				render() {
					return n.a.createElement("div", {
						className: Object(i.a)(c.a.heroContainer, this.props.className)
					}, n.a.createElement("div", {
						className: Object(i.a)(c.a.header, this.props.headerClassName)
					}, this.props.header), n.a.createElement("div", {
						className: Object(i.a)(this.props.hidePadding ? c.a.bodyHidePadding : c.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = a
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/selectors/live.ts");
			const a = Object(r.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointAnnouncementsCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointAnnouncementsCarousel").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx"
					}
				}),
				d = Object(r.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.tsx"
					}
				}),
				l = () => {
					const e = Object(o.d)(c.a, (e, t) => e && t && e[0].id === t[0].id || !1),
						t = Object(o.d)(c.b);
					return t ? i.a.createElement(d, {
						featuredLiveThread: t
					}) : e && e.length ? i.a.createElement(a, {
						announcements: e
					}) : null
				};
			t.a = l
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-InFeedPostCreation").then(s.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				a = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			t.a = Object(o.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: o,
					post: a,
					redditStyle: m,
					theme: b
				} = e, p = u(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(i.a)(d.a.backgroundWrapper, s),
					style: Object(c.c)(r, e),
					onClick: o
				}, p), t)
			})
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/LRUCache/index.ts"),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				l = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				u = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				p = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = s.n(p),
				y = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				g = s.n(y);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = e => {
				let {
					className: t
				} = e;
				const s = Object(c.d)(b.c) ? g.a.loading : g.a.noise;
				return n.a.createElement("div", {
					className: Object(a.a)(t, g.a.container, g.a.placeholder, g.a.large, h.a.largeAndMediumPostStyles)
				}, n.a.createElement(u.a, {
					className: g.a.backgroundWrapper
				}, n.a.createElement("div", {
					className: g.a.titleAndDescriptionContainer
				}, n.a.createElement("h3", {
					className: g.a.title
				}, f._("Top broadcast", null, {
					hk: "HADCh"
				}))), n.a.createElement("div", {
					className: g.a.body
				}, n.a.createElement("div", {
					className: g.a.previewContainer
				}, n.a.createElement("div", {
					className: Object(a.a)(g.a.thumbnail, s)
				})))))
			};
			var v = e => {
				let {
					className: t,
					layout: s
				} = e;
				return s === m.g.Classic ? n.a.createElement(d.b, {
					className: Object(a.a)(t, g.a.classicPostPlaceholder),
					isLoading: !0
				}) : s === m.g.Compact ? n.a.createElement(l.a, {
					className: Object(a.a)(t, g.a.compactPostPlaceholder),
					isLoading: !0
				}) : n.a.createElement(j, {
					className: t
				})
			};
			const O = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: s
					} = e;
					return n.a.createElement(v, {
						className: t,
						layout: s
					})
				},
				getComponent: () => Promise.all([s.e("vendors~CollectionCommentsPage~CommentsPage~RpanListingUnit~Subreddit~SubredditWiki~reddit-component~1ffa6388"), s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("RpanListingUnit~reddit-components-MediumPost"), s.e("RpanListingUnit")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var x = e => n.a.createElement(O, e),
				_ = s("./src/reddit/helpers/trackers/rpan.ts");
			const N = e => e === m.g.Classic ? 88 : e === m.g.Compact ? 42 : 340,
				P = new i.a(20),
				E = e => {
					const t = "rpan-".concat(e.layout, "-").concat(e.listingKey),
						s = P.get(t);
					if (s) return s;
					const r = k(e.desiredIndex, e.children),
						i = {
							child: {
								id: t,
								estHeight: N(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(_.D)()),
								render: t => {
									let {
										className: s
									} = t;
									return n.a.createElement(x, {
										className: s,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: r
						};
					return P.set(t, i), i
				},
				k = (e, t) => {
					const s = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; s.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				header: "_25K6Ujp7eqOAHEdYuHm3pY",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				overflowItemText: "fxp6qlPWJ76riedygoUS7",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				videoIcon: "_1uKWYPTIE0QxbdTkW9En19",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				bigExpando: "qecjZnTfgEjCTlYKgqrl0",
				bigExpandoIcon: "_8ViGpsDZkJ4aNM6aVyan0",
				previewContainer: "_1N144m-88joWY3ZwzWRjrl",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				loading: "_3Hsr_kP1TY2ld8xQG-XqAL",
				noise: "_4AhQxTHsKbDr8Z4UeVFvR",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				inDuPresenceExperiment: "_1SNDXuFbFIGSP2riURtIVK",
				broadcastTitle: "_2PtVDFQbkz3Sh1f_ppShzf",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7",
				upvoteAnimation: "_1MEw3CaNaAuwCohG-n7UPc"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				i = s.n(n);
			t.a = r.a.div("header", i.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				c = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				a = s.n(c);

			function d(e) {
				const {
					className: t,
					id: s,
					layoutBodyClassName: r,
					showCardView: c
				} = e, d = {
					[a.a["m-card"]]: c
				};
				return n.a.createElement("div", {
					id: s,
					className: Object(i.a)(a.a.container, d, t)
				}, n.a.createElement(o.a, {
					className: a.a.layout,
					bodyClassName: Object(i.a)(a.a.layoutBody, d, r),
					header: e.header,
					headerClassName: Object(i.a)(a.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				container: "_3_c5cqV3WsdQo95Ql4El73",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				c = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = s.n(d);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = n.a.createElement(o.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), b = Object(a.a)({
				isLoading: !0
			});
			t.a = e => n.a.createElement(c.a, {
				className: e.className,
				header: m,
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => n.a.createElement("div", {
				className: l.a.post,
				key: "placeholder-post-".concat(t)
			}, n.a.createElement("div", {
				className: Object(i.a)(l.a.desc, l.a.one, b)
			}), n.a.createElement("div", {
				className: Object(i.a)(l.a.desc, l.a.two, b)
			}), n.a.createElement("div", {
				className: Object(i.a)(l.a.icon, b)
			}), n.a.createElement("div", {
				className: Object(i.a)(l.a.name, b)
			}))))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				is2020: "_2CLbCoThTVSANDpeJGlI6a"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/hooks/useButtons2020.ts"),
				a = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = s.n(d),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const h = m.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = p(e, ["border", "small"]);
					return t ? i.a.createElement(o.i, b({}, r, {
						className: Object(u.a)(r.className, {
							[l.a.isSmall]: s
						})
					})) : i.a.createElement(o.o, b({}, r, {
						className: Object(u.a)(r.className, {
							[l.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", l.a),
				y = e => {
					var {
						border: t,
						small: s
					} = e, r = p(e, ["border", "small"]);
					return Object(c.a)() ? i.a.createElement(o.q, b({}, r, {
						priority: t ? o.b.Primary : o.b.Plain,
						className: Object(u.a)(r.className, l.a.is2020),
						size: s ? o.c.S : o.c.M
					})) : i.a.createElement(h, b({}, r, {
						border: t,
						small: s,
						className: Object(u.a)(r.className, {
							[l.a.isSmall]: s
						})
					}))
				},
				g = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), i.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = m.a.wrapped(e => {
					var {
						border: t,
						small: s,
						buttonType: r
					} = e, n = p(e, ["border", "small", "buttonType"]);
					const c = g(r),
						a = Object(u.a)(n.className, {
							[l.a.isSmall]: s
						});
					return t ? i.a.createElement(o.l, b({}, n, {
						className: a
					}), c) : i.a.createElement(o.o, b({}, n, {
						className: a
					}), c)
				}, "UnsubscribeButton", l.a),
				j = e => {
					var {
						buttonType: t,
						border: s,
						small: r
					} = e, n = p(e, ["buttonType", "border", "small"]);
					return Object(c.a)() ? i.a.createElement(o.q, b({}, n, {
						priority: s ? o.b.Secondary : o.b.Plain,
						className: Object(u.a)(n.className, l.a.is2020),
						size: r ? o.c.S : o.c.M,
						text: g(t)
					})) : i.a.createElement(f, b({}, n, {
						border: s,
						small: r,
						buttonType: t,
						className: Object(u.a)(n.className, {
							[l.a.isSmall]: r
						})
					}))
				};
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: s,
						small: r = !1
					} = this.props, n = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: r
					};
					return this.props.userIsSubscriber ? i.a.createElement(j, b({}, n, {
						buttonType: this.props.identifier.type
					})) : i.a.createElement(y, b({}, n, {
						id: s
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js");
			const n = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				i = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = e => {
					let {
						type: t,
						key: s
					} = e;
					return i[n({
						type: t
					})][s]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				n = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(r.c)(i.a))
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-TabBadger-Component").then(s.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/TabBadger/Loader.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/posts.ts");
			const u = Object(o.c)({
					postCount: l.T,
					previousPageIsOverlay: d.p,
					tabBadged: e => e.tabBadged
				}),
				m = Object(i.b)(u);
			t.a = m(Object(a.c)(e => 0 === e.postCount ? null : n.a.createElement(c.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(n.c)({
				userIsSubscriber: o.gb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(i.d([s], !0)),
					onSubscriptionsRequested: () => e(i.e()),
					onUnsubscribe: () => e(i.d([s], !1))
				}
			})
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "d", (function() {
				return g
			}));
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				i = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				o = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				c = s("./src/reddit/models/Theme/index.ts"),
				a = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(c.g)(Object(a.a)(e).post, Object(a.a)(e).backgroundImage, Object(a.a)(e).backgroundImagePosition),
				b = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(c.g)(e.postBackgroundColor || Object(a.a)(t).post, e.postBackgroundImage, Object(a.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(c.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				p = e => Object(r.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: p(e.postBackgroundColor)
				} : u,
				y = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(i.a)(Object(n.a)(e), o.a.actionIcon, o.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "D", (function() {
				return l
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "z", (function() {
				return b
			})), s.d(t, "w", (function() {
				return p
			})), s.d(t, "A", (function() {
				return h
			})), s.d(t, "y", (function() {
				return y
			})), s.d(t, "x", (function() {
				return g
			})), s.d(t, "r", (function() {
				return f
			})), s.d(t, "s", (function() {
				return j
			})), s.d(t, "o", (function() {
				return v
			})), s.d(t, "m", (function() {
				return O
			})), s.d(t, "n", (function() {
				return x
			})), s.d(t, "l", (function() {
				return _
			})), s.d(t, "v", (function() {
				return N
			})), s.d(t, "p", (function() {
				return P
			})), s.d(t, "u", (function() {
				return E
			})), s.d(t, "C", (function() {
				return k
			})), s.d(t, "q", (function() {
				return C
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "i", (function() {
				return D
			})), s.d(t, "b", (function() {
				return A
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "t", (function() {
				return L
			})), s.d(t, "B", (function() {
				return U
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "j", (function() {
				return B
			})), s.d(t, "k", (function() {
				return F
			}));
			var r, n = s("./src/reddit/constants/chat.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(r || (r = {}));
			const c = (e, t) => {
					if (t) {
						const s = o.media(e, t.post.id),
							r = o.post(e, t.post.id),
							n = o.subreddit(e);
						if (t.post.authorInfo && r && (r.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const r = Object(i.j)(e, {
								streamIdFromPath: t.post.id
							});
							r === i.a.LIVE ? s.type = "stream_live" : r === i.a.VOD ? s.type = "stream_vod" : r === i.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: r,
							media: s,
							subreddit: n
						}
					}
					return {
						subreddit: o.subreddit(e)
					}
				},
				a = (e, t, s) => {
					if (!t || !s) return;
					const r = Object(i.j)(e, {
							streamIdFromPath: t.post.id
						}),
						o = t.chat_disabled || s.chatState === n.f.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: r === i.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: o ? n.f.None : n.f.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, c(e)),
				u = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, c(e)),
				m = (e, t) => s => Object.assign(Object.assign({
					source: "stream_du",
					action: "click",
					noun: "enlarge"
				}, c(s, e)), {
					actionInfo: o.actionInfo(s, {
						position: t || 0
					})
				}),
				b = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: a(s, e, t)
				}, d(s)), e && Object.assign({}, c(s, e))),
				p = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: a(s, e, t)
				}, d(s)), c(s, e)),
				h = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: a(s, e, t)
				}, d(s)), c(s, e)),
				y = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: a(s, e, t)
				}, d(s)), c(s, e)),
				g = (e, t, s) => r => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: a(r, t, s)
				}, d(r)), c(r, t)),
				f = (e, t, s, r) => n => Object.assign(Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: a(n, t, s)
				}, d(n)), c(n, t)), {
					actionInfo: o.actionInfo(n, {
						referralId: r
					})
				}),
				j = (e, t, s) => r => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: a(r, t, s)
				}, d(r)), c(r, t)),
				v = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: a(s, e, t)
				}, d(s)), c(s, e)),
				O = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: a(s, e, t)
				}, d(s)), c(s, e)),
				x = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: a(s, e, t)
				}, d(s)), c(s, e)),
				_ = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: a(s, e, t)
				}, c(s, e)),
				N = e => t => {
					const s = Object(i.l)(t, e);
					return Object.assign({
						source: "stream_chat",
						action: "click",
						noun: "send_chat"
					}, c(t, s))
				},
				P = (e, t, s) => r => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: a(r, t, s)
				}, c(r, t)),
				E = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: a(s, e, t)
				}, d(s)),
				k = e => t => Object.assign({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.profile(t),
					screen: o.screen(t)
				}, c(t, e)),
				C = e => e => {
					const t = c(e);
					return Object.assign({
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.profile(e),
						screen: o.screen(e)
					}, t)
				},
				w = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "follow"
				}, c(t, e)),
				D = e => t => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "subscribe"
				}, c(t, e)), {
					targetSubreddit: o.subreddit(t)
				}),
				A = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: a(s, e, t)
				}, c(s, e)),
				S = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: a(s, e, t)
				}, c(s, e)),
				I = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: a(s, e, t)
				}, c(s, e)),
				L = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: a(s, e, t)
				}, c(s, e)),
				U = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: a(s, e, t)
				}, c(s, e)),
				T = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: a(s, e, t)
				}, c(s, e)),
				B = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: a(s, e, t)
				}, c(s, e)), d(s)),
				F = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: a(s, e, t)
				}, c(s, e)), d(s))
		},
		"./src/reddit/pages/Frontpage/index.m.less": function(e, t, s) {
			e.exports = {
				duHeader: "_1fauFKjg428h9E1m4B2Vr-",
				sidebar: "_10wb7d3rGvj56Gcs4IQWL5"
			}
		},
		"./src/reddit/pages/Frontpage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				n = s.n(r),
				i = s("./node_modules/core-js/modules/es6.array.sort.js"),
				o = s.n(i),
				c = s("./node_modules/core-js/modules/es6.regexp.search.js"),
				a = s.n(c),
				d = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/lodash/fromPairs.js"),
				u = s.n(l),
				m = s("./node_modules/react/index.js"),
				b = s.n(m),
				p = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				y = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/extractQueryParams/index.ts"),
				f = s("./src/lib/fastdom/index.ts"),
				j = s("./src/lib/makeListingKey/index.ts"),
				v = s("./src/lib/performanceTimings/index.tsx"),
				O = s("./src/reddit/actions/frontpage.ts"),
				x = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx"),
				_ = s("./src/reddit/components/EmptySubreddit.tsx"),
				N = s("./src/reddit/components/FeaturedLiveEntrypoint/index.tsx"),
				P = s("./src/reddit/components/FrontpageSidebar/index.tsx"),
				E = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				k = s("./src/reddit/components/InFeedPostCreation/async.tsx"),
				C = s("./src/reddit/components/JumpToContent/index.tsx"),
				w = s("./src/reddit/components/ListingPostList/index.tsx"),
				D = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				A = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				S = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				I = s("./src/reddit/components/TabBadger/index.tsx"),
				L = s("./src/reddit/components/TrackingHelper/index.tsx"),
				U = s("./src/reddit/constants/parameters.ts"),
				T = s("./src/reddit/constants/postLayout.ts"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				V = s("./src/reddit/helpers/trackers/screenview.ts"),
				R = s("./src/reddit/layout/page/Listing/index.tsx"),
				M = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				H = s("./src/reddit/selectors/experiments/trending.ts"),
				W = s("./src/reddit/selectors/experiments/uiSimplification.ts"),
				K = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				G = s("./src/reddit/selectors/frontpage.ts"),
				J = s("./src/reddit/selectors/meta.ts"),
				Q = s("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				q = s("./src/reddit/selectors/user.ts"),
				z = s("./src/lib/constants/index.ts"),
				Y = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				Z = s("./src/lib/objectSelector/index.ts"),
				X = s("./src/reddit/constants/page.ts"),
				$ = s("./src/reddit/pages/Frontpage/index.m.less"),
				ee = s.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: se
			} = s("./node_modules/fbt/lib/FbtPublic.js"), re = Object(B.t)(), ne = Object(h.c)({
				queryParams: Object(Z.a)((e, t) => {
					let {
						location: s
					} = t;
					return u()([...Object(g.a)(s.search)])
				}),
				sort: (e, t) => {
					let {
						match: s
					} = t;
					const r = Object(G.a)(e);
					return s.params.sort || r
				}
			}), ie = Object(h.c)({
				countryMeta: J.b,
				geopopular: q.m
			}), oe = Object(h.c)({
				isActionBarAnimationEnabled: M.b,
				isInTrendingEntrypointExperiment: H.a,
				isLoggedIn: q.I,
				isPopular: B.C,
				isRpanDuVisible: e => Object(Q.a)(e, {
					listingName: Y.R
				}),
				rpanInjectionIndex: e => Object(Q.b)(e, {
					listingName: Y.R
				}),
				layout: B.N,
				isInUISimplificationI18NExperiment: W.a
			}), ce = () => Object(h.a)(ie, ne, oe, e => Object(Q.a)(e, {
				listingName: Y.R
			}), e => Object(Q.b)(e, {
				listingName: Y.R
			}), e => e, F.a, (e, t, s, r, n, i, o) => {
				let {
					countryMeta: c,
					geopopular: a
				} = e, {
					queryParams: d,
					sort: l
				} = t;
				const u = U.x in d && d[U.x].toUpperCase(),
					m = "string" == typeof u && u in z.Sb ? z.Sb[u] : z.Tb,
					b = Object(j.a)(X.a, l, d),
					p = c || z.w.Everywhere,
					h = a || p,
					y = U.h in d ? d[U.h].toUpperCase() : h,
					g = [];
				r && g.push(n);
				const f = Object(K.b)(i, g, {
					listingKey: b
				});
				return Object.assign({
					cardViewExperimentVariant: o,
					countrySort: y,
					listingKey: b,
					sort: l,
					timeSort: m,
					focusedVerticalPositions: f
				}, s)
			}), ae = (e, t) => ({
				onLoadMorePosts: () => e(O.d({
					sort: t.match.params.sort
				})),
				refreshFeed: () => e(O.e({
					sort: t.match.params.sort
				}))
			}), de = Object(p.b)(ce, ae), le = Object(d.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("Trending").then(s.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), ue = e => b.a.createElement(le, te({}, e, {
				fallback: b.a.createElement(S.a, {
					showCardView: !!e.showCardView
				})
			}));
			class me extends b.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = () => {
						const {
							cardViewExperimentVariant: e,
							isLoggedIn: t,
							sort: s
						} = this.props;
						f.a.read(() => {
							const r = "".concat(v.c.FrontPage, "-").concat(s),
								n = [Object(F.c)(e)];
							Object(v.d)(r, t, n)
						})
					}
				}
				render() {
					const {
						focusedVerticalPositions: e,
						isActionBarAnimationEnabled: t,
						isInTrendingEntrypointExperiment: s,
						isLoggedIn: r,
						isPopular: n,
						isRpanDuVisible: i,
						layout: o,
						listingKey: c,
						rpanInjectionIndex: a,
						sendEvent: d,
						isInUISimplificationI18NExperiment: l
					} = this.props, u = n && !r && s && !l, p = {
						baseUrl: "",
						countrySort: this.props.countrySort,
						sort: this.props.sort,
						timeSort: this.props.timeSort
					}, h = {};
					if (o === T.g.Large && e.forEach((e, t) => {
							h[e] = Object(x.a)({
								numInstance: t,
								layout: o,
								listingKey: c,
								listingName: X.b,
								listingPosition: e
							})
						}), i) {
						const {
							child: e,
							idx: t
						} = Object(D.a)({
							children: h,
							desiredIndex: a,
							layout: o,
							listingKey: c,
							listingName: Y.R,
							sendEvent: d
						});
						h[t] = e
					}
					const g = b.a.createElement(P.default, {
						className: ee.a.sidebar,
						listingKey: c,
						listingName: X.b
					});
					return b.a.createElement(R.a, {
						className: Object(y.a)(ee.a.Container, this.props.className),
						fitPageToContent: !0,
						trendingUnit: u && b.a.createElement(ue, {
							showCardView: o === T.g.Large
						}),
						content: b.a.createElement(m.Fragment, null, u && b.a.createElement(A.a, {
							className: ee.a.duHeader
						}, se._("Popular posts", null, {
							hk: "36DJb4"
						})), b.a.createElement(N.a, null), r && b.a.createElement(k.a, null), b.a.createElement(E.a, p), b.a.createElement(C.a, null), b.a.createElement(I.a, {
							listingKey: this.props.listingKey,
							shortTimer: !0,
							handlePillClick: this.props.refreshFeed
						}), b.a.createElement(w.a, {
							injectChildren: h,
							noPostsComponent: () => b.a.createElement(_.a, {
								listingName: X.b,
								sort: this.props.sort
							}),
							key: "listing",
							listingKey: c,
							listingName: X.b,
							listingViewed: (e, t) => Object(V.f)(c, this.props.sort, t, e, this.props.timeSort),
							onLoadMore: this.props.onLoadMorePosts,
							isActionBarAnimationEnabled: t
						})),
						sidebar: g
					})
				}
			}
			t.default = re(de(Object(L.c)(me)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				a = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(r.a)(a.a, a.f, (e, t) => {
					let {
						listingName: s
					} = t;
					const r = Object(c.ob)(e);
					if (!r) return !1;
					let a;
					if (-1 === [i.R, "r/popular"].indexOf(s)) {
						const t = s.replace(/^r\//, ""),
							n = Object(o.G)(e, t),
							i = r.subreddit[n];
						if (!i) return !1;
						a = i
					} else a = r;
					if (!a.rpanDuDismissalTime) return !1;
					return new Date(a.rpanDuDismissalTime).getTime() > Date.now() - 30 * n.x
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return s
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(d.m)(e, {
						subreddit: s
					})
				}, d.k, (e, t) => {
					let {
						sort: s
					} = t;
					return s
				}, (e, t, s, r, o, c, a) => {
					if (a === n.O.AWARDED) return !1;
					if (!e) return !1;
					if (c.isPermanentlyCanceled) return !1;
					if (s) return !1;
					if (t) return !!o && o.show_discovery_unit;
					if (!c.global.viewer_enabled) return !1;
					return [i.R, "r/popular"].indexOf(r) > -1
				}),
				u = Object(r.a)(a.f, (e, t) => {
					let {
						listingName: s
					} = t;
					return s
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(d.m)(e, {
						subreddit: s
					})
				}, d.l, (e, t, s, r) => {
					if (!e) {
						const e = "home" === t ? r.home_feed_discovery_unit_index : "r/popular" === t ? r.popular_feed_discovery_unit_index : i.i;
						return "number" == typeof e ? e : i.i
					}
					return s ? s.discovery_unit_index : i.i
				})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return N
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "n", (function() {
				return C
			})), s.d(t, "i", (function() {
				return A
			})), s.d(t, "d", (function() {
				return U
			})), s.d(t, "h", (function() {
				return T
			})), s.d(t, "k", (function() {
				return B
			})), s.d(t, "c", (function() {
				return F
			})), s.d(t, "f", (function() {
				return V
			})), s.d(t, "a", (function() {
				return H
			})), s.d(t, "j", (function() {
				return W
			})), s.d(t, "b", (function() {
				return K
			})), s.d(t, "e", (function() {
				return G
			})), s.d(t, "g", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				a = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				u = s("./node_modules/lodash/memoize.js");
			const m = e => e.publicAccessNetwork.listings,
				b = s.n(u)()(e => Object(n.a)(Object(r.a)(m, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var p = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const h = e => e.publicAccessNetwork.models,
				y = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				j = e => e.publicAccessNetwork.history.visitOrder,
				v = e => e.publicAccessNetwork.hlsStreams,
				O = Object(r.a)(v, e => e.ended),
				x = Object(r.a)(v, e => e.removed),
				_ = Object(r.a)(h, O, x, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = R(r, c.a.ENDED) ? c.a.ENDED : r,
							i = s.stream.vod_accessible;
						return n === r && !0 === i ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, s), {
								stream: Object.assign(Object.assign({}, s.stream), {
									state: n,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = R(r, c.a.ENDED) ? c.a.ENDED : r,
							i = s.stream.vod_accessible;
						return n === r && !1 === i ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, s), {
								stream: Object.assign(Object.assign({}, s.stream), {
									state: n,
									vod_accessible: !1
								})
							})
						})
					}, r)
				}),
				N = (e, t) => {
					return _(e)[Object(o.h)(t)]
				},
				P = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => b(t.listingName)(e, t), _, y, a.h, d.f, (e, t, s, r, n, a) => {
					if (a) {
						const i = [];
						if (e) {
							const t = Object(o.h)(e);
							s[t] && i.push(t)
						}
						const a = i.concat(t),
							d = [...new Set(a)],
							l = new Set([...r, ...n]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== c.a.KILLED && t.stream.state !== c.a.PURGED
						})
					}
					const d = new Set([...r, ...n]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== i.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== c.a.KILLED && e.stream.state !== c.a.PURGED).map(e => e.post.id)
				}),
				E = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, _, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: r
					} = t;
					return P(e, {
						listingName: s,
						streamIdFromPath: r
					})
				}, (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				k = Object(r.a)(_, E, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				C = Object(r.a)(_, E, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === c.a.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				w = Object(r.a)(j, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return E(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				D = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, _, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return E(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, g, (e, t, s, r) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						i = n.find(e => e.stream.state === c.a.IS_LIVE);
					if (i) return i.post.id;
					const o = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				A = Object(n.a)(Object(r.a)(D, _, (e, t) => e ? t[e] : void 0)),
				S = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(o.h)(s) : void 0
				}, D, y, a.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return E(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t, s, r, n) => !e || s.includes(e) || r.includes(e) ? t || n[0] : e),
				I = Object(r.a)(f, j, w, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				L = Object(r.a)(f, j, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				U = Object(n.a)(Object(r.a)(S, _, (e, t) => e ? t[e] : void 0)),
				T = Object(n.a)(Object(r.a)(I, _, (e, t) => e ? t[e] : void 0)),
				B = Object(n.a)(Object(r.a)(L, _, (e, t) => e ? t[e] : void 0)),
				F = (Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, _, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign(Object.assign({}, t[s]), {
					preloadedPreviewUrl: e[s]
				})))), Object(r.a)(S, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				V = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? N(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function R(e, t) {
				const s = {
					[c.a.NOT_STARTED]: 0,
					[c.a.PUBLISHED]: 1,
					[c.a.IS_LIVE]: 2,
					[c.a.DISCONNECTED]: 2,
					[c.a.ENDED]: 3,
					[c.a.KILLED]: 4,
					[c.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const M = Object(r.a)(S, g, (e, t) => e && t.timestamps[e] || 0);
			var H;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(H || (H = {}));
			const W = Object(r.a)(S, _, p.b, (e, t, s) => {
					if (s) return H.INTRO;
					const r = e && t[e];
					if (!r) return H.UNAVAILABLE;
					const n = r.stream.state;
					return n === c.a.IS_LIVE || n === c.a.DISCONNECTED ? H.LIVE : n === c.a.ENDED && r.stream.vod_accessible ? H.VOD : H.UNAVAILABLE
				}),
				K = Object(r.a)(U, W, p.b, l.b, l.o, (e, t, s, r, n) => s ? r : e ? t === H.LIVE || t === H.VOD ? e.stream.hls_url : n : void 0),
				G = Object(r.a)(U, W, M, (e, t, s) => e ? t === H.LIVE ? e.broadcast_time : t === H.VOD && s < e.broadcast_time ? s : 0 : 0),
				J = (e, t) => {
					const s = h(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				c = Object(r.a)(o, i.n, (e, t) => t && !e.isIntroFinished),
				a = Object(r.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + n.a > Date.now()
		},
		"./src/reddit/selectors/live.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return n
			}));
			const r = e => e.live.featured,
				n = e => e.live.announcements
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage.902ef69a60b396210427.js.map