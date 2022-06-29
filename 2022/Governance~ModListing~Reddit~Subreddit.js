// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.d9bcb4f5c98880fc4784.js
// Retrieved at 6/29/2022, 9:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~ModListing~Reddit~Subreddit"], {
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				c = r("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function i(e) {
				const t = t => s.a.createElement(c.b.Consumer, null, r => s.a.createElement(e, o({
					theme: r
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
		},
		"./src/realtime/GQLSubscription/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/lib/loadWithRetries/index.ts");
			const c = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(s.a)(() => Promise.all([r.e(2), r.e("vendors~ChatPost~RealtimeGQLSubscriptionAsync"), r.e("RealtimeGQLSubscriptionAsync")]).then(r.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
			});
			t.a = c
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				c = "EMBEDS__LOADABLE",
				o = Object(n.a)(s),
				i = Object(n.a)(c)
		},
		"./src/reddit/actions/pages/modListing/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "l", (function() {
				return b
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "j", (function() {
				return f
			}));
			const n = "PAGE__MOD_LISTING_PAGE_PENDING",
				s = "PAGE__MOD_LISTING_PAGE_LOADED",
				c = "PAGE__MOD_LISTING_PAGE_FAILED",
				o = "MOD_LISTING_MORE_POSTS_PENDING",
				i = "MOD_LISTING_MORE_POSTS_LOADED",
				a = "MOD_LISTING_MORE_POSTS_FAILED",
				d = "MOD_LISTING_HIDE_SUBREDDIT_SUCCESS",
				l = "MOD_LISTING_HIDE_SUBREDDIT_PENDING",
				u = "MOD_LISTING_HIDE_SUBREDDIT_FAILED",
				b = "MOD_LISTING_UNHIDE_SUBREDDIT_SUCCESS",
				m = "MOD_LISTING_UNHIDE_SUBREDDIT_PENDING",
				f = "MOD_LISTING_UNHIDE_SUBREDDIT_FAILED"
		},
		"./src/reddit/actions/postList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = (r("./src/reddit/actions/embedAndImage.ts"), r("./src/reddit/actions/video.ts"), r("./src/reddit/helpers/trackers/postList.ts"));
			r("./src/reddit/constants/postLayout.ts"), r("./src/reddit/models/Media/index.ts"), r("./src/reddit/selectors/platform.ts"), r("./src/reddit/selectors/posts.ts");
			r("./src/reddit/selectors/video.ts");
			const c = "POSTLIST__MARKED_END",
				o = "POSTLIST__UNMARKED_END",
				i = Object(n.a)(c),
				a = Object(n.a)(o),
				d = (e, t) => async (r, n) => {
					const c = n();
					e in c.listings.postOrder.fetchedTokens ? e in c.listings.postOrder.ids ? r(a({
						listingKey: e
					})) : s.l(c, e) : r(i({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			}));
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				c = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				o = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				i = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				a = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return D
			})), r.d(t, "d", (function() {
				return L
			})), r.d(t, "c", (function() {
				return R
			})), r.d(t, "a", (function() {
				return B
			})), r.d(t, "b", (function() {
				return H
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/linkMatchers/customLinks.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/emailVerificationTooltip.ts"),
				a = r("./src/reddit/actions/login.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/subscription/constants.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/constants/posts.ts"),
				m = r("./src/lib/makeApiRequest/index.ts"),
				f = r("./src/lib/omitHeaders/index.ts"),
				p = r("./src/reddit/constants/headers.ts");
			var O = r("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				I = r("./src/reddit/models/GqlTopLevelField.ts"),
				g = r("./src/reddit/models/User/index.ts");

			function _(e) {
				const t = [],
					r = [],
					n = {},
					s = {},
					{
						followedRedditorsInfo: c
					} = e.identity;
				for (const i of c.edges) {
					if (i.node.__typename !== g.c.AvailableRedditor || !i.node.profile) continue;
					const e = Object(h.a)(i.node.profile);
					n[e.id] = e;
					const {
						isFavorite: r
					} = i.node.profile;
					r && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const i of o.edges) {
					if (i.node.__typename !== I.a.Subreddit) continue;
					const e = Object(j.a)(i.node);
					s[e.id] = e;
					const {
						isFavorite: t
					} = i.node;
					t && r.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: r,
					profiles: n,
					subreddits: s
				}
			}
			var S = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/selectors/experiments/emailEnablement.ts"),
				E = r("./src/reddit/selectors/profile.ts"),
				x = r("./src/reddit/selectors/subreddit.ts"),
				N = r("./src/reddit/selectors/subscriptions.ts"),
				k = r("./src/reddit/selectors/user.ts");
			const y = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				T = Object(o.a)(l.c),
				C = Object(o.a)(l.b),
				P = Object(o.a)(l.a),
				w = Object(o.a)(l.h),
				D = (Object(o.a)(l.i), Object(o.a)(l.g), () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(C());
					const c = await Object(O.a)(n());
					if (c.ok) {
						const t = _(c.body.data);
						e(T(t))
					} else e(P({
						error: c.error
					}))
				}),
				U = (e, t) => t.type === b.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				L = (e, t, r) => async (o, l, m) => {
					let {
						apiContext: f
					} = m, p = e.map(e => e.type === b.a.SUBREDDIT ? {
						id: Object(x.F)(l(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(E.m)(l(), e.name),
						name: `${s.kc}${e.name}`,
						type: e.type
					});
					if (!Object(k.Q)(l())) return o(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void o(Object(a.j)());
					const h = Object(k.k)(l());
					if (h) {
						const t = p.length,
							r = e.length;
						if (p = p.filter(e => !U(h, e)), (e = e.filter(e => !U(h, e))).length !== r || p.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(u.f)(Object(u.e)(e, S.b.Error)))
						}
						if (!e.length && !p.length) return
					}
					o(w({
						identifiers: p,
						nameIdentifiers: e,
						profileModels: l().profiles.models,
						subredditModels: l().subreddits.models,
						subscriptionsCount: Object(N.b)(l()),
						userIsSubscriber: t,
						widgetId: r
					}));
					const j = await Object(O.c)(f(), {
						subredditNames: p.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (j.ok) {
						const r = 1 === e.length ? `${"subreddit"===e[0].type?c.d.subreddit:c.d.profile}${e[0].name}` : n.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [n.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							s = n.fbt._("Successfully followed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "23Snyg"
							}),
							i = n.fbt._("Successfully unfollowed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "jfC0S"
							}),
							a = n.fbt._("Successfully joined {communityname}", [n.fbt._param("communityname", r)], {
								hk: "1W9UY3"
							}),
							d = n.fbt._("Successfully left {communityname}", [n.fbt._param("communityname", r)], {
								hk: "1saMW"
							});
						o(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : i : t ? a : d
						}))
					} else {
						o(w({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(N.b)(l()),
							userIsSubscriber: !t,
							widgetId: r
						}));
						const s = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(u.f)(Object(u.e)(s, S.b.Error)))
					}
					return t && Object(v.a)(l()) && (1 === e.length && "profile" === e[0].type ? o(Object(i.c)("user_follow")) : o(Object(i.c)("join"))), j.ok
				}, A = Object(o.a)(l.f), R = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const c = r(),
						o = Object(x.M)(c, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === b.a.SUBREDDIT ? o.name : `u_${o.name}`,
						a = c.subscriptions.favoriteSubredditOrder || [],
						d = c.subscriptions.favoriteProfileOrder || [],
						l = a.indexOf(e.id),
						m = d.indexOf(e.id),
						f = -1 === l && -1 === m,
						p = c.subreddits.models,
						h = c.profiles.models,
						j = {
							type: e.type,
							name: o.name
						},
						I = () => Object(x.gb)(r(), {
							identifier: j
						});
					(I() || (await t(L([j], !0)), I())) && (t(A({
						makeFavorite: f,
						identifier: e,
						subredditModels: p,
						profileModels: h
					})), (await Object(O.b)(s(), i, f)).ok || (t(A({
						makeFavorite: !f,
						identifier: e,
						subredditModels: p,
						profileModels: h
					})), t(Object(u.f)({
						text: y(),
						kind: S.b.Error
					}))))
				}, M = Object(o.a)(l.d), B = e => async (t, r, n) => {
					let {
						apiContext: c
					} = n;
					const o = r().multireddits.models,
						i = () => {
							t(Object(u.f)({
								text: y(),
								kind: S.b.Error
							}))
						},
						a = o[e];
					if (!a) return void i();
					const d = !a.isFavorited;
					t(M({
						makeFavorite: d,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, r) => Object(m.a)(Object(f.a)(e, [p.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(c(), e, d)).ok || (t(M({
						makeFavorite: !d,
						multiredditPath: e,
						multiredditsModelsState: o
					})), i())
				}, G = Object(o.a)(l.e), H = e => async (t, r, c) => {
					let {
						apiContext: o
					} = c;
					const i = r(),
						a = i.multireddits.models;
					if (!Object(k.Q)(i)) return;
					const d = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(u.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : n.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: S.b.Error
							}))
						},
						l = a[e];
					if (!l) return void d();
					const b = !l.isFollowed;
					t(G({
						follow: b,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, r) => Object(m.a)(Object(f.a)(e, [p.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: r ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, b)).ok || (t(G({
						follow: !b,
						multiredditPath: e,
						multiredditsModelsState: a
					})), d(b))
				}
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/react/index.js");
			const n = e => new Promise((t, r) => {
				const n = new Image;
				n.onload = () => t(n), n.onerror = r, n.src = e
			})
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lottie-web/build/player/lottie.js"),
				s = r.n(n),
				c = r("./node_modules/react/index.js"),
				o = r.n(c),
				i = r("./src/reddit/components/LottieAnimation/util.ts");
			const a = o.a.memo(e => {
				const t = o.a.createRef(),
					{
						assetData: r,
						assetUrl: n,
						className: a,
						hidden: d,
						loop: l,
						useCanvasRenderer: u,
						onClick: b,
						prefersReducedAnimation: m
					} = e,
					[f, p] = Object(c.useState)(r);
				Object(c.useEffect)(() => {
					n ? Object(i.a)(n).then(p) : r && p(r)
				}, [n, r]);
				const [O, h] = Object(c.useState)(null);
				Object(c.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || O || !f) return;
					const r = s.a.loadAnimation({
						autoplay: !1,
						renderer: u ? "canvas" : "svg",
						loop: l,
						container: e,
						animationData: f
					});
					h(r)
				}, [l, t, O, f]), Object(c.useEffect)(() => {
					if (O)
						if (d) O.stop();
						else if (m) {
						const e = O.getDuration(!0);
						O.goToAndPlay(e, !0)
					} else O.goToAndPlay(0)
				}, [d, m, O]);
				const j = Object(c.useCallback)(() => {
					O && O.goToAndPlay(0)
				}, [O]);
				return o.a.createElement("div", {
					className: a,
					style: {
						display: d ? "none" : "block"
					},
					ref: t,
					onClick: b || j
				})
			});
			t.a = a
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./src/reddit/components/ImageWithFallback/index.tsx");
			const n = {};

			function s(e) {
				let t = n[e];
				return t || (t = n[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
			}
		},
		"./src/reddit/components/SEOTitle/index.m.less": function(e, t, r) {
			e.exports = {
				Title: "_eYtD2XCVieq6emjKBH3m",
				title: "_eYtD2XCVieq6emjKBH3m"
			}
		},
		"./src/reddit/components/SEOTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s, c = r("./node_modules/react/index.js"),
				o = r.n(c),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(n || (n = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(s || (s = {}));
			var d = r("./src/lib/constants/index.ts"),
				l = r("./src/reddit/helpers/postCollection.ts");
			const u = [d.Nb.COMMENTS, d.Nb.COLLECTION_COMMENTS],
				b = (e, t) => {
					if (!e) return [];
					const r = u.includes(e),
						s = e === d.Nb.COLLECTION_COMMENTS || t && Object(l.a)(t),
						c = d.V.has(e),
						o = d.Cb.has(e),
						i = e === d.Nb.SUBREDDIT,
						a = e === d.Nb.TOPIC;
					let b, m, f;
					return c && !i || o ? b = n.HeaderSelector : s ? b = n.Collection : r ? b = n.PostComments : a && (b = n.TopicHeader), (c || o || s || r) && (m = n.Widget), (c || r) && (f = n.PostItem), [b, m, f]
				};
			var m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/selectors/platform.ts"),
				p = r("./src/reddit/components/SEOTitle/index.m.less"),
				O = r.n(p);
			const h = e => {
					let {
						level: t,
						children: r
					} = e;
					const n = `h${t}`;
					return o.a.createElement(n, {
						className: O.a.Title
					}, r)
				},
				j = Object(m.u)(),
				I = Object(i.b)(() => Object(a.a)((e, t) => {
					let {
						pageLayer: r
					} = t;
					return r && Object(f.n)(e, {
						page: r
					})
				}, (e, t) => {
					let {
						pageLayer: r
					} = t;
					return r && r.meta && r.meta.name
				}, (e, t) => {
					let {
						type: r
					} = t;
					return r
				}, (e, t, r) => ({
					level: b(t, e).indexOf(r) + 1 || void 0
				})));
			class g extends o.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? o.a.createElement(h, {
						level: t
					}, e) : o.a.createElement(o.a.Fragment, null, e)
				}
			}
			t.b = j(I(g))
		},
		"./src/reddit/components/SubredditIcon/index.m.less": function(e, t, r) {
			e.exports = {
				Image: "_34CfAAowTqdbNDYXz5tBTW",
				image: "_34CfAAowTqdbNDYXz5tBTW",
				UserIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				userIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				blur: "_2P3jpibqK9Q2k2UJYzBNIy",
				PlanetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				planetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				BackupImage: "RK004G8fbNOkGdNLEzm67",
				backupImage: "RK004G8fbNOkGdNLEzm67",
				iconContainer: "_7nyhK_sDI_8i22XNdcMzb",
				editableIcon: "_1AxWRIyg1lV9-r_CmqYj0o",
				flexContainer: "-Mpi2pdgifDBOdpUYX2vh",
				clickableUploadText: "_3H6u2CWhsluIPVF14GpEaA",
				inTopBar: "_1UpdjN7u66BU606z97t4HS",
				emptyUploadButton: "ndkYE2hc8Y-V3NHpSYvxA",
				transition: "_1iA7YdCRjbU9Rd_2VNGvsw",
				emptyEditableIcon: "_1h9JeZaSDxkh67Ns3QVUP2",
				emptyPlusButton: "Dh1qxsy_tIctL9f4LEzv9",
				imageUploader: "JBITiVY1zX1mMDq-sHkru",
				loadingIcon: "_3Dk8QRKhQImYqds2lSF6G4",
				loadingIconInTopBar: "_1U3KLnHX2TdXL5lNrrv4EW",
				emptyEditableIconInTopBar: "_3-i_fdY8zqHIo3CjuVzTYE",
				defaultCommunityIcon: "_1xvdfUtOPDANqHjxzxKX5b",
				mNightmode: "_1TI6C7sqGL9TRdsq1jRks"
			}
		},
		"./src/reddit/components/SubredditIcon/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return v
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./node_modules/react/index.js"),
				o = r.n(c),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/components/UserIcon/index.tsx"),
				u = r("./src/reddit/constants/colors.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				f = r("./src/reddit/icons/fonts/index.tsx"),
				p = r("./src/reddit/models/Subreddit/index.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/components/SubredditIcon/index.m.less"),
				j = r.n(h);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = d.a.wrapped(l.a, "UserIcon", j.a),
				_ = d.a.img("Image", j.a),
				S = e => {
					let {
						iconColor: t,
						...r
					} = e;
					return o.a.createElement(_, I({
						style: {
							backgroundColor: t || ""
						}
					}, r))
				},
				v = d.a.div("BackupImage", j.a),
				E = Object(b.u)();
			t.b = E(e => {
				var t;
				const r = Object(i.e)(O.db);
				let c, d, l;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: r
					} = Object(m.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(p.i)(e.subredditOrProfile) ? l = o.a.createElement(g, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (c = t, d = r)
				} else c = e.shouldHideNsfwIcon ? `${n.a.assetPath}/img/avatar_over18.png` : e.iconUrl, d = e.primaryColor || u.a.alienblue;
				return c ? l = o.a.createElement(S, {
					alt: s.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: Object(a.a)(e.className, {
						[j.a.blur]: e.shouldBlurSubredditIcon
					}),
					iconColor: d,
					role: "presentation",
					src: c
				}) : l || (l = o.a.createElement(f.a, {
					name: "community",
					isFilled: !r,
					className: Object(a.a)(j.a.defaultCommunityIcon, e.className, {
						[j.a.mNightmode]: r,
						[j.a.blur]: e.shouldBlurSubredditIcon
					}),
					style: r ? {
						backgroundColor: e.redditStyle ? u.a.alienblue : d
					} : {
						color: e.redditStyle ? u.a.alienblue : d
					}
				})), e.linkTo ? o.a.createElement("a", I({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					href: e.linkTo
				}), l) : o.a.createElement(o.a.Fragment, null, l)
			})
		},
		"./src/reddit/components/UserIcon/PresenceDot.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				c = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				i = r("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				a = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				d = r.n(a);
			t.default = e => {
				const {
					showPresence: t,
					onceInViewport: r
				} = e, a = Object(n.useRef)(null), l = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && r && r()
					})
				}, [r]);
				return Object(o.a)(a, l), s.a.createElement(i.a, {
					ref: a,
					className: Object(c.a)(d.a.presenceDot, {
						[d.a.isLit]: t
					}),
					isHighlighted: e.isHighlighted,
					outlineClassName: e.outlineClassName
				})
			}
		},
		"./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				c = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				a = r.n(i);
			t.a = function(e) {
				let {
					backgroundClassName: t,
					className: r,
					headshot: s,
					hasNftBorder: i
				} = e;
				return c.a.createElement("div", {
					className: Object(o.a)(a.a.snoovatarWrapper, r, {
						[a.a.hasNftBorder]: Boolean(i)
					})
				}, c.a.createElement("div", {
					className: Object(o.a)(a.a.snoovatarBackground, t)
				}), c.a.createElement("div", {
					className: a.a.snoovatarHeadshotContainer
				}, c.a.createElement("img", {
					alt: n.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: a.a.snoovatarHeadshot,
					src: s
				})))
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.m.less": function(e, t, r) {
			e.exports = {
				currentUserIconWrapper: "efdkOLo3oigH_95whTYCp",
				userIconWrapper: "_2p14AQvJBvTrEEa4csiW9v",
				isProfileIcon: "_1lxVpLf3223Gve3gRhbG-R",
				DefaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				defaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				UserIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				userIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				mNightmode: "_2aVSEFJsIE0M-4uRE-U24H",
				nftAnimation: "_3fhlcUDP9SJN47QMfuzW_j",
				nftBackground: "_3ppYbU2ZS369JSNSb8585I",
				nftBorder: "_1AX7t-EP7R4ZoVC41DG-Jx",
				snoovatarWrapper: "_1cyAeeYDGrx7MPL_jRwKZ",
				snoovatarBackground: "_2_QqG5dG916znjlVV8ZCbw",
				hasNftBorder: "_3Bn5QwbgKslkdt4UwkP9r9",
				snoovatarHeadshotContainer: "_1XJXnCAngvZLEeLpB3oa4L",
				snoovatarHeadshot: "ScrrUjzznpAqm92uwgnvO",
				presenceDot: "_2dn5Ncenn0BSD4tCSmxQhA",
				isLit: "GpWjjkZl5_kV4yZYWBaT2",
				hasHeadShotWrapper: "_1TENjLYSaj4L4uJMZa3DRe"
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "c", (function() {
				return b
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./node_modules/react/index.js"),
				o = r.n(c),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				d = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				l = r.n(d);
			const u = `${n.a.assetPath}/img/avatar_over18_square.png`,
				b = e => !e || e.includes("avatar_default_");
			t.b = e => {
				const {
					className: t,
					iconUrl: r,
					isCurrentUser: n,
					isNightMode: c,
					isNSFW: d,
					nsfwIconUrl: m,
					shouldHideNSFW: f
				} = e;
				if (n && b(r) || !n && !r) return o.a.createElement(a.a, {
					className: Object(i.a)(l.a.DefaultUserIcon, t, {
						[l.a.mNightmode]: c
					})
				});
				const p = !n && d && f ? m || u : r;
				return o.a.createElement("img", {
					alt: s.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(i.a)(l.a.UserIcon, t),
					src: p
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				c = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/realtime/GQLSubscription/async.tsx"),
				d = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				u = r("./src/reddit/models/User/index.ts"),
				b = r("./src/config.ts"),
				m = r("./src/reddit/components/LottieAnimation/index.tsx");
			var f = e => {
					let {
						className: t
					} = e;
					return c.a.createElement("svg", {
						className: t,
						fill: "none",
						viewBox: "0 0 32 32",
						xmlns: "http://www.w3.org/2000/svg"
					}, c.a.createElement("radialGradient", {
						id: "a",
						cx: "0",
						cy: "0",
						gradientTransform: "matrix(20.06268 6.0999 -3097.55815 10187.91225 -3.1 11.6)",
						gradientUnits: "userSpaceOnUse",
						r: "1"
					}, c.a.createElement("stop", {
						offset: "0",
						stopColor: "#1185b5"
					}), c.a.createElement("stop", {
						offset: ".29",
						stopColor: "#d7f7ff"
					}), c.a.createElement("stop", {
						offset: ".53",
						stopColor: "#5ef6d8"
					}), c.a.createElement("stop", {
						offset: ".84",
						stopColor: "#5ef6d8"
					}), c.a.createElement("stop", {
						offset: ".87",
						stopColor: "#1990b9"
					}), c.a.createElement("stop", {
						offset: "1",
						stopColor: "#3f9fc6"
					})), c.a.createElement("path", {
						d: "M13.77 1.1c.76-.41 1.7-.41 2.46 0L28 7.58c.75.42 1.2 1.17 1.2 1.96v12.94c0 .79-.45 1.54-1.2 1.95L16.23 30.9c-.76.42-1.7.42-2.46 0L2 24.42a2.25 2.25 0 0 1-1.2-1.95V9.53C.8 8.74 1.24 8 2 7.57z",
						stroke: "url(#a)",
						strokeLinejoin: "round",
						strokeWidth: "1.59"
					}))
				},
				p = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				O = r.n(p);
			var h = e => {
					let {
						iconUrl: t
					} = e;
					return Object(d.c)(t) ? c.a.createElement(m.a, {
						className: O.a.nftAnimation,
						assetUrl: `${b.a.assetPath}/img/snoovatars/comment-animations/nft_comment_animation.json`,
						loop: !0
					}) : c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
						className: O.a.nftBackground
					}), c.a.createElement(f, {
						className: O.a.nftBorder
					}))
				},
				j = r("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				I = r("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				g = r("./src/reddit/components/UserIcon/UserIcon.tsx"),
				_ = r("./src/reddit/selectors/user.ts"),
				S = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = () => {},
				x = Object(i.c)({
					currentUser: _.k,
					isNightMode: _.db,
					shouldHideNSFW: _.F,
					user: _.Ab,
					isProfileAvatarChangeFixEnabled: S.a
				}),
				N = Object(o.b)(x);
			t.a = N(e => {
				const {
					authorId: t,
					collapsed: r,
					currentUser: o,
					iconUrl: i,
					isCommentAuthorBlocked: b,
					isHighlighted: m,
					isNft: f,
					isNSFW: p,
					shouldUseOnlineOverride: _,
					isOnlineOverrideValue: S,
					isOnlineStatusLoadTest: x,
					isProfileIcon: N,
					omitResponsivePresenceWrapper: k,
					onPresenceIndicatorInViewport: y,
					shouldShowPresenceIndicator: T,
					user: C,
					userName: P,
					isProfileAvatarChangeFixEnabled: w,
					...D
				} = e, U = !!o && Object(u.e)(o) === P, L = U ? o : C, A = L && L.accountIcon || i, R = C ? C.isNSFW : p, M = Object(d.a)(A) && !b, B = M ? c.a.createElement(I.a, {
					headshot: A,
					className: e.className,
					hasNftBorder: f && Object(d.d)(i)
				}) : c.a.createElement(g.b, v({}, D, {
					iconUrl: b && r ? "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png" : A,
					isCurrentUser: U,
					isNSFW: R
				})), [G, H] = Object(s.useState)(!1), F = Object(s.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "ONLINE_STATUS_INDICATOR",
							userID: t
						}
					}
				}), [t]), W = Object(s.useCallback)(e => {
					const {
						isOnline: t
					} = e.subscribe.data;
					H(t)
				}, []), q = Object(s.useRef)(null), [K, z] = Object(s.useState)(!1), V = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: r
						} = e, n = 1 !== r;
						t ? z(!0) : n && z(!1)
					})
				}, []), Y = Object(s.useRef)({
					rootMargin: "750px 0px 1000px 0px"
				});
				return Object(l.a)(q, V, Y.current), k ? B : c.a.createElement("div", {
					className: Object(n.a)(O.a.userIconWrapper, {
						[O.a.hasHeadShotWrapper]: M,
						[O.a.isProfileIcon]: N && w
					}),
					ref: q
				}, f && c.a.createElement(h, {
					iconUrl: i
				}), B, T && (G || _ && S) && c.a.createElement(j.default, {
					showPresence: !0,
					isHighlighted: m,
					onceInViewport: y
				}), (T || x) && !_ && K && c.a.createElement(a.a, {
					variables: F,
					onData: T ? W : E,
					queryKey: "isUserOnline"
				}))
			})
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "k", (function() {
				return i
			})), r.d(t, "m", (function() {
				return a
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "n", (function() {
				return l
			})), r.d(t, "j", (function() {
				return u
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "i", (function() {
				return O
			}));
			const n = "DraftEditor-contentwrapper",
				s = "public-DraftStyleDefault-block",
				c = "data-offset-key",
				o = "hovered",
				i = "scrollerItem",
				a = "threadline",
				d = "header-user-dropdown",
				l = "voteButton",
				u = "RichTextJSON-root",
				b = "ImageBox-image",
				m = "content-type-link",
				f = "styled-outbound-link",
				p = "ListingLayout-backgroundContainer",
				O = "ListingLayout-outerContainer"
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const o = s.a.createContext(!1);

			function i(e) {
				function t(t) {
					return s.a.createElement(o.Consumer, null, r => s.a.createElement(e, c({}, t, {
						isOverlay: r
					})))
				}
				return t.displayName = `WithOverlay(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
			})), r.d(t, "c", (function() {
				return T
			}));
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				c = r("./node_modules/query-string/index.js"),
				o = r.n(c),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				d = r("./node_modules/react-redux/es/index.js"),
				l = r("./node_modules/reselect/es/index.js"),
				u = r("./src/lib/addQueryParams/index.ts");
			var b = (e, t) => t ? Object(u.a)(e, {
				user_id: t
			}) : e;
			var m = r("./src/lib/opener/index.ts"),
				f = r("./src/lib/redditId/index.ts"),
				p = r("./src/reddit/actions/post.ts"),
				O = r("./src/reddit/constants/adEvents.ts"),
				h = r("./src/reddit/helpers/getVendorMetadata.ts"),
				j = r("./src/reddit/helpers/pixels.ts"),
				I = r("./src/reddit/helpers/trackers/ads.ts"),
				g = r("./src/reddit/hooks/useOutboundClickTracking.ts"),
				_ = r("./src/reddit/selectors/posts.ts"),
				S = r("./src/reddit/selectors/telemetry.ts"),
				v = r("./src/reddit/selectors/user.ts");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(l.a)(v.a, v.k, (e, t) => {
					let {
						isSponsored: r,
						postId: n
					} = t;
					return r && n ? Object(_.b)(e, n) : null
				}, _.G, S.d, (e, t, r, n, s) => ({
					allowClickTracking: e,
					basePixelMetadata: r,
					userId: t ? Object(f.a)(t.id) : null,
					post: n,
					pageType: s.pageType
				})),
				N = Object(d.b)(x, e => ({
					fireAdPixelsOfType: (t, r) => e(Object(p.z)(t, r)),
					recordClick: (t, r, n) => {
						const s = t.events.filter(e => {
							let {
								type: t,
								url: r
							} = e;
							return t === O.a.Click && Object(j.b)(r)
						});
						Object(j.c)(s), e(Object(p.p)(String(r), {
							postId: t.id,
							vendorMetadata: n
						}))
					}
				})),
				k = (e, t, r, n) => {
					const s = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					n && t.outboundUrl && s && (e.href = b(t.outboundUrl, r), e.href = function(e) {
						return Object(u.a)(e, {
							web_redirect: "true"
						})
					}(e.href))
				},
				y = (e, t, r) => {
					let n, s = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(r)) {
						s = Object(h.a)(e, t, O.a.Click);
						const {
							url: c,
							query: i
						} = o.a.parseUrl(r);
						n = o.a.stringifyUrl({
							url: c,
							query: {
								...i,
								...s
							}
						})
					} else n = r;
					return {
						url: n,
						metadata: s
					}
				},
				T = (e, t, r) => {
					const n = y(t, r, e.href);
					return e.href = n.url, n.metadata
				},
				C = e => {
					let {
						isSponsored: t,
						source: r
					} = e;
					return !!(t && (null == r ? void 0 : r.outboundUrl))
				},
				P = N(e => {
					const t = Object(i.useRef)(null),
						r = Object(g.a)(),
						{
							allowClickTracking: n,
							basePixelMetadata: c,
							commentId: o,
							fireAdPixelsOfType: d,
							href: l,
							isSponsored: u,
							pageType: b,
							post: f,
							postId: p,
							recordClick: h,
							source: j,
							sourceElement: _,
							userId: S
						} = e;
					let v = s()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "post", "recordClick", "commentId", "source", "sourceElement", "userId", "pageType"]);
					const x = j && j.outboundUrl && u ? j.outboundUrl : l;
					return v = {
						...v,
						href: x,
						rel: u ? m.b : m.a,
						target: m.d.BLANK
					}, !j || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: r
						} = e;
						return !(!t || !r) && (t > r + 3e5 || t < r - 36e5)
					})(j) ? a.a.createElement("a", E({}, v, {
						onClick: () => r(l, _, o, p)
					})) : a.a.createElement("a", E({}, v, {
						onMouseDown: r => {
							if (!C(e)) return !(1 !== r.button && 2 !== r.button && !r.ctrlKey) || void k(r.currentTarget, j, S, n);
							t.current = T(r.currentTarget, p, c)
						},
						onClick: () => {
							f && (C(e) && (h(f, O.a.Click, t.current), Object(I.a)(f, b)), d(f, O.a.Click), r(l, _, o, p))
						},
						onMouseLeave: e => {
							u || ((e, t) => {
								e.href = t
							})(e.currentTarget, x)
						},
						onTouchStart: e => k(e.currentTarget, j, S, n),
						"data-testid": "outbound-link"
					}))
				});
			t.b = P
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./src/redditGQL/operations/SubscribedSubreddits.json"),
				s = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(o.a)(e, n);
			const l = (e, t) => {
					let {
						subredditIds: r,
						subredditNames: n,
						subscribe: o
					} = t;
					return Object(c.a)(Object(i.a)(e, [a.a]), {
						method: s.jb.POST,
						endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: o ? "sub" : "unsub",
							sr: r && r.join(",") || void 0,
							sr_name: n && n.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				u = (e, t, r) => Object(c.a)(Object(i.a)(e, [a.a]), {
					method: s.jb.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: r ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
		},
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/polished/dist/polished.es.js"),
				s = r("./src/reddit/models/NewStructuredStyles/index.ts");
			const c = e => Object(n.b)(e) < .6;

			function o(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.a.bodyText,
					r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.b.bodyText;
				return c(e) ? r : t
			}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/helpers/localStorage/index.ts"),
				c = r("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, r) => s => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...c.n(s),
					subreddit: c.hb(s),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${r}` : `DESKTOP ${r}`,
						count: 1,
						type: n.f.SWITCH_HOUSE_AD
					}
				}),
				i = (e, t) => {
					t && (Object(s.Ab)(e.postId), Object(s.Jb)(t)), e.impressionIdStr ? Object(s.Bb)(e.impressionIdStr) : e.impressionId && Object(s.Bb)(e.impressionId)
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return N
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "q", (function() {
				return T
			})), r.d(t, "r", (function() {
				return C
			})), r.d(t, "o", (function() {
				return P
			})), r.d(t, "s", (function() {
				return w
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "l", (function() {
				return U
			})), r.d(t, "p", (function() {
				return L
			})), r.d(t, "i", (function() {
				return A
			})), r.d(t, "j", (function() {
				return R
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "b", (function() {
				return H
			})), r.d(t, "a", (function() {
				return F
			})), r.d(t, "n", (function() {
				return W
			})), r.d(t, "m", (function() {
				return q
			})), r.d(t, "t", (function() {
				return V
			})), r.d(t, "x", (function() {
				return Y
			})), r.d(t, "e", (function() {
				return Q
			})), r.d(t, "d", (function() {
				return $
			})), r.d(t, "v", (function() {
				return ee
			})), r.d(t, "u", (function() {
				return te
			})), r.d(t, "w", (function() {
				return re
			})), r.d(t, "h", (function() {
				return ne
			}));
			var n = r("./node_modules/lodash/pick.js"),
				s = r.n(n),
				c = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makePostDraftPageKey/index.ts"),
				i = r("./src/reddit/constants/parameters.ts"),
				a = r("./src/reddit/constants/tracking.ts"),
				d = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				l = r("./src/reddit/helpers/routeKey/index.ts"),
				u = r("./src/reddit/helpers/trackers/postComposer.ts"),
				b = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = r("./src/reddit/models/Comment/index.ts"),
				f = r("./src/reddit/models/Post/index.ts"),
				p = r("./src/reddit/routes/subreddit/index.ts"),
				O = r("./src/reddit/selectors/profile.ts"),
				h = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/lib/makePostCreationPageKey/index.ts"),
				I = r("./src/lib/makeSearchKey/index.ts"),
				g = r("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = r("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				S = r("./src/reddit/helpers/trackers/searchResults.ts"),
				v = r("./src/reddit/selectors/postDraft.ts"),
				E = r("./src/reddit/selectors/telemetry.ts"),
				x = r("./src/telemetry/index.ts");
			const N = (e, t, r, n, a, u) => {
					const {
						route: O
					} = e, {
						name: h
					} = O.meta;
					if (!h) return;
					const g = t.platform.currentPage;
					switch (h) {
						case c.Nb.COMMENTS: {
							const {
								partialCommentId: s,
								partialPostId: c
							} = e.match.params, o = Object(f.u)(c), i = Object(l.a)(e, t, t.posts.models[o]);
							if (!i) return;
							const a = s && Object(m.h)(s),
								{
									sortToUse: u
								} = Object(d.a)(t, o);
							Object(x.a)(D(i, o, a, r, n, u)(t));
							break
						}
						case c.Nb.INDEX:
						case c.Nb.LISTING:
						case c.Nb.MULTIREDDIT:
						case c.Nb.SUBREDDIT: {
							const s = Object(l.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: o,
								queryParams: i,
								path: a
							} = e.match, {
								sort: d = (s.sort ? s.sort : c.W.HOT)
							} = o, u = i.t, b = a === p.a;
							Object(x.a)(y({
								key: s.listingKey,
								sort: d,
								timerType: r,
								timerMillis: n,
								timeSort: u,
								isPredictionsPage: b
							})(t));
							break
						}
						case c.Nb.TOPIC: {
							const s = Object(l.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: o
							} = e.match, i = s.sort ? s.sort : c.X, {
								sort: a = i
							} = o;
							Object(x.a)(y({
								key: s.listingKey,
								sort: a,
								timerType: r,
								timerMillis: n
							})(t));
							break
						}
						case c.Nb.PROFILE_OVERVIEW: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							const {
								params: o,
								queryParams: i
							} = e.match, {
								sort: a = c.Eb
							} = o, d = i.t;
							Object(x.a)(T(s, a, r, n, d)(t));
							break
						}
						case c.Nb.PROFILE_POSTS: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							const {
								queryParams: o
							} = e.match, {
								sort: i = c.Eb,
								t: a = c.Fb
							} = o;
							Object(x.a)(C(s, i, r, n, a)(t));
							break
						}
						case c.Nb.PROFILE_COMMENTS: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							const {
								queryParams: o
							} = e.match, {
								sort: i = c.Eb,
								t: a = c.Fb
							} = o;
							Object(x.a)(P(s, i, r, n, a)(t));
							break
						}
						case c.Nb.PROFILE_PRIVATE: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							Object(x.a)(w(s)(n, r)(t));
							break
						}
						case c.Nb.FOLLOWERS:
							B(t);
							break;
						case c.Nb.PROFILE_MODERATION:
							u && L(t, !0);
							break;
						case c.Nb.SETTINGS: {
							const s = e;
							Object(x.a)(z(r, n)(t)), s.match.params.page === c.dc.Profile && Object(b.l)(t);
							break
						}
						case c.Nb.POST_CREATION:
							if (u && a) {
								const e = Object(j.a)(a);
								Object(x.a)(U(e, r, n)(t))
							}
							break;
						case c.Nb.POST_DRAFT: {
							const {
								draftId: s
							} = e.match.params, c = Object(o.a)(e.match.params);
							if (!c) return;
							G(t, c, s, r, n);
							break
						}
						case c.Nb.SUBREDDIT_WIKI:
							Object(x.a)(X(r, n)(t));
							break;
						case c.Nb.COINS:
							Object(x.a)(H(r, n)(t)), Object(x.a)(F()(t));
							break;
						case c.Nb.PREMIUM:
							Object(x.a)(W(r, n)(t)), Object(x.a)(q()(t));
							break;
						case c.Nb.APPEAL:
							Object(x.a)(K(r, n)(t));
							break;
						case c.Nb.INBOX_PAGES:
							u && M(t);
							break;
						case c.Nb.MODERATION_PAGES:
							u && A(t, !0, a ? a.subredditName : null, a ? a.profileName : null);
							break;
						case c.Nb.COLLECTION_COMMENTS:
							u && re(t, !0);
							break;
						case c.Nb.MODQUEUE_PAGES:
							u && R(t, a ? a.subredditName : null, a ? a.profileName : null);
							break;
						case c.Nb.SUBREDDIT_LEADERBOARD:
							u && Object(x.a)(Q()(t));
							break;
						case c.Nb.SEARCH_RESULTS:
							if (u) {
								const c = Object(l.e)(e);
								if (!c) return;
								Object(x.a)(ee(c, Object(I.e)(s()(g && g.queryParams || {}, i.s)), r, n, g)(t))
							}
							break;
						case c.Nb.PUBLIC_ACCESS_NETWORK:
							u && Object(x.a)(V()(t));
							break;
						case c.Nb.GEOTAGGING:
							u && Object(x.a)($()(t));
							break;
						case c.Nb.SUBREDDIT_CREATION:
							u && Object(x.a)(Y()(t));
							break;
						case c.Nb.MOD_LISTING:
							u && ne(t, !0)
					}
				},
				k = e => ({
					...E.n(e),
					userPreferences: E.qb(e)
				}),
				y = e => {
					let {
						key: t,
						sort: r,
						timerType: n,
						timerMillis: s,
						timeSort: c,
						flairTitle: o,
						isPredictionsPage: i
					} = e;
					return e => {
						const {
							api: a
						} = e.listings.postOrder, d = !a.error[t] && !a.pending[t], l = i ? {
							paneName: "predictions",
							reason: "predictions_tournament"
						} : {};
						return {
							source: "global",
							action: "view",
							noun: "screen",
							...k(e),
							actionInfo: E.d(e, {
								success: d,
								...l
							}),
							customFeed: E.l(e),
							listing: E.y(e, t, {
								sort: r,
								sortTime: c
							}),
							subreddit: E.hb(e),
							timer: E.nb(n, s),
							userSubreddit: E.rb(e),
							adblock: E.e(e),
							postFlair: {
								title: o
							},
							predictions: i ? Object(E.P)(e) : void 0
						}
					}
				},
				T = (e, t, r, n, s) => c => {
					const o = E.y(c, e);
					o && (o.sort = t, s && (o.sortTime = s));
					const {
						api: i
					} = c.listings.postOrder, a = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...k(c),
						actionInfo: E.d(c, {
							success: a
						}),
						profile: E.R(c),
						snoovatar: E.eb(c),
						subreddit: E.hb(c),
						timer: E.nb(r, n),
						userSubreddit: E.rb(c),
						adblock: E.e(c)
					}
				},
				C = (e, t, r, n, s) => c => {
					const o = E.y(c, e);
					o && (o.sort = t, s && (o.sortTime = s));
					const {
						api: i
					} = c.listings.postOrder, a = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...k(c),
						actionInfo: E.d(c, {
							success: a
						}),
						profile: E.R(c),
						subreddit: E.hb(c),
						timer: E.nb(r, n),
						userSubreddit: E.rb(c),
						adblock: E.e(c)
					}
				},
				P = (e, t, r, n, s) => c => {
					const o = E.U(c, e);
					o && (o.sort = t, s && (o.sortTime = s));
					const {
						api: i
					} = c.profileCommentsPage, a = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...k(c),
						actionInfo: E.d(c, {
							success: a
						}),
						profile: E.R(c),
						subreddit: E.hb(c),
						timer: E.nb(r, n),
						userSubreddit: E.rb(c),
						adblock: E.e(c)
					}
				},
				w = e => (t, r) => n => {
					const s = !n.profilePrivatePage.api.error[e] && !n.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...k(n),
						actionInfo: E.d(n, {
							success: s
						}),
						profile: E.R(n),
						subreddit: E.hb(n),
						timer: E.nb(r, t),
						userSubreddit: E.rb(n),
						adblock: E.e(n)
					}
				},
				D = (e, t, r, n, s, c) => o => {
					const {
						api: i
					} = o.pages.comments, a = !i.error[e] && !i.pending[e], d = {
						source: "global",
						action: "view",
						noun: "screen",
						...k(o),
						actionInfo: E.d(o, {
							success: a
						}),
						post: E.I(o, t),
						profile: E.R(o),
						subreddit: E.hb(o),
						timer: E.nb(n, s),
						userSubreddit: E.rb(o),
						adblock: E.e(o),
						postEvent: E.L(o, {
							postId: t
						}),
						postCollection: E.K(o, {
							postId: t
						}),
						listing: E.y(o, void 0, {
							sort: c
						})
					};
					return r && (d.comment = E.h(o, r)), d
				},
				U = (e, t, r) => n => {
					const s = n.creations.api.page.fetched[e],
						c = n.platform.currentPage ? n.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...k(n),
						actionInfo: E.d(n, {
							success: s
						}),
						post: c ? E.I(n, c) : void 0,
						subreddit: E.hb(n),
						timer: E.nb(t, r),
						userSubreddit: E.rb(n),
						adblock: E.e(n)
					}
				},
				L = (e, t) => {
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: E.d(e, {
							success: t
						})
					})
				},
				A = (e, t, r, n) => {
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: E.d(e, {
							success: t
						}),
						profile: E.S(e, Object(O.m)(e, n)),
						subreddit: E.ib(e, Object(h.F)(e, r)),
						userSubreddit: E.rb(e),
						adblock: E.e(e)
					})
				},
				R = (e, t, r) => {
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						profile: E.S(e, Object(O.m)(e, r)),
						subreddit: E.ib(e, Object(h.F)(e, t)),
						userSubreddit: E.rb(e),
						adblock: E.e(e)
					})
				},
				M = e => {
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: E.d(e)
					})
				},
				B = e => {
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: E.d(e)
					})
				},
				G = (e, t, r, n, s) => {
					const c = e.creations.api.page.pending[t],
						o = !e.creations.api.page.error[t] && !c && !!r,
						i = Object(v.h)(e, r);
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: E.d(e, {
							success: o
						}),
						subreddit: E.hb(e),
						timer: E.nb(n, s),
						userSubreddit: E.rb(e),
						adblock: E.e(e),
						...i ? Object(u.r)(e, i) : {}
					})
				},
				H = (e, t) => r => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(g.c)(g.a.GoldPayment),
					...k(r),
					timer: E.nb(e, t),
					adblock: E.e(r)
				}),
				F = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				W = (e, t) => r => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(g.c)(g.a.GoldPayment),
					...k(r),
					timer: E.nb(e, t),
					adblock: E.e(r)
				}),
				q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				K = (e, t) => r => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...k(r),
					timer: E.nb(e, t)
				}),
				z = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(r),
					timer: E.nb(e, t)
				}),
				V = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: E.hb(e),
					...k(e)
				}),
				Y = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				Q = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...k(e)
				}),
				X = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(r),
					customFeed: E.l(r),
					subreddit: E.hb(r),
					timer: E.nb(e, t),
					userSubreddit: E.rb(r),
					adblock: E.e(r)
				}),
				$ = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				J = {
					source: "global",
					action: a.c.VIEW,
					noun: "screen"
				},
				Z = e => !!e && {
					correlationId: Object(g.c)(g.a.SearchResults)
				},
				ee = (e, t, r, n, s, o) => i => {
					var a, d;
					let l = !0;
					if (t.type.indexOf(c.cc.Posts) > -1) {
						const {
							api: t
						} = i.listings.listingOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(c.cc.Subreddits) > -1 || t.type.indexOf(c.cc.Users) > -1) {
						const {
							api: t
						} = i.listings.postOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					const u = E.G(i, s);
					return {
						...S.g(i, t),
						...J,
						...E.n(i),
						actionInfo: E.d(i, {
							success: l,
							paneName: u
						}),
						timer: E.nb(r, n),
						search: {
							...E.ab(i, t, _.a.SERP, !0, s || void 0),
							sort: null !== (a = t.sort) && void 0 !== a ? a : c.Qb,
							range: null !== (d = t.t) && void 0 !== d ? d : c.Rb
						},
						...Z(o),
						userPreferences: E.cb(i)
					}
				},
				te = (e, t, r) => n => ({
					...E.n(n),
					...J,
					actionInfo: {
						...E.d(n),
						pageType: "search_dropdown"
					},
					search: {
						...E.ab(n, e, _.a.Typeahead, !0, t || void 0)
					},
					...Z(r),
					userPreferences: E.cb(n)
				}),
				re = (e, t) => {
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: E.d(e, {
							success: t
						})
					})
				},
				ne = (e, t) => {
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: E.d(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/socialLinks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "f", (function() {
				return u
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const c = e => {
					let {
						socialLinkType: t,
						outboundUrl: r,
						name: n,
						position: s,
						isNew: c,
						currentList: o
					} = e;
					return {
						socialLink: {
							type: t.toLowerCase(),
							url: r,
							name: n,
							position: s,
							isNew: c,
							currentList: o
						}
					}
				},
				o = e => t => ({
					...Object(s.n)(t),
					action: n.c.CLICK,
					noun: "add_social_link",
					source: e
				}),
				i = e => t => ({
					...Object(s.n)(t),
					action: n.c.CLICK,
					noun: "social_link",
					source: "add_social_link",
					...c({
						socialLinkType: e
					})
				}),
				a = e => t => ({
					...Object(s.n)(t),
					action: n.c.CLICK,
					noun: "save",
					source: "add_social_link",
					...c(e)
				}),
				d = e => t => ({
					...Object(s.n)(t),
					action: n.c.CLICK,
					noun: "edit_social_link",
					source: "profile_settings",
					...c(e)
				}),
				l = e => t => ({
					...Object(s.n)(t),
					action: n.c.CLICK,
					noun: "delete_social_link",
					source: "profile_settings",
					...c(e)
				}),
				u = e => t => ({
					...Object(s.n)(t),
					action: n.c.CLICK,
					noun: "social_link",
					source: "profile",
					profile: Object(s.R)(t),
					...c(e)
				})
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js");
			t.a = function(e, t, r) {
				Object(n.useEffect)(() => {
					const n = e && e.current;
					if (!n || "undefined" == typeof IntersectionObserver) return;
					const s = new IntersectionObserver(t, r);
					return s.observe(n), () => {
						s.unobserve(n)
					}
				}, [e, t, r])
			}
		},
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var n = r("./src/reddit/components/TrackingHelper/index.tsx");
			const s = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var c = r("./src/reddit/helpers/trackers/socialLinks.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, r, n, s) => i => {
				const a = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(o.n)(i),
					actionInfo: Object(o.d)(i),
					geo: Object(o.s)(i),
					screen: Object(o.Z)(i),
					subreddit: Object(o.hb)(i),
					outbound: Object(o.F)(i, e, t, n, r)
				};
				return r && (a.comment = Object(o.h)(i, r)), n && (a.post = Object(o.I)(i, n)), s && (a.socialLink = Object(c.g)({
					socialLinkType: s
				}).socialLink), a
			};
			var a = r("./src/lib/serviceWorker/index.ts"),
				d = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				u = r("./src/telemetry/helpers/getSignatureHeader.ts"),
				b = r("./src/telemetry/models/Event.ts");
			const m = () => {
				const e = Object(d.f)();
				return t => {
					const r = t(e.getState()),
						n = b.g(r),
						s = Object(l.a)(n),
						c = Object(u.b)(s);
					Object(a.b)("sendV2EventsData", {
						data: s,
						headers: c
					})
				}
			};

			function f() {
				const e = Object(n.b)(),
					t = m();
				return (r, n, c, o, a) => {
					var d, l;
					if (n && function(e) {
							return !e.startsWith("/") && null == e.match(s)
						}(r)) {
						const s = i(r, n, c, o, a);
						(null === (l = null === (d = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === d ? void 0 : d.serviceWorker) || void 0 === l ? void 0 : l.controller) ? t(s): e(s)
					}
				}
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = n.b
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				c = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/fonts/helpers.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const a = e => {
				let {
					className: t,
					isFilled: r,
					name: n,
					...a
				} = e;
				return s.a.createElement("i", i({
					className: Object(c.a)(t, Object(o.b)(n, r))
				}, a))
			};
			a.displayName = "Icon";
			const d = (e, t) => r => s.a.createElement(a, i({
				name: e
			}, t, r, {
				isFilled: (null == t ? void 0 : t.isFilled) || (null == r ? void 0 : r.isFilled),
				className: Object(c.a)(null == t ? void 0 : t.className, null == r ? void 0 : r.className)
			}));
			t.a = a
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.m.less": function(e, t, r) {
			e.exports = {
				defaultInactiveState: "_1g3Xfh9mljLHWv24M9A3Rw",
				outline: "_3SlBAJb2MbUHwgBZFH8eL7",
				highlighted: "_1-JQy00VxG8hpTxxdxV32y"
			}
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				c = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				i = r.n(o);
			t.a = Object(n.forwardRef)((e, t) => {
				let {
					className: r,
					isHighlighted: n,
					outlineClassName: o
				} = e;
				return s.a.createElement("svg", {
					className: Object(c.a)(i.a.defaultInactiveState, r),
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg",
					width: "12",
					height: "12",
					ref: t
				}, s.a.createElement("circle", {
					cx: "6",
					cy: "6",
					r: "4"
				}), s.a.createElement("path", {
					className: Object(c.a)(i.a.outline, o, {
						[i.a.highlighted]: n
					}),
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
				}))
			})
		},
		"./src/reddit/icons/svgs/SnooSilhouette/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 320 320",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"
			}), s.a.createElement("path", {
				d: "m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
			}), s.a.createElement("path", {
				d: "m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"
			}), s.a.createElement("path", {
				d: "m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
			}), s.a.createElement("path", {
				d: "m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
			}), s.a.createElement("path", {
				d: "m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
			}), s.a.createElement("path", {
				d: "m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
			}), s.a.createElement("path", {
				d: "m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"
			}), s.a.createElement("path", {
				d: "m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
			}), s.a.createElement("path", {
				d: "m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
			}), s.a.createElement("path", {
				d: "m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
			}), s.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
			}), s.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z",
				fill: "none"
			}), s.a.createElement("path", {
				d: "m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
			}), s.a.createElement("circle", {
				cx: "238.47",
				cy: "80.13",
				r: "22.93"
			}), s.a.createElement("path", {
				d: "m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
			})))
		},
		"./src/reddit/selectors/experiments/econ/simpleExperiment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const c = e => t => {
				const r = Object(s.c)(t, {
					experimentEligibilitySelector: s.a,
					experimentName: e
				});
				return !(!r || Object(n.Xf)(r))
			}
		},
		"./src/reddit/selectors/experiments/newCommunityProgressV3.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return O
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/constants/index.ts"),
				c = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/constants/posts.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/experiments/index.ts"),
				d = r("./src/reddit/selectors/experiments/utils.ts"),
				l = r("./src/reddit/selectors/moderatorPermissions.ts"),
				u = r("./src/reddit/selectors/platform.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/selectors/user.ts");
			const f = e => e.subreddits.progressModule,
				p = e => {
					const t = Object(u.c)(e);
					if (!t) return;
					if (!Object(l.o)(e, {
							subredditId: t
						})) return;
					if (Object(m.N)(e)) return O(e);
					const r = Object(b.I)(e, {
						identifier: {
							id: t,
							type: o.a.SUBREDDIT
						}
					});
					if (!r || !r.created) return;
					const n = r.created;
					return n ? n * s.Sb < 1639443600180 ? void 0 : O(e) : void 0
				},
				O = Object(n.a)(e => Object(i.c)(e, {
					experimentName: c.se,
					experimentEligibilitySelector: a.e
				}), d.a)
		},
		"./src/reddit/selectors/experiments/profileAvatarChangeFix.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = Object(s.a)(n.v)
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.d9bcb4f5c98880fc4784.js.map