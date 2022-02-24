// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.3de6f4d40609d58c9838.js
// Retrieved at 2/24/2022, 12:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~ModListing~Reddit~Subreddit"], {
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				c = r("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}

			function i(e) {
				const t = t => n.a.createElement(c.b.Consumer, null, r => n.a.createElement(e, o({
					theme: r
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
		},
		"./src/realtime/GQLSubscription/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/higherOrderComponents/makeAsync.tsx"),
				n = r("./src/lib/loadWithRetries/index.ts");
			const c = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(n.a)(() => Promise.all([r.e(1), r.e("RealtimeGQLSubscriptionAsync")]).then(r.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
			});
			t.a = c
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "EMBEDS__UNLOADABLE",
				c = "EMBEDS__LOADABLE",
				o = Object(s.a)(n),
				i = Object(s.a)(c)
		},
		"./src/reddit/actions/pages/modListing/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return s
			})), r.d(t, "e", (function() {
				return n
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
				return p
			}));
			const s = "PAGE__MOD_LISTING_PAGE_PENDING",
				n = "PAGE__MOD_LISTING_PAGE_LOADED",
				c = "PAGE__MOD_LISTING_PAGE_FAILED",
				o = "MOD_LISTING_MORE_POSTS_PENDING",
				i = "MOD_LISTING_MORE_POSTS_LOADED",
				a = "MOD_LISTING_MORE_POSTS_FAILED",
				d = "MOD_LISTING_HIDE_SUBREDDIT_SUCCESS",
				l = "MOD_LISTING_HIDE_SUBREDDIT_PENDING",
				u = "MOD_LISTING_HIDE_SUBREDDIT_FAILED",
				b = "MOD_LISTING_UNHIDE_SUBREDDIT_SUCCESS",
				m = "MOD_LISTING_UNHIDE_SUBREDDIT_PENDING",
				p = "MOD_LISTING_UNHIDE_SUBREDDIT_FAILED"
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
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = (r("./src/reddit/actions/embedAndImage.ts"), r("./src/reddit/actions/video.ts"), r("./src/reddit/helpers/trackers/postList.ts"));
			r("./src/reddit/constants/postLayout.ts"), r("./src/reddit/models/Media/index.ts"), r("./src/reddit/selectors/platform.ts"), r("./src/reddit/selectors/posts.ts");
			r("./src/reddit/selectors/video.ts");
			const c = "POSTLIST__MARKED_END",
				o = "POSTLIST__UNMARKED_END",
				i = Object(s.a)(c),
				a = Object(s.a)(o),
				d = (e, t) => async (r, s) => {
					const c = s();
					e in c.listings.postOrder.fetchedTokens ? e in c.listings.postOrder.ids ? r(a({
						listingKey: e
					})) : n.l(c, e) : r(i({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
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
			const s = "SUBSCRIPTION__FETCH_DATA_PENDING",
				n = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
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
				return C
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "b", (function() {
				return H
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				i = r("./src/reddit/actions/login.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/subscription/constants.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/posts.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				m = r("./src/lib/omitHeaders/index.ts"),
				p = r("./src/reddit/constants/headers.ts");
			var f = r("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				j = r("./src/reddit/models/GqlTopLevelField.ts"),
				g = r("./src/reddit/models/User/index.ts");

			function I(e) {
				const t = [],
					r = [],
					s = {},
					n = {},
					{
						followedRedditorsInfo: c
					} = e.identity;
				for (const i of c.edges) {
					if (i.node.__typename !== g.c.AvailableRedditor || !i.node.profile) continue;
					const e = Object(O.a)(i.node.profile);
					s[e.id] = e;
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
					n[e.id] = e;
					const {
						isFavorite: t
					} = i.node;
					t && r.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: r,
					profiles: s,
					subreddits: n
				}
			}
			var _ = r("./src/reddit/models/Toast/index.ts"),
				S = r("./src/reddit/selectors/profile.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				x = r("./src/reddit/selectors/subscriptions.ts"),
				E = r("./src/reddit/selectors/user.ts");
			const N = () => s.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				y = Object(c.a)(d.c),
				T = Object(c.a)(d.b),
				k = Object(c.a)(d.a),
				P = Object(c.a)(d.h),
				C = (Object(c.a)(d.i), Object(c.a)(d.g), () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(T());
					const n = await Object(f.a)(r());
					if (n.ok) {
						const t = I(n.body.data);
						e(y(t))
					} else e(k({
						error: n.error
					}))
				}),
				w = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				D = (e, t, r) => async (c, d, {
					apiContext: b
				}) => {
					let m = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(v.D)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(S.m)(d(), e.name),
						name: `${n.jc}${e.name}`,
						type: e.type
					});
					if (!Object(E.O)(d())) return c(Object(a.k)({
						actionSource: a.a.Subscribe
					})), void c(Object(i.j)());
					const p = Object(E.k)(d());
					if (p) {
						const t = m.length,
							r = e.length;
						if (m = m.filter(e => !w(p, e)), (e = e.filter(e => !w(p, e))).length !== r || m.length !== t) {
							const e = s.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							c(Object(l.f)(Object(l.e)(e, _.b.Error)))
						}
						if (!e.length && !m.length) return
					}
					c(P({
						identifiers: m,
						nameIdentifiers: e,
						profileModels: d().profiles.models,
						subredditModels: d().subreddits.models,
						subscriptionsCount: Object(x.b)(d()),
						userIsSubscriber: t,
						widgetId: r
					}));
					const O = await Object(f.c)(b(), {
						subredditNames: m.map(({
							name: e
						}) => e),
						subscribe: t
					});
					if (O.ok) {
						const r = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : s.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [s.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							n = s.fbt._("Sucсessfully followed {communityname}", [s.fbt._param("communityname", r)], {
								hk: "1S5AXJ"
							}),
							i = s.fbt._("Sucсessfully unfollowed {communityname}", [s.fbt._param("communityname", r)], {
								hk: "2XWHyB"
							}),
							a = s.fbt._("Sucсessfully joined {communityname}", [s.fbt._param("communityname", r)], {
								hk: "3Al8aF"
							}),
							d = s.fbt._("Sucсessfully left {communityname}", [s.fbt._param("communityname", r)], {
								hk: "2w5JFZ"
							});
						c(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? n : i : t ? a : d
						}))
					} else {
						c(P({
							identifiers: m,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(x.b)(d()),
							userIsSubscriber: !t,
							widgetId: r
						}));
						const n = s.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						c(Object(l.f)(Object(l.e)(n, _.b.Error)))
					}
					return O.ok
				}, U = Object(c.a)(d.f), L = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r(),
						c = Object(v.K)(n, {
							identifier: e
						});
					if (!c) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const o = e.type === u.a.SUBREDDIT ? c.name : `u_${c.name}`,
						i = n.subscriptions.favoriteSubredditOrder || [],
						a = n.subscriptions.favoriteProfileOrder || [],
						d = i.indexOf(e.id),
						b = a.indexOf(e.id),
						m = -1 === d && -1 === b,
						p = n.subreddits.models,
						O = n.profiles.models;
					t(U({
						makeFavorite: m,
						identifier: e,
						subredditModels: p,
						profileModels: O
					}));
					const h = {
							type: e.type,
							name: c.name
						},
						j = () => Object(v.eb)(r(), {
							identifier: h
						});
					(j() || (await t(D([h], !0)), j())) && ((await Object(f.b)(s(), o, m)).ok || (t(U({
						makeFavorite: !m,
						identifier: e,
						subredditModels: p,
						profileModels: O
					})), t(Object(l.f)({
						text: N(),
						kind: _.b.Error
					}))))
				}, A = Object(c.a)(d.d), R = e => async (t, r, {
					apiContext: s
				}) => {
					const c = r().multireddits.models,
						o = () => {
							t(Object(l.f)({
								text: N(),
								kind: _.b.Error
							}))
						},
						i = c[e];
					if (!i) return void o();
					const a = !i.isFavorited;
					t(A({
						makeFavorite: a,
						multiredditPath: e,
						multiredditsModelsState: c
					})), (await ((e, t, r) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: n.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(s(), e, a)).ok || (t(A({
						makeFavorite: !a,
						multiredditPath: e,
						multiredditsModelsState: c
					})), o())
				}, M = Object(c.a)(d.e), H = e => async (t, r, {
					apiContext: c
				}) => {
					const o = r(),
						i = o.multireddits.models;
					if (!Object(E.O)(o)) return;
					const a = (e = !0) => {
							t(Object(l.f)({
								text: s.fbt._("Sorry, failed to {followAction}", [s.fbt._param("followAction", e ? s.fbt._("follow", null, {
									hk: "2I4uia"
								}) : s.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: _.b.Error
							}))
						},
						d = i[e];
					if (!d) return void a();
					const u = !d.isFollowed;
					t(M({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, r) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: n.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: r ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(c(), e, u)).ok || (t(M({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: i
					})), a(u))
				}
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./node_modules/react/index.js");
			const s = e => new Promise((t, r) => {
				const s = new Image;
				s.onload = () => t(s), s.onerror = r, s.src = e
			})
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lottie-web/build/player/lottie.js"),
				n = r.n(s),
				c = r("./node_modules/react/index.js"),
				o = r.n(c),
				i = r("./src/reddit/components/LottieAnimation/util.ts");
			const a = o.a.memo(e => {
				const t = o.a.createRef(),
					{
						assetData: r,
						assetUrl: s,
						className: a,
						hidden: d,
						loop: l,
						useCanvasRenderer: u,
						onClick: b,
						prefersReducedAnimation: m
					} = e,
					[p, f] = Object(c.useState)(r);
				Object(c.useEffect)(() => {
					s ? Object(i.a)(s).then(f) : r && f(r)
				}, [s, r]);
				const [O, h] = Object(c.useState)(null);
				Object(c.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || O || !p) return;
					const r = n.a.loadAnimation({
						autoplay: !1,
						renderer: u ? "canvas" : "svg",
						loop: l,
						container: e,
						animationData: p
					});
					h(r)
				}, [l, t, O, p]), Object(c.useEffect)(() => {
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
				return n
			}));
			r("./src/reddit/components/ImageWithFallback/index.tsx");
			const s = {};

			function n(e) {
				let t = s[e];
				return t || (t = s[e] = fetch(e, {
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
				return s
			}));
			var s, n, c = r("./node_modules/react/index.js"),
				o = r.n(c),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(s || (s = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(n || (n = {}));
			var d = r("./src/lib/constants/index.ts"),
				l = r("./src/reddit/helpers/postCollection.ts");
			const u = [d.Nb.COMMENTS, d.Nb.COLLECTION_COMMENTS],
				b = (e, t) => {
					if (!e) return [];
					const r = u.includes(e),
						n = e === d.Nb.COLLECTION_COMMENTS || t && Object(l.a)(t),
						c = d.V.has(e),
						o = d.Cb.has(e),
						i = e === d.Nb.SUBREDDIT,
						a = e === d.Nb.TOPIC;
					let b, m, p;
					return c && !i || o ? b = s.HeaderSelector : n ? b = s.Collection : r ? b = s.PostComments : a && (b = s.TopicHeader), (c || o || n || r) && (m = s.Widget), (c || r) && (p = s.PostItem), [b, m, p]
				};
			var m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/selectors/platform.ts"),
				f = r("./src/reddit/components/SEOTitle/index.m.less"),
				O = r.n(f);
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
				g = Object(i.b)(() => Object(a.a)((e, {
					pageLayer: t
				}) => t && Object(p.n)(e, {
					page: t
				}), (e, {
					pageLayer: t
				}) => t && t.meta && t.meta.name, (e, {
					type: t
				}) => t, (e, t, r) => ({
					level: b(t, e).indexOf(r) + 1 || void 0
				})));
			class I extends o.a.Component {
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
			t.b = j(g(I))
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
				return v
			}));
			var s = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./node_modules/react/index.js"),
				o = r.n(c),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/components/UserIcon/index.tsx"),
				u = r("./src/reddit/constants/colors.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				p = r("./src/reddit/icons/fonts/index.tsx"),
				f = r("./src/reddit/models/Subreddit/index.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/components/SubredditIcon/index.m.less"),
				j = r.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = d.a.wrapped(l.a, "UserIcon", j.a),
				_ = d.a.img("Image", j.a),
				S = ({
					iconColor: e,
					...t
				}) => o.a.createElement(_, g({
					style: {
						backgroundColor: e || ""
					}
				}, t)),
				v = d.a.div("BackupImage", j.a),
				x = Object(b.u)();
			t.b = x(e => {
				var t;
				const r = Object(i.e)(O.bb);
				let c, d, l;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: r
					} = Object(m.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(f.h)(e.subredditOrProfile) ? l = o.a.createElement(I, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (c = t, d = r)
				} else c = e.shouldHideNsfwIcon ? `${s.a.assetPath}/img/avatar_over18.png` : e.iconUrl, d = e.primaryColor || u.a.alienblue;
				return c ? l = o.a.createElement(S, {
					alt: n.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: d,
					role: "presentation",
					src: c
				}) : l || (l = o.a.createElement(p.a, {
					name: "community",
					isFilled: !r,
					className: Object(a.a)(e.className, j.a.defaultCommunityIcon, {
						[j.a.mNightmode]: r
					}),
					style: r ? {
						backgroundColor: e.redditStyle ? u.a.alienblue : d
					} : {
						color: e.redditStyle ? u.a.alienblue : d
					}
				})), e.linkTo ? o.a.createElement("a", g({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					href: e.linkTo
				}), l) : o.a.createElement(o.a.Fragment, null, l)
			})
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return b
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/telemetry/index.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = n.a.createContext(() => {});

			function l({
				children: e
			}) {
				const t = Object(c.f)(),
					r = Object(s.useCallback)(e => {
						{
							const r = t.getState(),
								s = e(r);
							Object(i.a)({
								...o.o(r),
								...s
							})
						}
					}, [t]);
				return n.a.createElement(d.Provider, {
					value: r
				}, e ? n.a.Children.only(e) : null)
			}

			function u() {
				return Object(s.useContext)(d)
			}

			function b(e) {
				function t(t) {
					const r = u();
					return n.a.createElement(e, a({}, t, {
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				c = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				i = r("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				a = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				d = r.n(a);
			t.default = e => {
				const {
					showPresence: t,
					onceInViewport: r
				} = e, a = Object(s.useRef)(null), l = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && r && r()
					})
				}, [r]);
				return Object(o.a)(a, l), n.a.createElement(i.a, {
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
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				c = r.n(n),
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
					alt: s.fbt._("User avatar", null, {
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
				withoutBorder: "_1cG4OXwlWElX_dWTGCA2ew",
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
				return p
			}));
			var s = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./node_modules/react/index.js"),
				o = r.n(c),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				l = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = r.n(u);
			const m = `${s.a.assetPath}/img/avatar_over18_square.png`,
				p = e => !e || e.includes("avatar_default_");
			t.b = e => {
				const {
					className: t,
					iconUrl: r,
					isCurrentUser: s,
					isNightMode: c,
					isNSFW: u,
					nsfwIconUrl: f,
					shouldHideNSFW: O
				} = e;
				if (Object(i.e)(e => {
						p(r) && Object(l.h)(e)
					}), s && p(r) || !s && !r) return o.a.createElement(d.a, {
					className: Object(a.a)(b.a.DefaultUserIcon, t, {
						[b.a.mNightmode]: c
					})
				});
				const h = !s && u && O ? f || m : r;
				return o.a.createElement("img", {
					alt: n.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(a.a)(b.a.UserIcon, t),
					src: h
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/react/index.js"),
				c = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/realtime/GQLSubscription/async.tsx"),
				d = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				u = r("./src/reddit/models/User/index.ts"),
				b = r("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				m = r("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				p = r("./src/reddit/components/UserIcon/UserIcon.tsx"),
				f = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/components/LottieAnimation/index.tsx"),
				h = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				j = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				g = r.n(j);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = () => {},
				S = Object(i.c)({
					currentUser: f.k,
					isNightMode: f.bb,
					shouldHideNSFW: f.E,
					user: f.wb,
					isProfileAvatarChangeFixEnabled: h.a
				}),
				v = Object(o.b)(S);
			t.a = v(e => {
				const {
					authorId: t,
					collapsed: r,
					currentUser: o,
					iconUrl: i,
					isCommentAuthorBlocked: f,
					isHighlighted: h,
					isNft: j,
					isNSFW: S,
					shouldUseOnlineOverride: v,
					isOnlineOverrideValue: x,
					isOnlineStatusLoadTest: E,
					isProfileIcon: N,
					omitResponsivePresenceWrapper: y,
					onPresenceIndicatorInViewport: T,
					shouldShowPresenceIndicator: k,
					user: P,
					userName: C,
					isProfileAvatarChangeFixEnabled: w,
					...D
				} = e, U = !!o && Object(u.e)(o) === C, L = U ? o : P, A = L && L.accountIcon || i, R = P ? P.isNSFW : S, M = Object(d.b)(A) && !f, H = M ? c.a.createElement(m.a, {
					headshot: A,
					className: e.className
				}) : c.a.createElement(p.b, I({}, D, {
					iconUrl: f && r ? "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png" : A,
					isCurrentUser: U,
					isNSFW: R
				})), [G, F] = Object(n.useState)(!1), B = Object(n.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "ONLINE_STATUS_INDICATOR",
							userID: t
						}
					}
				}), [t]), W = Object(n.useCallback)(e => {
					const {
						isOnline: t
					} = e.subscribe.data;
					F(t)
				}, []), q = Object(n.useRef)(null), [z, V] = Object(n.useState)(!1), K = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: r
						} = e, s = 1 !== r;
						t ? V(!0) : s && V(!1)
					})
				}, []), X = Object(n.useRef)({
					rootMargin: "750px 0px 1000px 0px"
				});
				return Object(l.a)(q, K, X.current), y ? H : c.a.createElement("div", {
					className: Object(s.a)(g.a.userIconWrapper, {
						[g.a.nftUserIcon]: j,
						[g.a.hasHeadShotWrapper]: M,
						[g.a.isProfileIcon]: N && w
					}),
					ref: q
				}, j && c.a.createElement(O.a, {
					className: Object(s.a)(g.a.nftAnimation, {
						[g.a.withoutBorder]: Object(d.e)(i)
					}),
					assetUrl: Object(d.a)(i),
					loop: !0
				}), H, k && (G || v && x) && c.a.createElement(b.default, {
					showPresence: !0,
					isHighlighted: h,
					onceInViewport: T
				}), (k || E) && !v && z && c.a.createElement(a.a, {
					variables: B,
					onData: k ? W : _,
					queryKey: "isUserOnline"
				}))
			})
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
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
				return p
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "i", (function() {
				return O
			}));
			const s = "DraftEditor-contentwrapper",
				n = "public-DraftStyleDefault-block",
				c = "data-offset-key",
				o = "hovered",
				i = "scrollerItem",
				a = "threadline",
				d = "header-user-dropdown",
				l = "voteButton",
				u = "RichTextJSON-root",
				b = "ImageBox-image",
				m = "content-type-link",
				p = "styled-outbound-link",
				f = "ListingLayout-backgroundContainer",
				O = "ListingLayout-outerContainer"
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const o = n.a.createContext(!1);

			function i(e) {
				function t(t) {
					return n.a.createElement(o.Consumer, null, r => n.a.createElement(e, c({}, t, {
						isOverlay: r
					})))
				}
				return t.displayName = `WithOverlay(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return T
			})), r.d(t, "c", (function() {
				return k
			}));
			var s = r("./node_modules/lodash/omit.js"),
				n = r.n(s),
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
				p = r("./src/lib/redditId/index.ts"),
				f = r("./src/reddit/actions/post.ts"),
				O = r("./src/reddit/constants/adEvents.ts"),
				h = r("./src/reddit/helpers/getVendorMetadata.ts"),
				j = r("./src/reddit/helpers/pixels.ts"),
				g = r("./src/reddit/helpers/trackers/ads.ts"),
				I = r("./src/reddit/hooks/useOutboundClickTracking.ts"),
				_ = r("./src/reddit/selectors/posts.ts"),
				S = r("./src/reddit/selectors/telemetry.ts"),
				v = r("./src/reddit/selectors/user.ts");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = Object(l.a)(v.a, v.k, (e, {
					isSponsored: t,
					postId: r
				}) => t && r ? Object(_.b)(e, r) : null, _.G, S.d, (e, t, r, s, n) => ({
					allowClickTracking: e,
					basePixelMetadata: r,
					userId: t ? Object(p.a)(t.id) : null,
					post: s,
					pageType: n.pageType
				})),
				N = Object(d.b)(E, e => ({
					fireAdPixelsOfType: (t, r) => e(Object(f.z)(t, r)),
					recordClick: (t, r, s) => {
						const n = t.events.filter(({
							type: e,
							url: t
						}) => e === O.a.Click && Object(j.b)(t));
						Object(j.c)(n), e(Object(f.p)(String(r), {
							postId: t.id,
							vendorMetadata: s
						}))
					}
				})),
				y = (e, t, r, s) => {
					const n = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					s && t.outboundUrl && n && (e.href = b(t.outboundUrl, r), e.href = function(e) {
						return Object(u.a)(e, {
							web_redirect: "true"
						})
					}(e.href))
				},
				T = (e, t, r) => {
					let s, n = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(r)) {
						n = Object(h.a)(e, t, O.a.Click);
						const {
							url: c,
							query: i
						} = o.a.parseUrl(r);
						s = o.a.stringifyUrl({
							url: c,
							query: {
								...i,
								...n
							}
						})
					} else s = r;
					return {
						url: s,
						metadata: n
					}
				},
				k = (e, t, r) => {
					const s = T(t, r, e.href);
					return e.href = s.url, s.metadata
				},
				P = ({
					isSponsored: e,
					source: t
				}) => !!(e && (null == t ? void 0 : t.outboundUrl)),
				C = N(e => {
					const t = Object(i.useRef)(null),
						r = Object(I.a)(),
						{
							allowClickTracking: s,
							basePixelMetadata: c,
							commentId: o,
							fireAdPixelsOfType: d,
							href: l,
							isSponsored: u,
							pageType: b,
							post: p,
							postId: f,
							recordClick: h,
							source: j,
							sourceElement: _,
							userId: S
						} = e;
					let v = n()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "post", "recordClick", "commentId", "source", "sourceElement", "userId", "pageType"]);
					const E = j && j.outboundUrl && u ? j.outboundUrl : l;
					return v = {
						...v,
						href: E,
						rel: u ? m.b : m.a,
						target: m.d.BLANK
					}, !j || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: r
						} = e;
						return !(!t || !r) && (t > r + 3e5 || t < r - 36e5)
					})(j) ? a.a.createElement("a", x({}, v, {
						onClick: () => r(l, _, o, f)
					})) : a.a.createElement("a", x({}, v, {
						onMouseDown: r => {
							if (!P(e)) return !(1 !== r.button && 2 !== r.button && !r.ctrlKey) || void y(r.currentTarget, j, S, s);
							t.current = k(r.currentTarget, f, c)
						},
						onClick: () => {
							p && (P(e) && (h(p, O.a.Click, t.current), Object(g.a)(p, b)), d(p, O.a.Click), r(l, _, o, f))
						},
						onMouseLeave: e => {
							u || ((e, t) => {
								e.href = t
							})(e.currentTarget, E)
						},
						onTouchStart: e => y(e.currentTarget, j, S, s),
						"data-testid": "outbound-link"
					}))
				});
			t.b = C
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			}));
			var s = r("./src/redditGQL/operations/SubscribedSubreddits.json"),
				n = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(o.a)(e, s);
			const l = (e, {
					subredditIds: t,
					subredditNames: r,
					subscribe: s
				}) => Object(c.a)(Object(i.a)(e, [a.a]), {
					method: n.jb.POST,
					endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
					data: {
						action: s ? "sub" : "unsub",
						sr: t && t.join(",") || void 0,
						sr_name: r && r.join(",") || void 0,
						api_type: "json"
					}
				}),
				u = (e, t, r) => Object(c.a)(Object(i.a)(e, [a.a]), {
					method: n.jb.POST,
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
			var s = r("./node_modules/polished/dist/polished.es.js"),
				n = r("./src/reddit/models/NewStructuredStyles/index.ts");
			const c = e => Object(s.b)(e) < .6;

			function o(e, t = n.a.bodyText, r = n.b.bodyText) {
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
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/helpers/localStorage/index.ts"),
				c = r("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, r) => n => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...c.o(n),
					subreddit: c.jb(n),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${r}` : `DESKTOP ${r}`,
						count: 1,
						type: s.f.SWITCH_HOUSE_AD
					}
				}),
				i = (e, t) => {
					t && (Object(n.Eb)(e.postId), Object(n.Mb)(t)), e.impressionIdStr ? Object(n.Fb)(e.impressionIdStr) : e.impressionId && Object(n.Fb)(e.impressionId)
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return y
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "q", (function() {
				return P
			})), r.d(t, "r", (function() {
				return C
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "s", (function() {
				return D
			})), r.d(t, "c", (function() {
				return U
			})), r.d(t, "l", (function() {
				return L
			})), r.d(t, "p", (function() {
				return A
			})), r.d(t, "i", (function() {
				return R
			})), r.d(t, "j", (function() {
				return M
			})), r.d(t, "g", (function() {
				return H
			})), r.d(t, "b", (function() {
				return B
			})), r.d(t, "a", (function() {
				return W
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "m", (function() {
				return z
			})), r.d(t, "t", (function() {
				return X
			})), r.d(t, "x", (function() {
				return $
			})), r.d(t, "e", (function() {
				return Y
			})), r.d(t, "d", (function() {
				return J
			})), r.d(t, "v", (function() {
				return re
			})), r.d(t, "u", (function() {
				return se
			})), r.d(t, "w", (function() {
				return ne
			})), r.d(t, "h", (function() {
				return ce
			}));
			var s = r("./node_modules/lodash/pick.js"),
				n = r.n(s),
				c = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makePostDraftPageKey/index.ts"),
				i = r("./src/reddit/constants/parameters.ts"),
				a = r("./src/reddit/constants/tracking.ts"),
				d = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				l = r("./src/reddit/helpers/routeKey/index.ts"),
				u = r("./src/reddit/helpers/trackers/postComposer.ts"),
				b = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = r("./src/reddit/models/Comment/index.ts"),
				p = r("./src/reddit/models/Post/index.ts"),
				f = r("./src/reddit/routes/subreddit/index.ts"),
				O = r("./src/reddit/selectors/profile.ts"),
				h = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/lib/makePostCreationPageKey/index.ts"),
				g = r("./src/lib/makeSearchKey/index.ts"),
				I = r("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = r("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				S = r("./src/reddit/helpers/trackers/searchResults.ts"),
				v = r("./src/reddit/selectors/postDraft.ts"),
				x = r("./src/reddit/selectors/searchResults.ts"),
				E = r("./src/reddit/selectors/telemetry.ts"),
				N = r("./src/telemetry/index.ts");
			const y = (e, t, r, s, a, u) => {
					const {
						route: O
					} = e, {
						name: h
					} = O.meta;
					if (!h) return;
					const I = t.platform.currentPage;
					switch (h) {
						case c.Nb.COMMENTS: {
							const {
								partialCommentId: n,
								partialPostId: c
							} = e.match.params, o = Object(p.t)(c), i = Object(l.a)(e, t, t.posts.models[o]);
							if (!i) return;
							const a = n && Object(m.h)(n),
								{
									sortToUse: u
								} = Object(d.a)(t, o);
							Object(N.a)(U(i, o, a, r, s, u)(t));
							break
						}
						case c.Nb.INDEX:
						case c.Nb.LISTING:
						case c.Nb.MULTIREDDIT:
						case c.Nb.SUBREDDIT: {
							const n = Object(l.c)(e, t);
							if (!n.listingKey) return;
							const {
								params: o,
								queryParams: i,
								path: a
							} = e.match, {
								sort: d = (n.sort ? n.sort : c.W.HOT)
							} = o, u = i.t, b = a === f.a;
							Object(N.a)(k({
								key: n.listingKey,
								sort: d,
								timerType: r,
								timerMillis: s,
								timeSort: u,
								isPredictionsPage: b
							})(t));
							break
						}
						case c.Nb.TOPIC: {
							const n = Object(l.c)(e, t);
							if (!n.listingKey) return;
							const {
								params: o
							} = e.match, i = n.sort ? n.sort : c.X, {
								sort: a = i
							} = o;
							Object(N.a)(k({
								key: n.listingKey,
								sort: a,
								timerType: r,
								timerMillis: s
							})(t));
							break
						}
						case c.Nb.PROFILE_OVERVIEW: {
							const n = Object(l.d)(e, t);
							if (!n) return;
							const {
								params: o,
								queryParams: i
							} = e.match, {
								sort: a = c.Eb
							} = o, d = i.t;
							Object(N.a)(P(n, a, r, s, d)(t));
							break
						}
						case c.Nb.PROFILE_POSTS: {
							const n = Object(l.d)(e, t);
							if (!n) return;
							const {
								queryParams: o
							} = e.match, {
								sort: i = c.Eb,
								t: a = c.Fb
							} = o;
							Object(N.a)(C(n, i, r, s, a)(t));
							break
						}
						case c.Nb.PROFILE_COMMENTS: {
							const n = Object(l.d)(e, t);
							if (!n) return;
							const {
								queryParams: o
							} = e.match, {
								sort: i = c.Eb,
								t: a = c.Fb
							} = o;
							Object(N.a)(w(n, i, r, s, a)(t));
							break
						}
						case c.Nb.PROFILE_PRIVATE: {
							const n = Object(l.d)(e, t);
							if (!n) return;
							Object(N.a)(D(n)(s, r)(t));
							break
						}
						case c.Nb.FOLLOWERS:
							G(t);
							break;
						case c.Nb.PROFILE_MODERATION:
							u && A(t, !0);
							break;
						case c.Nb.SETTINGS: {
							const n = e;
							Object(N.a)(K(r, s)(t)), n.match.params.page === c.cc.Profile && Object(b.l)(t);
							break
						}
						case c.Nb.POST_CREATION:
							if (u && a) {
								const e = Object(j.a)(a);
								Object(N.a)(L(e, r, s)(t))
							}
							break;
						case c.Nb.POST_DRAFT: {
							const {
								draftId: n
							} = e.match.params, c = Object(o.a)(e.match.params);
							if (!c) return;
							F(t, c, n, r, s);
							break
						}
						case c.Nb.SUBREDDIT_WIKI:
							Object(N.a)(Q(r, s)(t));
							break;
						case c.Nb.COINS:
							Object(N.a)(B(r, s)(t)), Object(N.a)(W()(t));
							break;
						case c.Nb.PREMIUM:
							Object(N.a)(q(r, s)(t)), Object(N.a)(z()(t));
							break;
						case c.Nb.APPEAL:
							Object(N.a)(V(r, s)(t));
							break;
						case c.Nb.INBOX_PAGES:
							u && H(t);
							break;
						case c.Nb.MODERATION_PAGES:
							u && R(t, !0, a ? a.subredditName : null, a ? a.profileName : null);
							break;
						case c.Nb.COLLECTION_COMMENTS:
							u && ne(t, !0);
							break;
						case c.Nb.MODQUEUE_PAGES:
							u && M(t, a ? a.subredditName : null, a ? a.profileName : null);
							break;
						case c.Nb.SUBREDDIT_LEADERBOARD:
							u && Object(N.a)(Y()(t));
							break;
						case c.Nb.SEARCH_RESULTS:
							if (u) {
								const c = Object(l.e)(e, t);
								if (!c) return;
								Object(N.a)(re(c, Object(g.e)(n()(I && I.queryParams || {}, i.u)), r, s, I, Object(x.k)(t))(t))
							}
							break;
						case c.Nb.PUBLIC_ACCESS_NETWORK:
							u && Object(N.a)(X()(t));
							break;
						case c.Nb.GEOTAGGING:
							u && Object(N.a)(J()(t));
							break;
						case c.Nb.SUBREDDIT_CREATION:
							u && Object(N.a)($()(t));
							break;
						case c.Nb.MOD_LISTING:
							u && ce(t, !0)
					}
				},
				T = e => ({
					...E.o(e),
					userPreferences: E.sb(e)
				}),
				k = ({
					key: e,
					sort: t,
					timerType: r,
					timerMillis: s,
					timeSort: n,
					flairTitle: c,
					isPredictionsPage: o
				}) => i => {
					const {
						api: a
					} = i.listings.postOrder, d = !a.error[e] && !a.pending[e], l = o ? {
						paneName: "predictions",
						reason: "predictions_tournament"
					} : {};
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...T(i),
						actionInfo: E.d(i, {
							success: d,
							...l
						}),
						customFeed: E.m(i),
						listing: E.A(i, e, {
							sort: t,
							sortTime: n
						}),
						subreddit: E.jb(i),
						timer: E.pb(r, s),
						userSubreddit: E.tb(i),
						adblock: E.e(i),
						postFlair: {
							title: c
						},
						predictions: o ? Object(E.Q)(i) : void 0
					}
				},
				P = (e, t, r, s, n) => c => {
					const o = E.A(c, e);
					o && (o.sort = t, n && (o.sortTime = n));
					const {
						api: i
					} = c.listings.postOrder, a = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...T(c),
						actionInfo: E.d(c, {
							success: a
						}),
						profile: E.S(c),
						snoovatar: E.gb(c),
						subreddit: E.jb(c),
						timer: E.pb(r, s),
						userSubreddit: E.tb(c),
						adblock: E.e(c)
					}
				},
				C = (e, t, r, s, n) => c => {
					const o = E.A(c, e);
					o && (o.sort = t, n && (o.sortTime = n));
					const {
						api: i
					} = c.listings.postOrder, a = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...T(c),
						actionInfo: E.d(c, {
							success: a
						}),
						profile: E.S(c),
						subreddit: E.jb(c),
						timer: E.pb(r, s),
						userSubreddit: E.tb(c),
						adblock: E.e(c)
					}
				},
				w = (e, t, r, s, n) => c => {
					const o = E.V(c, e);
					o && (o.sort = t, n && (o.sortTime = n));
					const {
						api: i
					} = c.profileCommentsPage, a = !i.error[e] && !i.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...T(c),
						actionInfo: E.d(c, {
							success: a
						}),
						profile: E.S(c),
						subreddit: E.jb(c),
						timer: E.pb(r, s),
						userSubreddit: E.tb(c),
						adblock: E.e(c)
					}
				},
				D = e => (t, r) => s => {
					const n = !s.profilePrivatePage.api.error[e] && !s.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...T(s),
						actionInfo: E.d(s, {
							success: n
						}),
						profile: E.S(s),
						subreddit: E.jb(s),
						timer: E.pb(r, t),
						userSubreddit: E.tb(s),
						adblock: E.e(s)
					}
				},
				U = (e, t, r, s, n, c) => o => {
					const {
						api: i
					} = o.pages.comments, a = !i.error[e] && !i.pending[e], d = {
						source: "global",
						action: "view",
						noun: "screen",
						...T(o),
						actionInfo: E.d(o, {
							success: a
						}),
						post: E.J(o, t),
						profile: E.S(o),
						subreddit: E.jb(o),
						timer: E.pb(s, n),
						userSubreddit: E.tb(o),
						adblock: E.e(o),
						postEvent: E.M(o, {
							postId: t
						}),
						postCollection: E.L(o, {
							postId: t
						}),
						listing: E.A(o, void 0, {
							sort: c
						})
					};
					return r && (d.comment = E.i(o, r)), d
				},
				L = (e, t, r) => s => {
					const n = s.creations.api.page.fetched[e],
						c = s.platform.currentPage ? s.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...T(s),
						actionInfo: E.d(s, {
							success: n
						}),
						post: c ? E.J(s, c) : void 0,
						subreddit: E.jb(s),
						timer: E.pb(t, r),
						userSubreddit: E.tb(s),
						adblock: E.e(s)
					}
				},
				A = (e, t) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: E.d(e, {
							success: t
						})
					})
				},
				R = (e, t, r, s) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: E.d(e, {
							success: t
						}),
						profile: E.T(e, Object(O.m)(e, s)),
						subreddit: E.kb(e, Object(h.D)(e, r)),
						userSubreddit: E.tb(e),
						adblock: E.e(e)
					})
				},
				M = (e, t, r) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						profile: E.T(e, Object(O.m)(e, r)),
						subreddit: E.kb(e, Object(h.D)(e, t)),
						userSubreddit: E.tb(e),
						adblock: E.e(e)
					})
				},
				H = e => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: E.d(e)
					})
				},
				G = e => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: E.d(e)
					})
				},
				F = (e, t, r, s, n) => {
					const c = e.creations.api.page.pending[t],
						o = !e.creations.api.page.error[t] && !c && !!r,
						i = Object(v.h)(e, r);
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: E.d(e, {
							success: o
						}),
						subreddit: E.jb(e),
						timer: E.pb(s, n),
						userSubreddit: E.tb(e),
						adblock: E.e(e),
						...i ? Object(u.r)(e, i) : {}
					})
				},
				B = (e, t) => r => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(I.c)(I.a.GoldPayment),
					...T(r),
					timer: E.pb(e, t),
					adblock: E.e(r)
				}),
				W = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(e)
				}),
				q = (e, t) => r => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(I.c)(I.a.GoldPayment),
					...T(r),
					timer: E.pb(e, t),
					adblock: E.e(r)
				}),
				z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(e)
				}),
				V = (e, t) => r => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...T(r),
					timer: E.pb(e, t)
				}),
				K = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(r),
					timer: E.pb(e, t)
				}),
				X = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: E.jb(e),
					...T(e)
				}),
				$ = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(e)
				}),
				Y = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...T(e)
				}),
				Q = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(r),
					customFeed: E.m(r),
					subreddit: E.jb(r),
					timer: E.pb(e, t),
					userSubreddit: E.tb(r),
					adblock: E.e(r)
				}),
				J = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(e)
				}),
				Z = {
					source: "global",
					action: a.c.VIEW,
					noun: "screen"
				},
				ee = ({
					state: e,
					searchOptions: t,
					pageLayer: r,
					nsfw: s,
					searchTelemetrySource: n,
					searchSwitcherType: o,
					srShouldBeRestricted: i = !0,
					originElement: a,
					treatment: d
				}) => {
					var l, u, b, m;
					const p = E.ib(r),
						f = (null === (u = null === (l = e.platform.currentPage) || void 0 === l ? void 0 : l.urlParams) || void 0 === u ? void 0 : u.subredditName) ? E.lb(e, e.platform.currentPage.urlParams.subredditName) : void 0,
						O = E.cb(e, t, n, i, r || void 0);
					return {
						...O,
						range: null !== (b = O.range) && void 0 !== b ? b : c.Rb,
						sort: null !== (m = O.sort) && void 0 !== m ? m : c.Qb,
						originElement: null != a ? a : o,
						nsfw: s,
						protocolName: d,
						structureType: p,
						subredditId: t.restrict_sr && (null == f ? void 0 : f.id) ? f.id : void 0,
						subredditName: t.restrict_sr && (null == f ? void 0 : f.name) ? f.name : void 0
					}
				},
				te = e => !!e && {
					correlationId: Object(I.c)(I.a.SearchResults)
				},
				re = (e, t, r, s, n, o, i, a) => d => {
					let l = !0;
					if (t.type.indexOf(c.bc.Posts) > -1) {
						const {
							api: t
						} = d.listings.listingOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(c.bc.Subreddits) > -1 || t.type.indexOf(c.bc.Users) > -1) {
						const {
							api: t
						} = d.listings.postOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					const u = E.H(d, n);
					return {
						...S.e(d, t),
						...Z,
						...E.o(d),
						actionInfo: E.d(d, {
							success: l,
							paneName: u
						}),
						timer: E.pb(r, s),
						search: ee({
							state: d,
							searchOptions: t,
							pageLayer: null != n ? n : void 0,
							nsfw: o,
							searchSwitcherType: i,
							treatment: a,
							searchTelemetrySource: _.a.SERP
						}),
						...te(i),
						userPreferences: E.eb(d)
					}
				},
				se = (e, t, r, s, n) => c => ({
					...E.o(c),
					...Z,
					actionInfo: {
						...E.d(c),
						pageType: "search_dropdown"
					},
					search: ee({
						state: c,
						searchOptions: e,
						pageLayer: t,
						nsfw: r,
						searchTelemetrySource: _.a.Typeahead,
						searchSwitcherType: void 0,
						originElement: E.a.SearchBar,
						treatment: n
					}),
					...te(s),
					userPreferences: E.eb(c)
				}),
				ne = (e, t) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: E.d(e, {
							success: t
						})
					})
				},
				ce = (e, t) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: E.d(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js");
			t.a = function(e, t, r) {
				Object(s.useEffect)(() => {
					const s = e && e.current;
					if (!s || "undefined" == typeof IntersectionObserver) return;
					const n = new IntersectionObserver(t, r);
					return n.observe(s), () => {
						n.unobserve(s)
					}
				}, [e, t, r])
			}
		},
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var s = r("./src/reddit/components/TrackingHelper/index.tsx");
			const n = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var c = r("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, r, s) => n => {
				const o = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(c.o)(n),
					actionInfo: Object(c.d)(n),
					geo: Object(c.t)(n),
					screen: Object(c.bb)(n),
					subreddit: Object(c.jb)(n),
					outbound: Object(c.G)(n, e, t, s, r)
				};
				return r && (o.comment = Object(c.i)(n, r)), s && (o.post = Object(c.J)(n, s)), o
			};
			var i = r("./src/lib/serviceWorker/index.ts"),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				l = r("./src/telemetry/helpers/getSignatureHeader.ts"),
				u = r("./src/telemetry/models/Event.ts");
			const b = () => {
				const e = Object(a.f)();
				return t => {
					const r = t(e.getState()),
						s = u.g(r),
						n = Object(d.a)(s),
						c = Object(l.b)(n);
					Object(i.b)("sendV2EventsData", {
						data: n,
						headers: c
					})
				}
			};

			function m() {
				const e = Object(s.b)(),
					t = b();
				return (r, s, c, i) => {
					var a, d;
					if (s && function(e) {
							return !e.startsWith("/") && null == e.match(n)
						}(r)) {
						const n = o(r, s, c, i);
						(null === (d = null === (a = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === a ? void 0 : a.serviceWorker) || void 0 === d ? void 0 : d.controller) ? t(n): e(n)
					}
				}
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = s.b
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				c = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/fonts/helpers.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const a = ({
				className: e,
				isFilled: t,
				name: r,
				...s
			}) => n.a.createElement("i", i({
				className: Object(c.a)(e, Object(o.b)(r, t))
			}, s));
			a.displayName = "Icon";
			const d = (e, t) => r => n.a.createElement(a, i({
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				c = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				i = r.n(o);
			t.a = Object(s.forwardRef)(({
				className: e,
				isHighlighted: t,
				outlineClassName: r
			}, s) => n.a.createElement("svg", {
				className: Object(c.a)(i.a.defaultInactiveState, e),
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				width: "12",
				height: "12",
				ref: s
			}, n.a.createElement("circle", {
				cx: "6",
				cy: "6",
				r: "4"
			}), n.a.createElement("path", {
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 320 320",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"
			}), n.a.createElement("path", {
				d: "m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
			}), n.a.createElement("path", {
				d: "m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"
			}), n.a.createElement("path", {
				d: "m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
			}), n.a.createElement("path", {
				d: "m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
			}), n.a.createElement("path", {
				d: "m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
			}), n.a.createElement("path", {
				d: "m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
			}), n.a.createElement("path", {
				d: "m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"
			}), n.a.createElement("path", {
				d: "m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
			}), n.a.createElement("path", {
				d: "m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
			}), n.a.createElement("path", {
				d: "m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
			}), n.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
			}), n.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z",
				fill: "none"
			}), n.a.createElement("path", {
				d: "m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
			}), n.a.createElement("circle", {
				cx: "238.47",
				cy: "80.13",
				r: "22.93"
			}), n.a.createElement("path", {
				d: "m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
			})))
		},
		"./src/reddit/selectors/experiments/newCommunityProgressV3.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return O
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/constants/index.ts"),
				c = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/constants/posts.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/experiments/index.ts"),
				d = r("./src/reddit/selectors/experiments/utils.ts"),
				l = r("./src/reddit/selectors/moderatorPermissions.ts"),
				u = r("./src/reddit/selectors/platform.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/selectors/user.ts");
			const p = e => e.subreddits.progressModule,
				f = e => {
					const t = Object(u.c)(e);
					if (!t) return;
					if (!Object(l.m)(e, {
							subredditId: t
						})) return;
					if (Object(m.L)(e)) return O(e);
					const r = Object(b.G)(e, {
						identifier: {
							id: t,
							type: o.a.SUBREDDIT
						}
					});
					if (!r || !r.created) return;
					const s = r.created;
					return s ? s * n.Sb < 1639443600180 ? void 0 : O(e) : void 0
				},
				O = Object(s.a)(e => Object(i.c)(e, {
					experimentName: c.Wd,
					experimentEligibilitySelector: a.e
				}), d.a)
		},
		"./src/reddit/selectors/experiments/profileAvatarChangeFix.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = Object(n.a)(s.s)
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.3de6f4d40609d58c9838.js.map