// https://www.redditstatic.com/desktop2x/Frontpage.57798c488e55fc50c730.js
// Retrieved at 10/19/2020, 12:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage"], {
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/LRUCache/index.ts");
			class i {
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
						o = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !s.includes(e)), this.listenerMap[e].length - o === n
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
			var c = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/async.tsx"),
				d = s("./src/reddit/constants/page.ts");
			const l = new o.a(50),
				u = e => {
					const {
						numInstance: t,
						layout: s,
						listingKey: r,
						listingPosition: o
					} = e, u = "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(r);
					let m = l.get(u);
					if (m) return m;
					const p = new i;
					return m = {
						estHeight: c.d,
						id: "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(r),
						trackOnEnteredViewport() {
							p.publish(c.b)
						},
						render: () => n.a.createElement(a.a, {
							listingPosition: o,
							numInstance: t,
							listingKey: r,
							listingName: d.b,
							pubsub: p
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
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				c = s.n(i);
			class a extends n.a.Component {
				render() {
					return n.a.createElement("div", {
						className: Object(o.a)(c.a.heroContainer, this.props.className)
					}, n.a.createElement("div", {
						className: Object(o.a)(c.a.header, this.props.headerClassName)
					}, this.props.header), n.a.createElement("div", {
						className: Object(o.a)(this.props.hidePadding ? c.a.bodyHidePadding : c.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = a
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/upperFirst.js"),
				o = s.n(n),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				a = s("./src/config.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/components/PostList/Placeholder.tsx"),
				b = s("./src/reddit/components/EmptySubreddit.m.less"),
				h = s.n(b),
				y = s("./src/lib/lessComponent.tsx");
			const g = y.a.div("PrimaryText", h.a),
				f = y.a.div("SecondaryText", h.a),
				j = y.a.div("MainContentWrapper", h.a),
				v = y.a.div("MainContent", h.a),
				x = y.a.wrapped(p.a, "BackgroundPlaceholder", h.a),
				O = y.a.wrapped(m.k, "SubmitLink", h.a),
				_ = y.a.img("SnooImg", h.a),
				P = y.a.div("EmptyHomepage", h.a),
				N = e => {
					switch (e) {
						case d.O.RISING:
							return r.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.O.TOP:
						case d.O.CONTROVERSIAL:
							return null;
						default:
							return r.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				E = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const n = N(s);
					return c.a.createElement(v, null, c.a.createElement(g, null, (e => {
						switch (e) {
							case d.O.RISING:
								return r.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.O.TOP:
							case d.O.CONTROVERSIAL:
								return r.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [r.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return r.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(s)), t && !Object(l.a)(t) && !!n && c.a.createElement(c.a.Fragment, null, c.a.createElement(f, null, N(s)), c.a.createElement(O, {
						to: "/r/".concat(t, "/submit")
					}, r.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				k = () => c.a.createElement(v, null, c.a.createElement(_, {
					src: "".concat(a.a.assetPath, "/img/snoo_discovery@1x.png")
				}), c.a.createElement(g, null, r.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), c.a.createElement(O, {
					to: "/r/popular"
				}, r.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = y.a.wrapped(e => c.a.createElement(P, null, c.a.createElement(x, {
				isLoading: !1,
				layout: u.g.Classic
			}), c.a.createElement(j, null, e.subreddit ? c.a.createElement(E, e) : c.a.createElement(k, null))), "Component", h.a)
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
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
					const e = Object(i.d)(c.a, (e, t) => e && t && e[0].id === t[0].id || !1),
						t = Object(i.d)(c.b);
					return t ? o.a.createElement(d, {
						featuredLiveThread: t
					}) : e && e.length ? o.a.createElement(a, {
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
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/PostList/index.tsx"),
				n = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(r.a)
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
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: i,
					post: a,
					redditStyle: m,
					theme: p
				} = e, b = u(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(c.c)(r, e),
					onClick: i
				}, b), t)
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
				o = s("./src/lib/LRUCache/index.ts"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				l = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				u = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = s.n(b),
				y = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				g = s.n(y);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = e => {
				let {
					className: t
				} = e;
				const s = Object(c.d)(p.b) ? g.a.loading : g.a.noise;
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
			const x = Object(i.a)({
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
				getComponent: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("RpanListingUnit~reddit-components-MediumPost"), s.e("RpanListingUnit")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var O = e => n.a.createElement(x, e),
				_ = s("./src/reddit/helpers/trackers/rpan.ts");
			const P = e => e === m.g.Classic ? 88 : e === m.g.Compact ? 42 : 340,
				N = new o.a(20),
				E = e => {
					const t = "rpan-".concat(e.layout, "-").concat(e.listingKey),
						s = N.get(t);
					if (s) return s;
					const r = k(e.desiredIndex, e.children),
						o = {
							child: {
								id: t,
								estHeight: P(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(_.z)()),
								render: t => {
									let {
										className: s
									} = t;
									return n.a.createElement(O, {
										className: s,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: r
						};
					return N.set(t, o), o
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
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7"
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
				o = s.n(n);
			t.a = r.a.div("header", o.a)
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
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
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
					className: Object(o.a)(a.a.container, d, t)
				}, n.a.createElement(i.a, {
					className: a.a.layout,
					bodyClassName: Object(o.a)(a.a.layoutBody, d, r),
					header: e.header,
					headerClassName: Object(o.a)(a.a.layoutHeader, d)
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
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				c = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = s.n(d);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = n.a.createElement(i.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(a.a)({
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
				className: Object(o.a)(l.a.desc, l.a.one, p)
			}), n.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.two, p)
			}), n.a.createElement("div", {
				className: Object(o.a)(l.a.icon, p)
			}), n.a.createElement("div", {
				className: Object(o.a)(l.a.name, p)
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
				return C
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/constants/elementClassNames.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/hooks/useButtons2020.ts"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				p = s.n(m),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const f = h.a.button("IconButton", p.a),
				j = h.a.wrapped(l.a, "SubscribeIcon", p.a),
				v = h.a.wrapped(d.a, "UnsubscribeIcon", p.a),
				x = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = g(e, ["border", "small"]);
					return o.a.createElement(f, r, o.a.createElement(j, {
						className: Object(b.a)(r.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", p.a),
				O = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = g(e, ["border", "small"]);
					return t ? o.a.createElement(c.i, y({}, r, {
						className: Object(b.a)(r.className, {
							[p.a.isSmall]: s
						})
					})) : o.a.createElement(c.o, y({}, r, {
						className: Object(b.a)(r.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", p.a),
				_ = e => {
					var {
						icon: t,
						border: s,
						small: r
					} = e, n = g(e, ["icon", "border", "small"]);
					const i = Object(a.a)();
					return t ? o.a.createElement(x, y({}, n, {
						border: s,
						small: r,
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: r
						})
					})) : i ? o.a.createElement(c.q, y({}, n, {
						priority: s ? c.b.Primary : c.b.Tertiary,
						className: Object(b.a)(n.className, p.a.is2020),
						size: r ? c.c.S : c.c.M
					})) : o.a.createElement(O, y({}, n, {
						border: s,
						small: r,
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: r
						})
					}))
				},
				P = h.a.wrapped(e => {
					var {
						border: t,
						small: s,
						type: r
					} = e, n = g(e, ["border", "small", "type"]);
					return o.a.createElement(f, n, o.a.createElement(v, {
						className: Object(b.a)(i.n, n.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				N = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: p.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: p.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				E = h.a.wrapped(e => {
					var {
						border: t,
						small: s,
						buttonType: r
					} = e, n = g(e, ["border", "small", "buttonType"]);
					const i = N(r),
						a = Object(b.a)(n.className, {
							[p.a.isSmall]: s
						});
					return t ? o.a.createElement(c.l, y({}, n, {
						className: a
					}), i) : o.a.createElement(c.o, y({}, n, {
						className: a
					}), i)
				}, "UnsubscribeButton", p.a),
				k = e => {
					var {
						buttonType: t,
						border: s,
						small: r,
						icon: n
					} = e, i = g(e, ["buttonType", "border", "small", "icon"]);
					const d = Object(a.a)();
					return n ? o.a.createElement(P, y({}, i, {
						border: s,
						small: r,
						buttonType: t,
						className: Object(b.a)(i.className, {
							[p.a.isSmall]: r
						})
					})) : d ? o.a.createElement(c.q, y({}, i, {
						priority: s ? c.b.Secondary : c.b.Tertiary,
						className: Object(b.a)(i.className, p.a.is2020),
						size: r ? c.c.S : c.c.M,
						text: N(t)
					})) : o.a.createElement(E, y({}, i, {
						border: s,
						small: r,
						buttonType: t,
						className: Object(b.a)(i.className, {
							[p.a.isSmall]: r
						})
					}))
				};
			class C extends o.a.Component {
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
						icon: s = !1,
						id: r,
						small: n = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: n
					};
					return this.props.userIsSubscriber ? o.a.createElement(k, y({}, i, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(_, y({}, i, {
						id: r
					}), this.props.children, Object(u.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js");
			const n = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
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
				i = e => {
					let {
						type: t,
						key: s
					} = e;
					return o[n({
						type: t
					})][s]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				n = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(r.c)(o.a))
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
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/TabBadger/Loader.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/posts.ts");
			const u = Object(i.c)({
					postCount: l.S,
					previousPageIsOverlay: d.p,
					tabBadged: e => e.tabBadged
				}),
				m = Object(o.b)(u);
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
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "b", (function() {
				return E
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				c = s("./src/reddit/actions/focusedVerticals/index.ts"),
				a = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				l = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/components/PostList/Placeholder.tsx"),
				y = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/selectors/experiments/survey.ts"),
				f = s("./src/reddit/selectors/listings.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/tracking.ts");

			function O() {
				return Object(m.t)({
					currentProfileName: m.h,
					isCommentPermalink: m.v,
					isCommentsPage: m.w,
					isFrontpage: m.y,
					isProfilePostListing: m.I,
					isTopicPage: m.M,
					pageLayer: e => e
				})
			}
			const _ = O(),
				P = {
					apiError: f.c,
					apiPending: f.d,
					measureScrollFPS: y.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.N)(e, t),
					loadMore: f.g,
					postsById: j.Y,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: r,
							inSubredditOrProfile: n
						} = t;
						return Object(j.K)(e, s, r, n)
					}),
					subredditsById: v.Z,
					viewportDataLoaded: x.a,
					pageReferrer: m.Q,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: g.b
				},
				N = Object(n.c)(P),
				E = (e, t) => {
					let {
						isFrontpage: s
					} = t;
					return {
						onBottomViewed: (t, s) => e(d.c(t, s)),
						adBrandSafetyStatusReceived: t => {
							e(i.d({
								isViewSafe: t
							}))
						},
						openPost: t => {
							s && e(Object(c.a)({
								lastLoadedEnv: "server"
							})), e(a.C(t))
						},
						fireAdPixelsOfType: (t, s) => {
							e(a.t(t, s))
						},
						trackOnPostEnteredViewport: (t, s, r) => {
							e(a.F(t, r))
						},
						trackOnPostExitedViewport: (t, s, r, n) => {
							e(a.G(t, r, n))
						},
						surveyTriggerScrollCounted: () => e(Object(l.b)())
					}
				},
				k = Object(r.b)(N, E, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					postClickEvent: (e, t, r) => Object(b.f)(e, t, r, s.listingKey, s.hostPostId, s.listingBelowVariant),
					postComponentForLayout: e => Object(p.b)(Object.assign({}, e))
				}));
			t.a = e => Object(u.c)(_(k(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(n.c)({
				userIsSubscriber: i.fb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(o.d([s], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([s], !1))
				}
			})
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "d", (function() {
				return g
			}));
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				c = s("./src/reddit/models/Theme/index.ts"),
				a = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(c.g)(Object(a.a)(e).post, Object(a.a)(e).backgroundImage, Object(a.a)(e).backgroundImagePosition),
				p = (e, t) => {
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
				b = e => Object(r.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				y = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(o.a)(Object(n.a)(e), i.a.actionIcon, i.b.actionIcon);
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
			})), s.d(t, "z", (function() {
				return l
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "v", (function() {
				return p
			})), s.d(t, "t", (function() {
				return b
			})), s.d(t, "w", (function() {
				return h
			})), s.d(t, "u", (function() {
				return y
			})), s.d(t, "m", (function() {
				return g
			})), s.d(t, "n", (function() {
				return f
			})), s.d(t, "k", (function() {
				return j
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "j", (function() {
				return x
			})), s.d(t, "s", (function() {
				return O
			})), s.d(t, "o", (function() {
				return _
			})), s.d(t, "r", (function() {
				return P
			})), s.d(t, "y", (function() {
				return N
			})), s.d(t, "p", (function() {
				return E
			})), s.d(t, "b", (function() {
				return k
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "q", (function() {
				return S
			})), s.d(t, "x", (function() {
				return I
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "h", (function() {
				return D
			})), s.d(t, "i", (function() {
				return A
			}));
			var r, n = s("./src/reddit/constants/chat.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(r || (r = {}));
			const c = (e, t) => {
					if (t) {
						const s = i.media(e, t.post.id),
							r = i.post(e, t.post.id),
							n = i.subreddit(e);
						if (t.post.authorInfo && r && (r.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const r = Object(o.j)(e, {
								streamIdFromPath: t.post.id
							});
							r === o.a.LIVE ? s.type = "stream_live" : r === o.a.VOD ? s.type = "stream_vod" : r === o.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: r,
							media: s,
							subreddit: n
						}
					}
					return {
						subreddit: i.subreddit(e)
					}
				},
				a = (e, t, s) => {
					if (!t || !s) return;
					const r = Object(o.j)(e, {
							streamIdFromPath: t.post.id
						}),
						i = t.chat_disabled || s.chatState === n.f.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: r === o.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: i ? n.f.None : n.f.Compact,
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
					actionInfo: i.actionInfo(s, {
						position: t || 0
					})
				}),
				p = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: a(s, e, t)
				}, d(s)), e && Object.assign({}, c(s, e))),
				b = (e, t) => s => Object.assign(Object.assign({
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
				g = (e, t, s) => r => Object.assign(Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share_video",
					playback: a(r, e, t)
				}, d(r)), c(r, e)), {
					actionInfo: i.actionInfo(r, {
						referralId: s
					})
				}),
				f = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: a(s, e, t)
				}, d(s)), c(s, e)),
				j = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: a(s, e, t)
				}, d(s)), c(s, e)),
				v = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: a(s, e, t)
				}, d(s)), c(s, e)),
				x = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: a(s, e, t)
				}, c(s, e)),
				O = e => t => {
					const s = Object(o.l)(t, e);
					return Object.assign({
						source: "stream_chat",
						action: "click",
						noun: "send_chat"
					}, c(t, s))
				},
				_ = (e, t, s) => r => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: a(r, t, s)
				}, c(r, t)),
				P = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: a(s, e, t)
				}, d(s)),
				N = e => t => Object.assign({
					source: "post",
					action: "view",
					noun: "post",
					profile: i.profile(t),
					screen: i.screen(t)
				}, c(t, e)),
				E = e => e => {
					const t = c(e);
					return Object.assign({
						source: "post",
						action: "consume",
						noun: "post",
						profile: i.profile(e),
						screen: i.screen(e)
					}, t)
				},
				k = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: a(s, e, t)
				}, c(s, e)),
				C = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: a(s, e, t)
				}, c(s, e)),
				w = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: a(s, e, t)
				}, c(s, e)),
				S = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: a(s, e, t)
				}, c(s, e)),
				I = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: a(s, e, t)
				}, c(s, e)),
				L = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: a(s, e, t)
				}, c(s, e)),
				D = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: a(s, e, t)
				}, c(s, e)), d(s)),
				A = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: a(s, e, t)
				}, c(s, e)), d(s))
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, s) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Gift/index.m.less"),
				c = s.n(i);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(o.b)("gift"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(o.a, null, e.desc)), "GiftIcon", c.a);
			t.a = a
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
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
				o = s("./node_modules/core-js/modules/es6.array.sort.js"),
				i = s.n(o),
				c = s("./node_modules/core-js/modules/es6.regexp.search.js"),
				a = s.n(c),
				d = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/lodash/fromPairs.js"),
				u = s.n(l),
				m = s("./node_modules/react/index.js"),
				p = s.n(m),
				b = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				y = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/extractQueryParams/index.ts"),
				f = s("./src/lib/fastdom/index.ts"),
				j = s("./src/lib/makeListingKey/index.ts"),
				v = s("./src/lib/performanceTimings/index.tsx"),
				x = s("./src/reddit/actions/frontpage.ts"),
				O = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx"),
				_ = s("./src/reddit/components/EmptySubreddit.tsx"),
				P = s("./src/reddit/components/FeaturedLiveEntrypoint/index.tsx"),
				N = s("./src/reddit/components/FrontpageSidebar/index.tsx"),
				E = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				k = s("./src/reddit/components/InFeedPostCreation/async.tsx"),
				C = s("./src/reddit/components/JumpToContent/index.tsx"),
				w = s("./src/reddit/components/ListingPostList/index.tsx"),
				S = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				I = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				L = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				D = s("./src/reddit/components/TabBadger/index.tsx"),
				A = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/constants/parameters.ts"),
				U = s("./src/reddit/constants/postLayout.ts"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				V = s("./src/reddit/helpers/trackers/screenview.ts"),
				R = s("./src/reddit/layout/page/Listing/index.tsx"),
				M = s("./src/reddit/selectors/experiments/trending.ts"),
				H = s("./src/reddit/selectors/experiments/uiSimplification.ts"),
				K = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				W = s("./src/reddit/selectors/frontpage.ts"),
				G = s("./src/reddit/selectors/meta.ts"),
				J = s("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				Q = s("./src/reddit/selectors/user.ts"),
				q = s("./src/lib/constants/index.ts"),
				Z = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				Y = s("./src/lib/objectSelector/index.ts"),
				z = s("./src/reddit/constants/page.ts"),
				X = s("./src/reddit/pages/Frontpage/index.m.less"),
				$ = s.n(X);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js"), se = Object(B.t)(), re = Object(h.c)({
				queryParams: Object(Y.a)((e, t) => {
					let {
						location: s
					} = t;
					return u()([...Object(g.a)(s.search)])
				}),
				sort: (e, t) => {
					let {
						match: s
					} = t;
					const r = Object(W.a)(e);
					return s.params.sort || r
				}
			}), ne = Object(h.c)({
				countryMeta: G.b,
				geopopular: Q.m
			}), oe = Object(h.c)({
				isInTrendingEntrypointExperiment: M.a,
				isLoggedIn: Q.I,
				isPopular: B.C,
				isRpanDuVisible: e => Object(J.a)(e, {
					listingName: Z.R
				}),
				rpanInjectionIndex: e => Object(J.b)(e, {
					listingName: Z.R
				}),
				layout: B.N,
				isInUISimplificationI18NExperiment: H.a
			}), ie = () => Object(h.a)(ne, re, oe, e => Object(J.a)(e, {
				listingName: Z.R
			}), e => Object(J.b)(e, {
				listingName: Z.R
			}), e => e, F.a, (e, t, s, r, n, o, i) => {
				let {
					countryMeta: c,
					geopopular: a
				} = e, {
					queryParams: d,
					sort: l
				} = t;
				const u = T.x in d && d[T.x].toUpperCase(),
					m = "string" == typeof u && u in q.Sb ? q.Sb[u] : q.Tb,
					p = Object(j.a)(z.a, l, d),
					b = c || q.w.Everywhere,
					h = a || b,
					y = T.h in d ? d[T.h].toUpperCase() : h,
					g = [];
				r && g.push(n);
				const f = Object(K.b)(o, g, {
					listingKey: p
				});
				return Object.assign({
					cardViewExperimentVariant: i,
					countrySort: y,
					listingKey: p,
					sort: l,
					timeSort: m,
					focusedVerticalPositions: f
				}, s)
			}), ce = (e, t) => ({
				onLoadMorePosts: () => e(x.d({
					sort: t.match.params.sort
				})),
				refreshFeed: () => e(x.e({
					sort: t.match.params.sort
				}))
			}), ae = Object(b.b)(ie, ce), de = Object(d.a)({
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
			}), le = e => p.a.createElement(de, ee({}, e, {
				fallback: p.a.createElement(L.a, {
					showCardView: !!e.showCardView
				})
			}));
			class ue extends p.a.Component {
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
						isInTrendingEntrypointExperiment: t,
						isLoggedIn: s,
						isPopular: r,
						isRpanDuVisible: n,
						layout: o,
						listingKey: i,
						rpanInjectionIndex: c,
						sendEvent: a,
						isInUISimplificationI18NExperiment: d
					} = this.props, l = r && !s && t && !d, u = {
						baseUrl: "",
						countrySort: this.props.countrySort,
						sort: this.props.sort,
						timeSort: this.props.timeSort
					}, b = {};
					if (o === U.g.Large && e.forEach((e, t) => {
							b[e] = Object(O.a)({
								numInstance: t,
								layout: o,
								listingKey: i,
								listingName: z.b,
								listingPosition: e
							})
						}), n) {
						const {
							child: e,
							idx: t
						} = Object(S.a)({
							children: b,
							desiredIndex: c,
							layout: o,
							listingKey: i,
							listingName: Z.R,
							sendEvent: a
						});
						b[t] = e
					}
					const h = p.a.createElement(N.default, {
						className: $.a.sidebar,
						listingKey: i,
						listingName: z.b
					});
					return p.a.createElement(R.a, {
						className: Object(y.a)($.a.Container, this.props.className),
						fitPageToContent: !0,
						trendingUnit: l && p.a.createElement(le, {
							showCardView: o === U.g.Large
						}),
						content: p.a.createElement(m.Fragment, null, l && p.a.createElement(I.a, {
							className: $.a.duHeader
						}, te._("Popular posts", null, {
							hk: "36DJb4"
						})), p.a.createElement(P.a, null), s && p.a.createElement(k.a, null), p.a.createElement(E.a, u), p.a.createElement(C.a, null), p.a.createElement(D.a, {
							listingKey: this.props.listingKey,
							shortTimer: !0,
							handlePillClick: this.props.refreshFeed
						}), p.a.createElement(w.a, {
							injectChildren: b,
							noPostsComponent: () => p.a.createElement(_.a, {
								listingName: z.b,
								sort: this.props.sort
							}),
							key: "listing",
							listingKey: i,
							listingName: z.b,
							listingViewed: (e, t) => Object(V.f)(i, this.props.sort, t, e, this.props.timeSort),
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: h
					})
				}
			}
			t.default = se(ae(Object(A.c)(ue)))
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
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				a = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(r.a)(a.a, a.d, (e, t) => {
					let {
						listingName: s
					} = t;
					const r = Object(c.ob)(e);
					if (!r) return !1;
					let a;
					if (-1 === [o.R, "r/popular"].indexOf(s)) {
						const t = s.replace(/^r\//, ""),
							n = Object(i.G)(e, t),
							o = r.subreddit[n];
						if (!o) return !1;
						a = o
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
				}, (e, t, s, r, i, c, a) => {
					if (a === n.O.AWARDED) return !1;
					if (!e) return !1;
					if (c.isPermanentlyCanceled) return !1;
					if (s) return !1;
					if (t) return !!i && i.show_discovery_unit;
					if (!c.global.viewer_enabled) return !1;
					return [o.R, "r/popular"].indexOf(r) > -1
				}),
				u = Object(r.a)(a.d, (e, t) => {
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
						const e = "home" === t ? r.home_feed_discovery_unit_index : "r/popular" === t ? r.popular_feed_discovery_unit_index : o.i;
						return "number" == typeof e ? e : o.i
					}
					return s ? s.discovery_unit_index : o.i
				})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return P
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "n", (function() {
				return C
			})), s.d(t, "i", (function() {
				return I
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "h", (function() {
				return U
			})), s.d(t, "k", (function() {
				return B
			})), s.d(t, "c", (function() {
				return F
			})), s.d(t, "f", (function() {
				return V
			})), s.d(t, "a", (function() {
				return H
			})), s.d(t, "j", (function() {
				return K
			})), s.d(t, "b", (function() {
				return W
			})), s.d(t, "e", (function() {
				return G
			})), s.d(t, "g", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				a = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				u = s("./node_modules/lodash/memoize.js");
			const m = e => e.publicAccessNetwork.listings,
				p = s.n(u)()(e => Object(n.a)(Object(r.a)(m, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var b = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const h = e => e.publicAccessNetwork.models,
				y = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				j = e => e.publicAccessNetwork.history.visitOrder,
				v = e => e.publicAccessNetwork.hlsStreams,
				x = Object(r.a)(v, e => e.ended),
				O = Object(r.a)(v, e => e.removed),
				_ = Object(r.a)(h, x, O, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = R(r, c.a.ENDED) ? c.a.ENDED : r,
							o = s.stream.vod_accessible;
						return n === r && !0 === o ? e : Object.assign(Object.assign({}, e), {
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
							o = s.stream.vod_accessible;
						return n === r && !1 === o ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, s), {
								stream: Object.assign(Object.assign({}, s.stream), {
									state: n,
									vod_accessible: !1
								})
							})
						})
					}, r)
				}),
				P = (e, t) => {
					return _(e)[Object(i.h)(t)]
				},
				N = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => p(t.listingName)(e, t), _, y, a.h, d.d, (e, t, s, r, n, a) => {
					if (a) {
						const o = [];
						if (e) {
							const t = Object(i.h)(e);
							s[t] && o.push(t)
						}
						const a = o.concat(t),
							d = [...new Set(a)],
							l = new Set([...r, ...n]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== c.a.KILLED && t.stream.state !== c.a.PURGED
						})
					}
					const d = new Set([...r, ...n]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== o.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== c.a.KILLED && e.stream.state !== c.a.PURGED).map(e => e.post.id)
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
					return N(e, {
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
				S = Object(r.a)((e, t) => {
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
						o = n.find(e => e.stream.state === c.a.IS_LIVE);
					if (o) return o.post.id;
					const i = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				I = Object(n.a)(Object(r.a)(S, _, (e, t) => e ? t[e] : void 0)),
				L = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(i.h)(s) : void 0
				}, S, y, a.h, (e, t) => {
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
				D = Object(r.a)(f, j, w, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				A = Object(r.a)(f, j, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				T = Object(n.a)(Object(r.a)(L, _, (e, t) => e ? t[e] : void 0)),
				U = Object(n.a)(Object(r.a)(D, _, (e, t) => e ? t[e] : void 0)),
				B = Object(n.a)(Object(r.a)(A, _, (e, t) => e ? t[e] : void 0)),
				F = (Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, _, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign(Object.assign({}, t[s]), {
					preloadedPreviewUrl: e[s]
				})))), Object(r.a)(L, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				V = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? P(e, s) : void 0
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
			const M = Object(r.a)(L, g, (e, t) => e && t.timestamps[e] || 0);
			var H;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(H || (H = {}));
			const K = Object(r.a)(L, _, b.b, (e, t, s) => {
					if (s) return H.INTRO;
					const r = e && t[e];
					if (!r) return H.UNAVAILABLE;
					const n = r.stream.state;
					return n === c.a.IS_LIVE || n === c.a.DISCONNECTED ? H.LIVE : n === c.a.ENDED && r.stream.vod_accessible ? H.VOD : H.UNAVAILABLE
				}),
				W = Object(r.a)(T, K, b.b, l.b, l.o, (e, t, s, r, n) => s ? r : e ? t === H.LIVE || t === H.VOD ? e.stream.hls_url : n : void 0),
				G = Object(r.a)(T, K, M, (e, t, s) => e ? t === H.LIVE ? e.broadcast_time : t === H.VOD && s < e.broadcast_time ? s : 0 : 0),
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
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				c = Object(r.a)(i, o.n, (e, t) => t && !e.isIntroFinished),
				a = Object(r.a)(i, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + n.a > Date.now()
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const i = e => {
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: o.I,
						experimentName: r.db
					});
					return !(!t || Object(r.Lc)(t))
				},
				c = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: o.I,
						experimentName: r.db
					}) === r.hb.ListingEnabled
				}
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage.57798c488e55fc50c730.js.map