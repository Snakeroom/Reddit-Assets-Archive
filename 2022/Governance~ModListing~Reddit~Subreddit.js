// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.9bed6d7379e5cc5e9773.js
// Retrieved at 1/18/2022, 11:50:05 AM by Reddit Dataminer v1.0.0
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
				getComponent: () => Object(s.a)(() => Promise.all([r.e(1), r.e("RealtimeGQLSubscriptionAsync")]).then(r.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
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
				return u
			})), r.d(t, "a", (function() {
				return l
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
				u = "MOD_LISTING_HIDE_SUBREDDIT_PENDING",
				l = "MOD_LISTING_HIDE_SUBREDDIT_FAILED",
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
				return u
			})), r.d(t, "e", (function() {
				return l
			}));
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				c = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				o = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				i = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				a = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return P
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "c", (function() {
				return U
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "b", (function() {
				return H
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				i = r("./src/reddit/actions/login.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/subscription/constants.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/constants/posts.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				m = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts");
			var p = r("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				j = r("./src/reddit/models/GqlTopLevelField.ts"),
				I = r("./src/reddit/models/User/index.ts");

			function g(e) {
				const t = [],
					r = [],
					n = {},
					s = {},
					{
						followedRedditorsInfo: c
					} = e.identity;
				for (const i of c.edges) {
					if (i.node.__typename !== I.c.AvailableRedditor || !i.node.profile) continue;
					const e = Object(O.a)(i.node.profile);
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
					if (i.node.__typename !== j.a.Subreddit) continue;
					const e = Object(h.a)(i.node);
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
			var v = r("./src/reddit/models/Toast/index.ts"),
				S = r("./src/reddit/selectors/profile.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				x = r("./src/reddit/selectors/subscriptions.ts"),
				E = r("./src/reddit/selectors/user.ts");
			const y = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				T = Object(c.a)(d.c),
				N = Object(c.a)(d.b),
				C = Object(c.a)(d.a),
				k = Object(c.a)(d.h),
				P = (Object(c.a)(d.i), Object(c.a)(d.g), () => async (e, t, {
					gqlContext: r
				}) => {
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(N());
					const s = await Object(p.a)(r());
					if (s.ok) {
						const t = g(s.body.data);
						e(T(t))
					} else e(C({
						error: s.error
					}))
				}),
				w = (e, t) => t.type === l.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				D = (e, t, r) => async (c, d, {
					apiContext: b
				}) => {
					let m = e.map(e => e.type === l.a.SUBREDDIT ? {
						id: Object(_.C)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(S.m)(d(), e.name),
						name: `${s.ic}${e.name}`,
						type: e.type
					});
					if (!Object(E.J)(d())) return c(Object(a.k)({
						actionSource: a.a.Subscribe
					})), void c(Object(i.j)());
					const f = Object(E.k)(d());
					if (f) {
						const t = m.length,
							r = e.length;
						if (m = m.filter(e => !w(f, e)), (e = e.filter(e => !w(f, e))).length !== r || m.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							c(Object(u.f)(Object(u.e)(e, v.b.Error)))
						}
						if (!e.length && !m.length) return
					}
					c(k({
						identifiers: m,
						nameIdentifiers: e,
						profileModels: d().profiles.models,
						subredditModels: d().subreddits.models,
						subscriptionsCount: Object(x.b)(d()),
						userIsSubscriber: t,
						widgetId: r
					}));
					const O = await Object(p.c)(b(), {
						subredditNames: m.map(({
							name: e
						}) => e),
						subscribe: t
					});
					if (O.ok) {
						const r = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : n.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [n.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							s = n.fbt._("Sucсessfully followed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "1S5AXJ"
							}),
							i = n.fbt._("Sucсessfully unfollowed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "2XWHyB"
							}),
							a = n.fbt._("Sucсessfully joined {communityname}", [n.fbt._param("communityname", r)], {
								hk: "3Al8aF"
							}),
							d = n.fbt._("Sucсessfully left {communityname}", [n.fbt._param("communityname", r)], {
								hk: "2w5JFZ"
							});
						c(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : i : t ? a : d
						}))
					} else {
						c(k({
							identifiers: m,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(x.b)(d()),
							userIsSubscriber: !t,
							widgetId: r
						}));
						const s = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						c(Object(u.f)(Object(u.e)(s, v.b.Error)))
					}
					return O.ok
				}, R = Object(c.a)(d.f), U = e => async (t, r, {
					apiContext: n
				}) => {
					const s = r(),
						c = Object(_.J)(s, {
							identifier: e
						});
					if (!c) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const o = e.type === l.a.SUBREDDIT ? c.name : `u_${c.name}`,
						i = s.subscriptions.favoriteSubredditOrder || [],
						a = s.subscriptions.favoriteProfileOrder || [],
						d = i.indexOf(e.id),
						b = a.indexOf(e.id),
						m = -1 === d && -1 === b,
						f = s.subreddits.models,
						O = s.profiles.models;
					t(R({
						makeFavorite: m,
						identifier: e,
						subredditModels: f,
						profileModels: O
					}));
					const h = {
							type: e.type,
							name: c.name
						},
						j = () => Object(_.db)(r(), {
							identifier: h
						});
					(j() || (await t(D([h], !0)), j())) && ((await Object(p.b)(n(), o, m)).ok || (t(R({
						makeFavorite: !m,
						identifier: e,
						subredditModels: f,
						profileModels: O
					})), t(Object(u.f)({
						text: y(),
						kind: v.b.Error
					}))))
				}, A = Object(c.a)(d.d), L = e => async (t, r, {
					apiContext: n
				}) => {
					const c = r().multireddits.models,
						o = () => {
							t(Object(u.f)({
								text: y(),
								kind: v.b.Error
							}))
						},
						i = c[e];
					if (!i) return void o();
					const a = !i.isFavorited;
					t(A({
						makeFavorite: a,
						multiredditPath: e,
						multiredditsModelsState: c
					})), (await ((e, t, r) => Object(b.a)(Object(m.a)(e, [f.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(n(), e, a)).ok || (t(A({
						makeFavorite: !a,
						multiredditPath: e,
						multiredditsModelsState: c
					})), o())
				}, M = Object(c.a)(d.e), H = e => async (t, r, {
					apiContext: c
				}) => {
					const o = r(),
						i = o.multireddits.models;
					if (!Object(E.J)(o)) return;
					const a = (e = !0) => {
							t(Object(u.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "2I4uia"
								}) : n.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: v.b.Error
							}))
						},
						d = i[e];
					if (!d) return void a();
					const l = !d.isFollowed;
					t(M({
						follow: l,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, r) => Object(b.a)(Object(m.a)(e, [f.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: r ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(c(), e, l)).ok || (t(M({
						follow: !l,
						multiredditPath: e,
						multiredditsModelsState: i
					})), a(l))
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
						loop: u,
						useCanvasRenderer: l,
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
						renderer: l ? "canvas" : "svg",
						loop: u,
						container: e,
						animationData: f
					});
					h(r)
				}, [u, t, O, f]), Object(c.useEffect)(() => {
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
				u = r("./src/reddit/helpers/postCollection.ts");
			const l = [d.Mb.COMMENTS, d.Mb.COLLECTION_COMMENTS],
				b = (e, t) => {
					if (!e) return [];
					const r = l.includes(e),
						s = e === d.Mb.COLLECTION_COMMENTS || t && Object(u.a)(t),
						c = d.V.has(e),
						o = d.Cb.has(e),
						i = e === d.Mb.SUBREDDIT,
						a = e === d.Mb.TOPIC;
					let b, m, f;
					return c && !i || o ? b = n.HeaderSelector : s ? b = n.Collection : r ? b = n.PostComments : a && (b = n.TopicHeader), (c || o || s || r) && (m = n.Widget), (c || r) && (f = n.PostItem), [b, m, f]
				};
			var m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/selectors/platform.ts"),
				p = r("./src/reddit/components/SEOTitle/index.m.less"),
				O = r.n(p);
			const h = ({
					level: e,
					children: t
				}) => {
					const r = `h${e}`;
					return o.a.createElement(r, {
						className: O.a.Title
					}, t)
				},
				j = Object(m.u)(),
				I = Object(i.b)(() => Object(a.a)((e, {
					pageLayer: t
				}) => t && Object(f.n)(e, {
					page: t
				}), (e, {
					pageLayer: t
				}) => t && t.meta && t.meta.name, (e, {
					type: t
				}) => t, (e, t, r) => ({
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
		"./src/reddit/components/SearchNSFWToggle/hooks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return u
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/hooks/useLocalStorage.ts");
			const c = !1,
				o = "allow-nsfw-search-results",
				i = 30 * n.kb,
				a = () => Date.now() + i,
				d = () => ({
					allowNsfwSearchResults: c,
					expires: a()
				}),
				u = () => {
					const [e, t] = Object(s.a)(o, d());
					return {
						get nsfwSessionSetting() {
							if (e.expires < Date.now()) {
								const e = d();
								return t(e), e.allowNsfwSearchResults
							}
							return e.allowNsfwSearchResults
						},
						refreshNsfwSessionSettingExpiryTime: () => {
							t({
								allowNsfwSearchResults: e.allowNsfwSearchResults,
								expires: a()
							})
						},
						setNsfwSessionSetting: e => {
							t({
								allowNsfwSearchResults: e,
								expires: a()
							})
						}
					}
				}
		},
		"./src/reddit/components/SubredditIcon/index.m.less": function(e, t, r) {
			e.exports = {
				Image: "_34CfAAowTqdbNDYXz5tBTW",
				image: "_34CfAAowTqdbNDYXz5tBTW",
				UserIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				userIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
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
				return _
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./node_modules/react/index.js"),
				o = r.n(c),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				u = r("./src/reddit/components/UserIcon/index.tsx"),
				l = r("./src/reddit/constants/colors.ts"),
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
			const g = d.a.wrapped(u.a, "UserIcon", j.a),
				v = d.a.img("Image", j.a),
				S = ({
					iconColor: e,
					...t
				}) => o.a.createElement(v, I({
					style: {
						backgroundColor: e || ""
					}
				}, t)),
				_ = d.a.div("BackupImage", j.a),
				x = Object(b.u)();
			t.b = x(e => {
				const t = Object(i.e)(O.W);
				let r, c, d;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: n
					} = Object(m.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(p.h)(e.subredditOrProfile) ? d = o.a.createElement(g, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (r = t, c = n)
				} else r = e.shouldHideNsfwIcon ? `${n.a.assetPath}/img/avatar_over18.png` : e.iconUrl, c = e.primaryColor || l.a.alienblue;
				return r ? d = o.a.createElement(S, {
					alt: s.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: c,
					role: "presentation",
					src: r
				}) : d || (d = o.a.createElement(f.a, {
					name: "community",
					isFilled: !t,
					className: Object(a.a)(e.className, j.a.defaultCommunityIcon, {
						[j.a.mNightmode]: t
					}),
					style: t ? {
						backgroundColor: e.redditStyle ? l.a.alienblue : c
					} : {
						color: e.redditStyle ? l.a.alienblue : c
					}
				})), e.linkTo ? o.a.createElement("a", {
					href: e.linkTo
				}, d) : o.a.createElement(o.a.Fragment, null, d)
			})
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/telemetry/index.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = s.a.createContext(() => {});

			function u({
				children: e
			}) {
				const t = Object(c.f)(),
					r = Object(n.useCallback)(e => {
						{
							const r = t.getState(),
								n = e(r);
							Object(i.a)({
								...o.o(r),
								...n
							})
						}
					}, [t]);
				return s.a.createElement(d.Provider, {
					value: r
				}, e ? s.a.Children.only(e) : null)
			}

			function l() {
				return Object(n.useContext)(d)
			}

			function b(e) {
				function t(t) {
					const r = l();
					return s.a.createElement(e, a({}, t, {
						sendEvent: r
					}))
				}
				const r = e.name || e.displayName;
				return t.displayName = `Tracked(${r})`, t.WrappedComponent = e, t
			}
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
				} = e, a = Object(n.useRef)(null), u = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && r && r()
					})
				}, [r]);
				return Object(o.a)(a, u), s.a.createElement(i.a, {
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
			t.a = function({
				backgroundClassName: e,
				className: t,
				headshot: r
			}) {
				return c.a.createElement("div", {
					className: Object(o.a)(a.a.snoovatarWrapper, t)
				}, c.a.createElement("div", {
					className: Object(o.a)(a.a.snoovatarBackground, e)
				}), c.a.createElement("div", {
					className: a.a.snoovatarHeadshotContainer
				}, c.a.createElement("img", {
					alt: n.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: a.a.snoovatarHeadshot,
					src: r
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
				snoovatarWrapper: "_1cyAeeYDGrx7MPL_jRwKZ",
				snoovatarBackground: "_2_QqG5dG916znjlVV8ZCbw",
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
				return m
			})), r.d(t, "c", (function() {
				return f
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./node_modules/react/index.js"),
				o = r.n(c),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				u = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = r.n(l);
			const m = `${n.a.assetPath}/img/avatar_over18_square.png`,
				f = e => !e || e.includes("avatar_default_");
			t.b = e => {
				const {
					className: t,
					iconUrl: r,
					isCurrentUser: n,
					isNightMode: c,
					isNSFW: l,
					nsfwIconUrl: p,
					shouldHideNSFW: O
				} = e;
				if (Object(i.e)(e => {
						f(r) && Object(u.h)(e)
					}), n && f(r) || !n && !r) return o.a.createElement(d.a, {
					className: Object(a.a)(b.a.DefaultUserIcon, t, {
						[b.a.mNightmode]: c
					})
				});
				const h = !n && l && O ? p || m : r;
				return o.a.createElement("img", {
					alt: s.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(a.a)(b.a.UserIcon, t),
					src: h
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				c = r.n(s),
				o = r("./src/config.ts"),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/realtime/GQLSubscription/async.tsx"),
				u = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				b = r("./src/reddit/models/User/index.ts"),
				m = r("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				f = r("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				p = r("./src/reddit/components/UserIcon/UserIcon.tsx"),
				O = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/components/LottieAnimation/index.tsx"),
				j = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				I = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				g = r.n(I);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = () => {},
				_ = Object(a.c)({
					currentUser: O.k,
					isNightMode: O.W,
					shouldHideNSFW: O.C,
					user: O.mb,
					isProfileAvatarChangeFixEnabled: j.a
				}),
				x = Object(i.b)(_);
			t.a = x(e => {
				const {
					authorId: t,
					collapsed: r,
					currentUser: i,
					iconUrl: a,
					isCommentAuthorBlocked: O,
					isHighlighted: j,
					isNft: I,
					isNSFW: _,
					shouldUseOnlineOverride: x,
					isOnlineOverrideValue: E,
					isOnlineStatusLoadTest: y,
					isProfileIcon: T,
					omitResponsivePresenceWrapper: N,
					onPresenceIndicatorInViewport: C,
					shouldShowPresenceIndicator: k,
					user: P,
					userName: w,
					isProfileAvatarChangeFixEnabled: D,
					...R
				} = e, U = !!i && Object(b.e)(i) === w, A = U ? i : P, L = A && A.accountIcon || a, M = P ? P.isNSFW : _, H = Object(u.a)(L) && !O, G = H ? c.a.createElement(f.a, {
					headshot: L,
					className: e.className
				}) : c.a.createElement(p.b, v({}, R, {
					iconUrl: O && r ? "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png" : L,
					isCurrentUser: U,
					isNSFW: M
				})), [B, F] = Object(s.useState)(!1), W = Object(s.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "ONLINE_STATUS_INDICATOR",
							userID: t
						}
					}
				}), [t]), q = Object(s.useCallback)(e => {
					const {
						isOnline: t
					} = e.subscribe.data;
					F(t)
				}, []), z = Object(s.useRef)(null), [K, V] = Object(s.useState)(!1), $ = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: r
						} = e, n = 1 !== r;
						t ? V(!0) : n && V(!1)
					})
				}, []), Y = Object(s.useRef)({
					rootMargin: "750px 0px 1000px 0px"
				});
				return Object(l.a)(z, $, Y.current), N ? G : c.a.createElement("div", {
					className: Object(n.a)(g.a.userIconWrapper, {
						[g.a.nftUserIcon]: I,
						[g.a.hasHeadShotWrapper]: H,
						[g.a.isProfileIcon]: T && D
					}),
					ref: z
				}, I && c.a.createElement(h.a, {
					className: g.a.nftAnimation,
					assetUrl: `${o.a.assetPath}/img/snoovatars/nft_comment_animation.json`,
					loop: !0
				}), G, k && (B || x && E) && c.a.createElement(m.default, {
					showPresence: !0,
					isHighlighted: j,
					onceInViewport: C
				}), (k || y) && !x && K && c.a.createElement(d.a, {
					variables: W,
					onData: k ? q : S,
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
				return u
			})), r.d(t, "j", (function() {
				return l
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
				u = "voteButton",
				l = "RichTextJSON-root",
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
				return N
			})), r.d(t, "c", (function() {
				return C
			}));
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				c = r("./node_modules/query-string/index.js"),
				o = r.n(c),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				d = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/addQueryParams/index.ts");
			var b = (e, t) => t ? Object(l.a)(e, {
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
				v = r("./src/reddit/selectors/posts.ts"),
				S = r("./src/reddit/selectors/telemetry.ts"),
				_ = r("./src/reddit/selectors/user.ts");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = Object(u.a)(_.a, _.k, (e, {
					isSponsored: t,
					postId: r
				}) => t && r ? Object(v.b)(e, r) : null, v.H, S.d, (e, t, r, n, s) => ({
					allowClickTracking: e,
					basePixelMetadata: r,
					userId: t ? Object(f.a)(t.id) : null,
					post: n,
					pageType: s.pageType
				})),
				y = Object(d.b)(E, e => ({
					fireAdPixelsOfType: (t, r) => e(Object(p.z)(t, r)),
					recordClick: (t, r, n) => {
						const s = t.events.filter(({
							type: e,
							url: t
						}) => e === O.a.Click && Object(j.b)(t));
						Object(j.c)(s), e(Object(p.p)(String(r), {
							postId: t.id,
							vendorMetadata: n
						}))
					}
				})),
				T = (e, t, r, n) => {
					const s = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					n && t.outboundUrl && s && (e.href = b(t.outboundUrl, r), e.href = function(e) {
						return Object(l.a)(e, {
							web_redirect: "true"
						})
					}(e.href))
				},
				N = (e, t, r) => {
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
				C = (e, t, r) => {
					const n = N(t, r, e.href);
					return e.href = n.url, n.metadata
				},
				k = ({
					isSponsored: e,
					source: t
				}) => !!(e && (null == t ? void 0 : t.outboundUrl)),
				P = y(e => {
					const t = Object(i.useRef)(null),
						r = Object(g.a)(),
						{
							allowClickTracking: n,
							basePixelMetadata: c,
							commentId: o,
							fireAdPixelsOfType: d,
							href: u,
							isSponsored: l,
							pageType: b,
							post: f,
							postId: p,
							recordClick: h,
							source: j,
							sourceElement: v,
							userId: S
						} = e;
					let _ = s()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "post", "recordClick", "commentId", "source", "sourceElement", "userId", "pageType"]);
					const E = j && j.outboundUrl && l ? j.outboundUrl : u;
					return _ = {
						..._,
						href: E,
						rel: l ? m.b : m.a,
						target: m.d.BLANK
					}, !j || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: r
						} = e;
						return !(!t || !r) && (t > r + 3e5 || t < r - 36e5)
					})(j) ? a.a.createElement("a", x({}, _, {
						onClick: () => r(u, v, o, p)
					})) : a.a.createElement("a", x({}, _, {
						onMouseDown: r => {
							if (!k(e)) return !(1 !== r.button && 2 !== r.button && !r.ctrlKey) || void T(r.currentTarget, j, S, n);
							t.current = C(r.currentTarget, p, c)
						},
						onClick: () => {
							f && (k(e) && (h(f, O.a.Click, t.current), Object(I.a)(f, b)), d(f, O.a.Click), r(u, v, o, p))
						},
						onMouseLeave: e => {
							l || ((e, t) => {
								e.href = t
							})(e.currentTarget, E)
						},
						onTouchStart: e => T(e.currentTarget, j, S, n),
						"data-testid": "outbound-link"
					}))
				});
			t.b = P
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./src/redditGQL/operations/SubscribedSubreddits.json"),
				s = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(o.a)(e, n);
			const u = (e, {
					subredditIds: t,
					subredditNames: r,
					subscribe: n
				}) => Object(c.a)(Object(i.a)(e, [a.a]), {
					method: s.jb.POST,
					endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
					data: {
						action: n ? "sub" : "unsub",
						sr: t && t.join(",") || void 0,
						sr_name: r && r.join(",") || void 0,
						api_type: "json"
					}
				}),
				l = (e, t, r) => Object(c.a)(Object(i.a)(e, [a.a]), {
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

			function o(e, t = s.a.bodyText, r = s.b.bodyText) {
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
					...c.o(s),
					subreddit: c.jb(s),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${r}` : `DESKTOP ${r}`,
						count: 1,
						type: n.f.SWITCH_HOUSE_AD
					}
				}),
				i = (e, t) => {
					t && (Object(s.zb)(e.postId), Object(s.Hb)(t)), e.impressionIdStr ? Object(s.Ab)(e.impressionIdStr) : e.impressionId && Object(s.Ab)(e.impressionId)
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return T
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "q", (function() {
				return k
			})), r.d(t, "r", (function() {
				return P
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "s", (function() {
				return D
			})), r.d(t, "c", (function() {
				return R
			})), r.d(t, "l", (function() {
				return U
			})), r.d(t, "p", (function() {
				return A
			})), r.d(t, "i", (function() {
				return L
			})), r.d(t, "j", (function() {
				return M
			})), r.d(t, "g", (function() {
				return H
			})), r.d(t, "b", (function() {
				return F
			})), r.d(t, "a", (function() {
				return W
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "m", (function() {
				return z
			})), r.d(t, "t", (function() {
				return $
			})), r.d(t, "x", (function() {
				return Y
			})), r.d(t, "e", (function() {
				return X
			})), r.d(t, "d", (function() {
				return J
			})), r.d(t, "v", (function() {
				return re
			})), r.d(t, "u", (function() {
				return ne
			})), r.d(t, "w", (function() {
				return se
			})), r.d(t, "h", (function() {
				return ce
			}));
			var n = r("./node_modules/lodash/pick.js"),
				s = r.n(n),
				c = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makePostDraftPageKey/index.ts"),
				i = r("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				a = r("./src/reddit/constants/parameters.ts"),
				d = r("./src/reddit/constants/tracking.ts"),
				u = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				l = r("./src/reddit/helpers/routeKey/index.ts"),
				b = r("./src/reddit/helpers/trackers/postComposer.ts"),
				m = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				f = r("./src/reddit/models/Comment/index.ts"),
				p = r("./src/reddit/models/Post/index.ts"),
				O = r("./src/reddit/routes/subreddit/index.ts"),
				h = r("./src/reddit/selectors/profile.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/lib/makePostCreationPageKey/index.ts"),
				g = r("./src/lib/makeSearchKey/index.ts"),
				v = r("./src/reddit/helpers/correlationIdTracker.ts"),
				S = r("./src/reddit/helpers/trackers/searchResults.ts"),
				_ = r("./src/reddit/selectors/postDraft.ts"),
				x = r("./src/reddit/selectors/telemetry.ts"),
				E = r("./src/telemetry/index.ts"),
				y = r("./src/reddit/helpers/localStorage/index.ts");
			const T = (e, t, r, n, d, b) => {
					var h;
					const {
						route: j
					} = e, {
						name: v
					} = j.meta;
					if (!v) return;
					const S = t.platform.currentPage;
					switch (v) {
						case c.Mb.COMMENTS: {
							const {
								partialCommentId: s,
								partialPostId: c
							} = e.match.params, o = Object(p.t)(c), i = Object(l.a)(e, t, t.posts.models[o]);
							if (!i) return;
							const a = s && Object(f.h)(s),
								{
									sortToUse: d
								} = Object(u.a)(t, o);
							Object(E.a)(R(i, o, a, r, n, d)(t));
							break
						}
						case c.Mb.INDEX:
						case c.Mb.LISTING:
						case c.Mb.MULTIREDDIT:
						case c.Mb.SUBREDDIT: {
							const s = Object(l.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: o,
								queryParams: i,
								path: a
							} = e.match, {
								sort: d = (s.sort ? s.sort : c.W.HOT)
							} = o, u = i.t, b = a === O.a;
							Object(E.a)(C({
								key: s.listingKey,
								sort: d,
								timerType: r,
								timerMillis: n,
								timeSort: u,
								isPredictionsPage: b
							})(t));
							break
						}
						case c.Mb.TOPIC: {
							const s = Object(l.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: o
							} = e.match, i = s.sort ? s.sort : c.X, {
								sort: a = i
							} = o;
							Object(E.a)(C({
								key: s.listingKey,
								sort: a,
								timerType: r,
								timerMillis: n
							})(t));
							break
						}
						case c.Mb.PROFILE_OVERVIEW: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							const {
								params: o,
								queryParams: i
							} = e.match, {
								sort: a = c.Eb
							} = o, d = i.t;
							Object(E.a)(k(s, a, r, n, d)(t));
							break
						}
						case c.Mb.PROFILE_POSTS: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							const {
								queryParams: o
							} = e.match, {
								sort: i = c.Eb,
								t: a = c.Fb
							} = o;
							Object(E.a)(P(s, i, r, n, a)(t));
							break
						}
						case c.Mb.PROFILE_COMMENTS: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							const {
								queryParams: o
							} = e.match, {
								sort: i = c.Eb,
								t: a = c.Fb
							} = o;
							Object(E.a)(w(s, i, r, n, a)(t));
							break
						}
						case c.Mb.PROFILE_PRIVATE: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							Object(E.a)(D(s)(n, r)(t));
							break
						}
						case c.Mb.FOLLOWERS:
							G(t);
							break;
						case c.Mb.PROFILE_MODERATION:
							b && A(t, !0);
							break;
						case c.Mb.SETTINGS: {
							const s = e;
							Object(E.a)(V(r, n)(t)), s.match.params.page === c.bc.Profile && Object(m.l)(t);
							break
						}
						case c.Mb.POST_CREATION:
							if (b && d) {
								const e = Object(I.a)(d);
								Object(E.a)(U(e, r, n)(t))
							}
							break;
						case c.Mb.POST_DRAFT: {
							const {
								draftId: s
							} = e.match.params, c = Object(o.a)(e.match.params);
							if (!c) return;
							B(t, c, s, r, n);
							break
						}
						case c.Mb.SUBREDDIT_WIKI:
							Object(E.a)(Q(r, n)(t));
							break;
						case c.Mb.COINS:
							Object(E.a)(F(r, n)(t)), Object(E.a)(W()(t));
							break;
						case c.Mb.PREMIUM:
							Object(E.a)(q(r, n)(t)), Object(E.a)(z()(t));
							break;
						case c.Mb.APPEAL:
							Object(E.a)(K(r, n)(t));
							break;
						case c.Mb.INBOX_PAGES:
							b && H(t);
							break;
						case c.Mb.MODERATION_PAGES:
							b && L(t, !0, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case c.Mb.COLLECTION_COMMENTS:
							b && se(t, !0);
							break;
						case c.Mb.MODQUEUE_PAGES:
							b && M(t, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case c.Mb.SUBREDDIT_LEADERBOARD:
							b && Object(E.a)(X()(t));
							break;
						case c.Mb.SEARCH_RESULTS:
							if (b) {
								const c = Object(l.e)(e, t);
								if (!c) return;
								Object(E.a)(re(c, Object(g.e)(s()(S && S.queryParams || {}, a.u)), r, n, S, null !== (h = Object(y.B)(i.b)) && void 0 !== h ? h : i.a)(t))
							}
							break;
						case c.Mb.PUBLIC_ACCESS_NETWORK:
							b && Object(E.a)($()(t));
							break;
						case c.Mb.GEOTAGGING:
							b && Object(E.a)(J()(t));
							break;
						case c.Mb.SUBREDDIT_CREATION:
							b && Object(E.a)(Y()(t));
							break;
						case c.Mb.MOD_LISTING:
							b && ce(t, !0)
					}
				},
				N = e => ({
					...x.o(e),
					userPreferences: x.rb(e)
				}),
				C = ({
					key: e,
					sort: t,
					timerType: r,
					timerMillis: n,
					timeSort: s,
					flairTitle: c,
					isPredictionsPage: o
				}) => i => {
					const {
						api: a
					} = i.listings.postOrder, d = !a.error[e] && !a.pending[e], u = o ? {
						paneName: "predictions",
						reason: "predictions_tournament"
					} : {};
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...N(i),
						actionInfo: x.d(i, {
							success: d,
							...u
						}),
						customFeed: x.m(i),
						listing: x.z(i, e, {
							sort: t,
							sortTime: s
						}),
						subreddit: x.jb(i),
						timer: x.pb(r, n),
						userSubreddit: x.sb(i),
						adblock: x.e(i),
						postFlair: {
							title: c
						},
						predictions: o ? Object(x.P)(i) : void 0
					}
				},
				k = (e, t, r, n, s) => c => {
					const o = x.z(c, e);
					o && (o.sort = t, s && (o.sortTime = s));
					const {
						api: i
					} = c.listings.postOrder, a = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...N(c),
						actionInfo: x.d(c, {
							success: a
						}),
						profile: x.R(c),
						snoovatar: x.gb(c),
						subreddit: x.jb(c),
						timer: x.pb(r, n),
						userSubreddit: x.sb(c),
						adblock: x.e(c)
					}
				},
				P = (e, t, r, n, s) => c => {
					const o = x.z(c, e);
					o && (o.sort = t, s && (o.sortTime = s));
					const {
						api: i
					} = c.listings.postOrder, a = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...N(c),
						actionInfo: x.d(c, {
							success: a
						}),
						profile: x.R(c),
						subreddit: x.jb(c),
						timer: x.pb(r, n),
						userSubreddit: x.sb(c),
						adblock: x.e(c)
					}
				},
				w = (e, t, r, n, s) => c => {
					const o = x.U(c, e);
					o && (o.sort = t, s && (o.sortTime = s));
					const {
						api: i
					} = c.profileCommentsPage, a = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...N(c),
						actionInfo: x.d(c, {
							success: a
						}),
						profile: x.R(c),
						subreddit: x.jb(c),
						timer: x.pb(r, n),
						userSubreddit: x.sb(c),
						adblock: x.e(c)
					}
				},
				D = e => (t, r) => n => {
					const s = !n.profilePrivatePage.api.error[e] && !n.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...N(n),
						actionInfo: x.d(n, {
							success: s
						}),
						profile: x.R(n),
						subreddit: x.jb(n),
						timer: x.pb(r, t),
						userSubreddit: x.sb(n),
						adblock: x.e(n)
					}
				},
				R = (e, t, r, n, s, c) => o => {
					const {
						api: i
					} = o.pages.comments, a = !i.error[e] && !i.pending[e], d = {
						source: "global",
						action: "view",
						noun: "screen",
						...N(o),
						actionInfo: x.d(o, {
							success: a
						}),
						post: x.I(o, t),
						profile: x.R(o),
						subreddit: x.jb(o),
						timer: x.pb(n, s),
						userSubreddit: x.sb(o),
						adblock: x.e(o),
						postEvent: x.L(o, {
							postId: t
						}),
						postCollection: x.K(o, {
							postId: t
						}),
						listing: x.z(o, void 0, {
							sort: c
						})
					};
					return r && (d.comment = x.j(o, r)), d
				},
				U = (e, t, r) => n => {
					const s = n.creations.api.page.fetched[e],
						c = n.platform.currentPage ? n.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...N(n),
						actionInfo: x.d(n, {
							success: s
						}),
						post: c ? x.I(n, c) : void 0,
						subreddit: x.jb(n),
						timer: x.pb(t, r),
						userSubreddit: x.sb(n),
						adblock: x.e(n)
					}
				},
				A = (e, t) => {
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...N(e),
						actionInfo: x.d(e, {
							success: t
						})
					})
				},
				L = (e, t, r, n) => {
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...N(e),
						actionInfo: x.d(e, {
							success: t
						}),
						profile: x.S(e, Object(h.m)(e, n)),
						subreddit: x.kb(e, Object(j.C)(e, r)),
						userSubreddit: x.sb(e),
						adblock: x.e(e)
					})
				},
				M = (e, t, r) => {
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...N(e),
						profile: x.S(e, Object(h.m)(e, r)),
						subreddit: x.kb(e, Object(j.C)(e, t)),
						userSubreddit: x.sb(e),
						adblock: x.e(e)
					})
				},
				H = e => {
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...N(e),
						actionInfo: x.d(e)
					})
				},
				G = e => {
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...N(e),
						actionInfo: x.d(e)
					})
				},
				B = (e, t, r, n, s) => {
					const c = e.creations.api.page.pending[t],
						o = !e.creations.api.page.error[t] && !c && !!r,
						i = Object(_.h)(e, r);
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...N(e),
						actionInfo: x.d(e, {
							success: o
						}),
						subreddit: x.jb(e),
						timer: x.pb(n, s),
						userSubreddit: x.sb(e),
						adblock: x.e(e),
						...i ? Object(b.n)(e, i) : {}
					})
				},
				F = (e, t) => r => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(v.c)(v.a.GoldPayment),
					...N(r),
					timer: x.pb(e, t),
					adblock: x.e(r)
				}),
				W = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...N(e)
				}),
				q = (e, t) => r => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(v.c)(v.a.GoldPayment),
					...N(r),
					timer: x.pb(e, t),
					adblock: x.e(r)
				}),
				z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...N(e)
				}),
				K = (e, t) => r => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...N(r),
					timer: x.pb(e, t)
				}),
				V = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...N(r),
					timer: x.pb(e, t)
				}),
				$ = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: x.jb(e),
					...N(e)
				}),
				Y = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...N(e)
				}),
				X = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...N(e)
				}),
				Q = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...N(r),
					customFeed: x.m(r),
					subreddit: x.jb(r),
					timer: x.pb(e, t),
					userSubreddit: x.sb(r),
					adblock: x.e(r)
				}),
				J = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...N(e)
				}),
				Z = {
					source: "global",
					action: d.c.VIEW,
					noun: "screen"
				},
				ee = ({
					state: e,
					searchOptions: t,
					pageLayer: r,
					nsfw: n,
					searchSwitcherType: s,
					srShouldBeRestricted: o = !0,
					originElement: i,
					treatment: a
				}) => {
					var d, u, l, b;
					const m = x.ib(r),
						f = (null === (u = null === (d = e.platform.currentPage) || void 0 === d ? void 0 : d.urlParams) || void 0 === u ? void 0 : u.subredditName) ? x.lb(e, e.platform.currentPage.urlParams.subredditName) : void 0,
						p = x.bb(e, t, o, r || void 0);
					return {
						...p,
						range: null !== (l = p.range) && void 0 !== l ? l : c.Qb,
						sort: null !== (b = p.sort) && void 0 !== b ? b : c.Pb,
						originElement: null != i ? i : s,
						nsfw: n,
						protocolName: a,
						queryId: Object(v.c)(v.a.SearchResults),
						structureType: m,
						subredditId: t.restrict_sr && (null == f ? void 0 : f.id) ? f.id : void 0,
						subredditName: t.restrict_sr && (null == f ? void 0 : f.name) ? f.name : void 0
					}
				},
				te = e => !!e && {
					correlationId: Object(v.c)(v.a.SearchResults)
				},
				re = (e, t, r, n, s, o, i, a) => d => {
					let u = !0;
					if (t.type.indexOf(c.ac.Posts) > -1) {
						const {
							api: t
						} = d.listings.listingOrder;
						u = u && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(c.ac.Subreddits) > -1 || t.type.indexOf(c.ac.Users) > -1) {
						const {
							api: t
						} = d.listings.postOrder;
						u = u && !t.error[e] && !t.pending[e]
					}
					const l = x.G(d, s);
					return {
						...S.c(d, t),
						...Z,
						...x.o(d),
						actionInfo: x.d(d, {
							success: u,
							paneName: l
						}),
						timer: x.pb(r, n),
						search: ee({
							state: d,
							searchOptions: t,
							pageLayer: null != s ? s : void 0,
							nsfw: o,
							searchSwitcherType: i,
							treatment: a
						}),
						...te(i),
						userPreferences: x.db(d)
					}
				},
				ne = (e, t, r, n, s) => c => ({
					...x.o(c),
					...Z,
					actionInfo: {
						...x.d(c),
						pageType: "search_dropdown"
					},
					search: ee({
						state: c,
						searchOptions: e,
						pageLayer: t,
						nsfw: r,
						searchSwitcherType: void 0,
						originElement: x.a.SearchBar,
						treatment: s
					}),
					...te(n),
					userPreferences: x.db(c)
				}),
				se = (e, t) => {
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...N(e),
						actionInfo: x.d(e, {
							success: t
						})
					})
				},
				ce = (e, t) => {
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...N(e),
						actionInfo: x.d(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "p", (function() {
				return f
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "r", (function() {
				return O
			})), r.d(t, "q", (function() {
				return h
			})), r.d(t, "s", (function() {
				return j
			})), r.d(t, "u", (function() {
				return I
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "t", (function() {
				return _
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "n", (function() {
				return k
			})), r.d(t, "b", (function() {
				return P
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "i", (function() {
				return D
			})), r.d(t, "j", (function() {
				return R
			})), r.d(t, "m", (function() {
				return U
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/constants/posts.ts"),
				c = r("./src/reddit/constants/tracking.ts"),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				a = r("./src/reddit/selectors/posts.ts"),
				d = r("./src/reddit/selectors/telemetry.ts");
			const u = {
				SEARCH: "search",
				SEARCH_RESULTS_BEST: "search_results_best"
			};
			var l;
			! function(e) {
				e.SUBREDDIT = "subreddit", e.PEOPLE = "people"
			}(l || (l = {}));
			const b = {
					subreddit: l.SUBREDDIT,
					profile: l.PEOPLE
				},
				m = (e, t) => {
					const r = d.jb(e);
					return {
						screen: d.ab(e),
						subreddit: r && t && t.restrict_sr ? r : null
					}
				},
				f = (e, t, r, n, s) => c => ({
					...E(c, e, t, s, n, r),
					noun: "ad"
				}),
				p = (e, t, r) => s => {
					let o = !0;
					if (t.type.indexOf(n.ac.Posts) > -1) {
						const {
							api: t
						} = s.listings.listingOrder;
						o = o && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(n.ac.Subreddits) > -1 || t.type.indexOf(n.ac.Users) > -1) {
						const {
							api: t
						} = s.listings.postOrder;
						o = o && !t.error[e] && !t.pending[e]
					}
					return {
						...m(s, t),
						source: u.SEARCH,
						action: c.c.VIEW,
						noun: "search_results_post",
						actionInfo: d.d(s, {
							success: o,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: d.p(r),
						search: d.bb(s, t)
					}
				},
				O = (e, t) => r => ({
					action: c.c.VIEW,
					actionInfo: d.d(r),
					metaSearch: d.D(t),
					noun: e,
					screen: d.ab(r),
					search: d.fb(r, t),
					source: u.SEARCH
				}),
				h = (e, t) => r => ({
					action: c.c.CLICK,
					actionInfo: d.d(r),
					noun: e,
					metaSearch: d.D(t),
					screen: d.ab(r),
					search: d.fb(r, t),
					source: u.SEARCH
				}),
				j = (e, t, r) => n => ({
					source: u.SEARCH,
					action: c.c.CLICK,
					noun: d.b.Recent,
					actionInfo: d.d(n, {
						paneName: "subreddit_dropdown",
						position: r + 1
					}),
					search: {
						query: e,
						originPageType: n.platform.currentPage ? d.v(n.platform.currentPage) : void 0,
						queryId: d.cb(n, o.a.SearchResults)
					},
					...g(n, t)
				}),
				I = (e, t, r, n) => s => {
					const i = n.filter(e => e.id);
					return {
						source: u.SEARCH,
						action: c.c.CLICK,
						noun: d.b.Typeahead,
						actionInfo: d.d(s, {
							position: r + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: s.platform.currentPage ? d.v(s.platform.currentPage) : void 0,
							queryId: d.cb(s, o.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: i.map(e => e.id),
							numberSubreddits: i.length
						},
						...g(s, t)
					}
				},
				g = (e, t) => {
					const r = t.isSubreddit && t.id ? d.nb(e, t.id) : void 0,
						n = t.isProfile && t.id ? d.V(e, t.id) : void 0,
						s = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? r || s : void 0,
						profile: t.isProfile ? n || s : void 0
					}
				};
			var v;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities", e.Communities = "tab_communities", e.Authors = "tab_authors"
			}(v || (v = {}));
			const S = (e, t) => r => ({
					...m(r, t),
					source: u.SEARCH,
					action: c.c.CLICK,
					noun: e,
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: d.d(r),
					search: d.bb(r, t)
				}),
				_ = (e, t) => r => ({
					action: c.c.CLICK,
					correlationId: Object(o.c)(o.a.SearchResults),
					noun: e ? n.Yb.ToSubreddit : n.Yb.ToGlobal,
					search: d.bb(r, t),
					source: u.SEARCH
				}),
				x = (e, t, r, n, s) => c => E(c, e, t, r, n, s),
				E = (e, t, r, n, s, o) => {
					const i = d.G(e, n),
						a = T(e, t, s, o),
						l = d.g(e, r, s, o, i),
						b = null !== a ? l + a : null,
						m = d.ib(n),
						f = {
							...d.bb(e, r, !0, n || void 0),
							structureType: m
						};
					return {
						source: u.SEARCH,
						action: c.c.CLICK,
						noun: "post",
						actionInfo: n ? {
							pageType: d.v(n),
							paneName: i,
							position: b,
							relativePosition: a
						} : d.d(e, {
							paneName: i,
							position: b,
							relativePosition: a
						}),
						search: f,
						post: d.I(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: o ? d.p(o) : null
					}
				},
				y = (e, t, r, n, s, c) => o => N(o, e, t, r, n, s, c),
				T = (e, t, r, n) => {
					var s;
					return (null === (s = null == n ? void 0 : n.layout) || void 0 === s ? void 0 : s.viewTypeWeb) === i.b.Hero ? 0 : (null == n ? void 0 : n.postOrder) ? n.postOrder.indexOf(t) >= 0 ? n.postOrder.indexOf(t) : null : r ? d.x(e, t, r) : null
				},
				N = (e, t, r, n, o, i, l) => {
					if (!n) {
						n = Object(a.H)(e, {
							postId: i
						}).belongsTo
					}
					const m = d.G(e, r);
					let f, p;
					if (i) {
						f = T(e, i, o, l);
						const r = d.g(e, t, o, l, m);
						p = null !== f ? r + f : null
					} else {
						f = ((e, t, r, n) => n && n.subredditOrder ? n.subredditOrder.indexOf(t.id) : r ? d.y(e, t, r) : null)(e, n, o, l);
						const t = d.f(e, o, l);
						p = null !== f ? t + f : null
					}
					const O = d.ib(r),
						h = {
							...d.bb(e, t, !0, r || void 0),
							structureType: O
						};
					return {
						source: u.SEARCH,
						action: c.c.CLICK,
						noun: b[n.type],
						search: h,
						subreddit: n.type === s.a.SUBREDDIT ? d.nb(e, n.id) : void 0,
						profile: n.type === s.a.PROFILE ? d.V(e, n.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: l ? d.p(l) : null,
						actionInfo: r ? {
							pageType: d.v(r),
							paneName: m,
							position: p,
							relativePosition: f
						} : d.d(e, {
							paneName: m,
							position: p,
							relativePosition: f
						}),
						post: i ? d.I(e, i) : void 0
					}
				},
				C = (e, t, r, n, s) => o => ({
					...E(o, t, r, n, e, s),
					action: c.c.VIEW
				}),
				k = (e, t, r, n) => s => ({
					...m(s, r),
					source: u.SEARCH,
					action: c.c.VIEW,
					noun: "search_results_post",
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: d.d(s, {
						relativePosition: d.x(s, t, e),
						position: d.u(s, t, e)
					}),
					search: {
						...d.bb(s, r),
						...!!n && {
							originElement: n
						}
					},
					post: d.I(s, t)
				}),
				P = (e, t) => r => ({
					...m(r, t),
					source: u.SEARCH,
					action: e,
					noun: "covid_banner",
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: d.d(r),
					search: d.bb(r, t)
				}),
				w = e => ({
					action: c.c.DISABLE,
					noun: "subreddit_search",
					source: u.SEARCH,
					subreddit: {
						id: null == e ? void 0 : e.id,
						name: null == e ? void 0 : e.name,
						nsfw: null == e ? void 0 : e.isNSFW,
						quarantined: null == e ? void 0 : e.isQuarantined
					}
				});

			function D(e, t) {
				return r => ({
					...m(r, t),
					source: u.SEARCH,
					action: c.c.VIEW,
					noun: `no_${e}_results`,
					correlationId: Object(o.c)(o.a.SearchResults),
					actionInfo: d.d(r),
					search: d.bb(r, t)
				})
			}

			function R(e, t, r, n) {
				return s => ({
					...m(s),
					source: u.SEARCH,
					action: c.c.CLICK,
					noun: e,
					actionInfo: d.d(s),
					search: d.bb(s, t, r, n)
				})
			}

			function U(e, t, r) {
				return n => ({
					...m(n),
					source: u.SEARCH,
					action: c.c.VIEW,
					noun: "query_prompt",
					actionInfo: d.d(n),
					search: d.bb(n, e, t, r)
				})
			}
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
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r("./src/reddit/helpers/localStorage/index.ts");
			const c = {},
				o = (e, t, r) => (c[e] || (c[e] = {
					callbacks: [],
					value: r
				}), c[e].callbacks.push(t), {
					deregister: () => {
						const {
							callbacks: r
						} = c[e], n = r.indexOf(t);
						n > -1 && r.splice(n, 1)
					},
					emit: r => {
						c[e].value !== r && (c[e].value = r, c[e].callbacks.forEach(e => {
							e !== t && e(r)
						}))
					}
				});

			function i(e, t) {
				const r = Object(n.useRef)(null);
				let c;
				c = Object(s.B)(e);
				const [i, a] = Object(n.useState)(null != c ? c : t);
				return Object(n.useEffect)(() => (r.current = o(e, a, t), () => {
					var e;
					return null === (e = r.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(n.useEffect)(() => {
					var e;
					null === (e = r.current) || void 0 === e || e.emit(i)
				}, [i]), [i, function(t) {
					Object(s.Db)(e, t), a(t)
				}]
			}
		},
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var n = r("./src/reddit/components/TrackingHelper/index.tsx");
			const s = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var c = r("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, r, n) => s => {
				const o = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(c.o)(s),
					actionInfo: Object(c.d)(s),
					geo: Object(c.t)(s),
					screen: Object(c.ab)(s),
					subreddit: Object(c.jb)(s),
					outbound: Object(c.F)(s, e, t, n, r)
				};
				return r && (o.comment = Object(c.j)(s, r)), n && (o.post = Object(c.I)(s, n)), o
			};
			var i = r("./src/lib/serviceWorker/index.ts"),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				u = r("./src/telemetry/helpers/getSignatureHeader.ts"),
				l = r("./src/telemetry/models/Event.ts");
			const b = () => {
				const e = Object(a.f)();
				return t => {
					const r = t(e.getState()),
						n = l.g(r),
						s = Object(d.a)(n),
						c = Object(u.b)(s);
					Object(i.b)("sendV2EventsData", {
						data: s,
						headers: c
					})
				}
			};

			function m() {
				const e = Object(n.b)(),
					t = b();
				return (r, n, c, i) => {
					var a, d;
					if (n && function(e) {
							return !e.startsWith("/") && null == e.match(s)
						}(r)) {
						const s = o(r, n, c, i);
						(null === (d = null === (a = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === a ? void 0 : a.serviceWorker) || void 0 === d ? void 0 : d.controller) ? t(s): e(s)
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
			const a = ({
				className: e,
				isFilled: t,
				name: r,
				...n
			}) => s.a.createElement("i", i({
				className: Object(c.a)(e, Object(o.b)(r, t))
			}, n));
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
			t.a = Object(n.forwardRef)(({
				className: e,
				isHighlighted: t,
				outlineClassName: r
			}, n) => s.a.createElement("svg", {
				className: Object(c.a)(i.a.defaultInactiveState, e),
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				width: "12",
				height: "12",
				ref: n
			}, s.a.createElement("circle", {
				cx: "6",
				cy: "6",
				r: "4"
			}), s.a.createElement("path", {
				className: Object(c.a)(i.a.outline, r, {
					[i.a.highlighted]: t
				}),
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
			})))
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
		"./src/reddit/selectors/experiments/econ/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "s", (function() {
				return c
			})), r.d(t, "u", (function() {
				return o
			})), r.d(t, "o", (function() {
				return i
			})), r.d(t, "n", (function() {
				return a
			})), r.d(t, "q", (function() {
				return d
			})), r.d(t, "r", (function() {
				return u
			})), r.d(t, "x", (function() {
				return l
			})), r.d(t, "v", (function() {
				return b
			})), r.d(t, "w", (function() {
				return m
			})), r.d(t, "p", (function() {
				return f
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "m", (function() {
				return y
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "z", (function() {
				return N
			})), r.d(t, "t", (function() {
				return C
			})), r.d(t, "y", (function() {
				return k
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = Object(s.a)(n.Jc),
				o = Object(s.a)(n.Lc),
				i = Object(s.a)(n.Ec),
				a = (Object(s.a)(n.Fc), Object(s.a)(n.Dc)),
				d = Object(s.a)(n.Hc),
				u = Object(s.a)(n.Ic),
				l = Object(s.a)(n.Oc),
				b = Object(s.a)(n.Mc),
				m = Object(s.a)(n.Nc),
				f = Object(s.a)(n.Gc),
				p = Object(s.a)(n.zc),
				O = Object(s.a)(n.xc),
				h = Object(s.a)(n.tc),
				j = Object(s.a)(n.qc),
				I = Object(s.a)(n.mc),
				g = Object(s.a)(n.oc),
				v = Object(s.a)(n.pc),
				S = Object(s.a)(n.sc),
				_ = Object(s.a)(n.nc),
				x = Object(s.a)(n.Ac),
				E = Object(s.a)(n.Bc),
				y = Object(s.a)(n.Cc),
				T = Object(s.a)(n.jc),
				N = Object(s.a)(n.Rc),
				C = Object(s.a)(n.Kc),
				k = Object(s.a)(n.Pc)
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
				return !(!r || Object(n.jf)(r))
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
				u = r("./src/reddit/selectors/moderatorPermissions.ts"),
				l = r("./src/reddit/selectors/platform.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/selectors/user.ts");
			const f = e => e.subreddits.progressModule,
				p = e => {
					const t = Object(l.c)(e);
					if (!t) return;
					if (!Object(u.m)(e, {
							subredditId: t
						})) return;
					if (Object(m.G)(e)) return O(e);
					const r = Object(b.F)(e, {
						identifier: {
							id: t,
							type: o.a.SUBREDDIT
						}
					});
					if (!r || !r.created) return;
					const n = r.created;
					return n ? n * s.Rb < 1639443600180 ? void 0 : O(e) : void 0
				},
				O = Object(n.a)(e => Object(i.c)(e, {
					experimentName: c.Ld,
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
			const c = Object(s.a)(n.s)
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.9bed6d7379e5cc5e9773.js.map