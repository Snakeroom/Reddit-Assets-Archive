// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.6e536b43c6d8dc6b5e9b.js
// Retrieved at 2/7/2022, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~ModListing~Reddit~Subreddit"], {
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/CSSVariableProvider/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function i(e) {
				const t = t => s.a.createElement(o.b.Consumer, null, r => s.a.createElement(e, c({
					theme: r
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
		},
		"./src/realtime/GQLSubscription/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/lib/loadWithRetries/index.ts");
			const o = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(s.a)(() => Promise.all([r.e(1), r.e("RealtimeGQLSubscriptionAsync")]).then(r.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
			});
			t.a = o
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				o = "EMBEDS__LOADABLE",
				c = Object(n.a)(s),
				i = Object(n.a)(o)
		},
		"./src/reddit/actions/pages/modListing/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "i", (function() {
				return c
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
				return p
			}));
			const n = "PAGE__MOD_LISTING_PAGE_PENDING",
				s = "PAGE__MOD_LISTING_PAGE_LOADED",
				o = "PAGE__MOD_LISTING_PAGE_FAILED",
				c = "MOD_LISTING_MORE_POSTS_PENDING",
				i = "MOD_LISTING_MORE_POSTS_LOADED",
				a = "MOD_LISTING_MORE_POSTS_FAILED",
				d = "MOD_LISTING_HIDE_SUBREDDIT_SUCCESS",
				u = "MOD_LISTING_HIDE_SUBREDDIT_PENDING",
				l = "MOD_LISTING_HIDE_SUBREDDIT_FAILED",
				b = "MOD_LISTING_UNHIDE_SUBREDDIT_SUCCESS",
				m = "MOD_LISTING_UNHIDE_SUBREDDIT_PENDING",
				p = "MOD_LISTING_UNHIDE_SUBREDDIT_FAILED"
		},
		"./src/reddit/actions/postList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = (r("./src/reddit/actions/embedAndImage.ts"), r("./src/reddit/actions/video.ts"), r("./src/reddit/helpers/trackers/postList.ts"));
			r("./src/reddit/constants/postLayout.ts"), r("./src/reddit/models/Media/index.ts"), r("./src/reddit/selectors/platform.ts"), r("./src/reddit/selectors/posts.ts");
			r("./src/reddit/selectors/video.ts");
			const o = "POSTLIST__MARKED_END",
				c = "POSTLIST__UNMARKED_END",
				i = Object(n.a)(o),
				a = Object(n.a)(c),
				d = (e, t) => async (r, n) => {
					const o = n();
					e in o.listings.postOrder.fetchedTokens ? e in o.listings.postOrder.ids ? r(a({
						listingKey: e
					})) : s.l(o, e) : r(i({
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
				return o
			})), r.d(t, "h", (function() {
				return c
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
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				c = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				i = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				a = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return k
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "c", (function() {
				return U
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "b", (function() {
				return H
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/linkMatchers/customLinks.ts"),
				i = r("./src/reddit/actions/login.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/subscription/constants.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/constants/posts.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				m = r("./src/lib/omitHeaders/index.ts"),
				p = r("./src/reddit/constants/headers.ts");
			var f = r("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				I = r("./src/reddit/models/GqlTopLevelField.ts"),
				g = r("./src/reddit/models/User/index.ts");

			function j(e) {
				const t = [],
					r = [],
					n = {},
					s = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const i of o.edges) {
					if (i.node.__typename !== g.c.AvailableRedditor || !i.node.profile) continue;
					const e = Object(O.a)(i.node.profile);
					n[e.id] = e;
					const {
						isFavorite: r
					} = i.node.profile;
					r && t.push(e.id)
				}
				const {
					subscribedSubreddits: c
				} = e.identity;
				for (const i of c.edges) {
					if (i.node.__typename !== I.a.Subreddit) continue;
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
			var _ = r("./src/reddit/models/Toast/index.ts"),
				S = r("./src/reddit/selectors/profile.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/reddit/selectors/subscriptions.ts"),
				x = r("./src/reddit/selectors/user.ts");
			const y = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				T = Object(o.a)(d.c),
				C = Object(o.a)(d.b),
				N = Object(o.a)(d.a),
				P = Object(o.a)(d.h),
				k = (Object(o.a)(d.i), Object(o.a)(d.g), () => async (e, t, {
					gqlContext: r
				}) => {
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(C());
					const s = await Object(f.a)(r());
					if (s.ok) {
						const t = j(s.body.data);
						e(T(t))
					} else e(N({
						error: s.error
					}))
				}),
				D = (e, t) => t.type === l.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				w = (e, t, r) => async (o, d, {
					apiContext: b
				}) => {
					let m = e.map(e => e.type === l.a.SUBREDDIT ? {
						id: Object(v.C)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(S.m)(d(), e.name),
						name: `${s.ic}${e.name}`,
						type: e.type
					});
					if (!Object(x.K)(d())) return o(Object(a.k)({
						actionSource: a.a.Subscribe
					})), void o(Object(i.j)());
					const p = Object(x.k)(d());
					if (p) {
						const t = m.length,
							r = e.length;
						if (m = m.filter(e => !D(p, e)), (e = e.filter(e => !D(p, e))).length !== r || m.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(u.f)(Object(u.e)(e, _.b.Error)))
						}
						if (!e.length && !m.length) return
					}
					o(P({
						identifiers: m,
						nameIdentifiers: e,
						profileModels: d().profiles.models,
						subredditModels: d().subreddits.models,
						subscriptionsCount: Object(E.b)(d()),
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
						const r = 1 === e.length ? `${"subreddit"===e[0].type?c.d.subreddit:c.d.profile}${e[0].name}` : n.fbt._({
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
						o(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : i : t ? a : d
						}))
					} else {
						o(P({
							identifiers: m,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(E.b)(d()),
							userIsSubscriber: !t,
							widgetId: r
						}));
						const s = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(u.f)(Object(u.e)(s, _.b.Error)))
					}
					return O.ok
				}, R = Object(o.a)(d.f), U = e => async (t, r, {
					apiContext: n
				}) => {
					const s = r(),
						o = Object(v.J)(s, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const c = e.type === l.a.SUBREDDIT ? o.name : `u_${o.name}`,
						i = s.subscriptions.favoriteSubredditOrder || [],
						a = s.subscriptions.favoriteProfileOrder || [],
						d = i.indexOf(e.id),
						b = a.indexOf(e.id),
						m = -1 === d && -1 === b,
						p = s.subreddits.models,
						O = s.profiles.models;
					t(R({
						makeFavorite: m,
						identifier: e,
						subredditModels: p,
						profileModels: O
					}));
					const h = {
							type: e.type,
							name: o.name
						},
						I = () => Object(v.db)(r(), {
							identifier: h
						});
					(I() || (await t(w([h], !0)), I())) && ((await Object(f.b)(n(), c, m)).ok || (t(R({
						makeFavorite: !m,
						identifier: e,
						subredditModels: p,
						profileModels: O
					})), t(Object(u.f)({
						text: y(),
						kind: _.b.Error
					}))))
				}, A = Object(o.a)(d.d), L = e => async (t, r, {
					apiContext: n
				}) => {
					const o = r().multireddits.models,
						c = () => {
							t(Object(u.f)({
								text: y(),
								kind: _.b.Error
							}))
						},
						i = o[e];
					if (!i) return void c();
					const a = !i.isFavorited;
					t(A({
						makeFavorite: a,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, r) => Object(b.a)(Object(m.a)(e, [p.a]), {
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
						multiredditsModelsState: o
					})), c())
				}, M = Object(o.a)(d.e), H = e => async (t, r, {
					apiContext: o
				}) => {
					const c = r(),
						i = c.multireddits.models;
					if (!Object(x.K)(c)) return;
					const a = (e = !0) => {
							t(Object(u.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "2I4uia"
								}) : n.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: _.b.Error
							}))
						},
						d = i[e];
					if (!d) return void a();
					const l = !d.isFollowed;
					t(M({
						follow: l,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, r) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: r ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, l)).ok || (t(M({
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
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				i = r("./src/reddit/components/LottieAnimation/util.ts");
			const a = c.a.memo(e => {
				const t = c.a.createRef(),
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
					[p, f] = Object(o.useState)(r);
				Object(o.useEffect)(() => {
					n ? Object(i.a)(n).then(f) : r && f(r)
				}, [n, r]);
				const [O, h] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || O || !p) return;
					const r = s.a.loadAnimation({
						autoplay: !1,
						renderer: l ? "canvas" : "svg",
						loop: u,
						container: e,
						animationData: p
					});
					h(r)
				}, [u, t, O, p]), Object(o.useEffect)(() => {
					if (O)
						if (d) O.stop();
						else if (m) {
						const e = O.getDuration(!0);
						O.goToAndPlay(e, !0)
					} else O.goToAndPlay(0)
				}, [d, m, O]);
				const I = Object(o.useCallback)(() => {
					O && O.goToAndPlay(0)
				}, [O]);
				return c.a.createElement("div", {
					className: a,
					style: {
						display: d ? "none" : "block"
					},
					ref: t,
					onClick: b || I
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
			var n, s, o = r("./node_modules/react/index.js"),
				c = r.n(o),
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
						o = d.V.has(e),
						c = d.Cb.has(e),
						i = e === d.Mb.SUBREDDIT,
						a = e === d.Mb.TOPIC;
					let b, m, p;
					return o && !i || c ? b = n.HeaderSelector : s ? b = n.Collection : r ? b = n.PostComments : a && (b = n.TopicHeader), (o || c || s || r) && (m = n.Widget), (o || r) && (p = n.PostItem), [b, m, p]
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
					return c.a.createElement(r, {
						className: O.a.Title
					}, t)
				},
				I = Object(m.u)(),
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
			class j extends c.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? c.a.createElement(h, {
						level: t
					}, e) : c.a.createElement(c.a.Fragment, null, e)
				}
			}
			t.b = I(g(j))
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
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				u = r("./src/reddit/components/UserIcon/index.tsx"),
				l = r("./src/reddit/constants/colors.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				p = r("./src/reddit/icons/fonts/index.tsx"),
				f = r("./src/reddit/models/Subreddit/index.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/components/SubredditIcon/index.m.less"),
				I = r.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = d.a.wrapped(u.a, "UserIcon", I.a),
				_ = d.a.img("Image", I.a),
				S = ({
					iconColor: e,
					...t
				}) => c.a.createElement(_, g({
					style: {
						backgroundColor: e || ""
					}
				}, t)),
				v = d.a.div("BackupImage", I.a),
				E = Object(b.u)();
			t.b = E(e => {
				const t = Object(i.e)(O.X);
				let r, o, d;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: n
					} = Object(m.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(f.h)(e.subredditOrProfile) ? d = c.a.createElement(j, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (r = t, o = n)
				} else r = e.shouldHideNsfwIcon ? `${n.a.assetPath}/img/avatar_over18.png` : e.iconUrl, o = e.primaryColor || l.a.alienblue;
				return r ? d = c.a.createElement(S, {
					alt: s.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: o,
					role: "presentation",
					src: r
				}) : d || (d = c.a.createElement(p.a, {
					name: "community",
					isFilled: !t,
					className: Object(a.a)(e.className, I.a.defaultCommunityIcon, {
						[I.a.mNightmode]: t
					}),
					style: t ? {
						backgroundColor: e.redditStyle ? l.a.alienblue : o
					} : {
						color: e.redditStyle ? l.a.alienblue : o
					}
				})), e.linkTo ? c.a.createElement("a", {
					href: e.linkTo
				}, d) : c.a.createElement(c.a.Fragment, null, d)
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
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/selectors/telemetry.ts"),
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
				const t = Object(o.f)(),
					r = Object(n.useCallback)(e => {
						{
							const r = t.getState(),
								n = e(r);
							Object(i.a)({
								...c.o(r),
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
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/hooks/useIntersectionObserver.ts"),
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
				return Object(c.a)(a, u), s.a.createElement(i.a, {
					ref: a,
					className: Object(o.a)(d.a.presenceDot, {
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
				o = r.n(s),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				a = r.n(i);
			t.a = function({
				backgroundClassName: e,
				className: t,
				headshot: r
			}) {
				return o.a.createElement("div", {
					className: Object(c.a)(a.a.snoovatarWrapper, t)
				}, o.a.createElement("div", {
					className: Object(c.a)(a.a.snoovatarBackground, e)
				}), o.a.createElement("div", {
					className: a.a.snoovatarHeadshotContainer
				}, o.a.createElement("img", {
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
				return p
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				u = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = r.n(l);
			const m = `${n.a.assetPath}/img/avatar_over18_square.png`,
				p = e => !e || e.includes("avatar_default_");
			t.b = e => {
				const {
					className: t,
					iconUrl: r,
					isCurrentUser: n,
					isNightMode: o,
					isNSFW: l,
					nsfwIconUrl: f,
					shouldHideNSFW: O
				} = e;
				if (Object(i.e)(e => {
						p(r) && Object(u.h)(e)
					}), n && p(r) || !n && !r) return c.a.createElement(d.a, {
					className: Object(a.a)(b.a.DefaultUserIcon, t, {
						[b.a.mNightmode]: o
					})
				});
				const h = !n && l && O ? f || m : r;
				return c.a.createElement("img", {
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
				o = r.n(s),
				c = r("./src/config.ts"),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/realtime/GQLSubscription/async.tsx"),
				u = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				b = r("./src/reddit/models/User/index.ts"),
				m = r("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				p = r("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				f = r("./src/reddit/components/UserIcon/UserIcon.tsx"),
				O = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/components/LottieAnimation/index.tsx"),
				I = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				g = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				j = r.n(g);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = () => {},
				v = Object(a.c)({
					currentUser: O.k,
					isNightMode: O.X,
					shouldHideNSFW: O.C,
					user: O.sb,
					isProfileAvatarChangeFixEnabled: I.a
				}),
				E = Object(i.b)(v);
			t.a = E(e => {
				const {
					authorId: t,
					collapsed: r,
					currentUser: i,
					iconUrl: a,
					isCommentAuthorBlocked: O,
					isHighlighted: I,
					isNft: g,
					isNSFW: v,
					shouldUseOnlineOverride: E,
					isOnlineOverrideValue: x,
					isOnlineStatusLoadTest: y,
					isProfileIcon: T,
					omitResponsivePresenceWrapper: C,
					onPresenceIndicatorInViewport: N,
					shouldShowPresenceIndicator: P,
					user: k,
					userName: D,
					isProfileAvatarChangeFixEnabled: w,
					...R
				} = e, U = !!i && Object(b.e)(i) === D, A = U ? i : k, L = A && A.accountIcon || a, M = k ? k.isNSFW : v, H = Object(u.a)(L) && !O, G = H ? o.a.createElement(p.a, {
					headshot: L,
					className: e.className
				}) : o.a.createElement(f.b, _({}, R, {
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
				}, []), K = Object(s.useRef)(null), [V, z] = Object(s.useState)(!1), Y = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: r
						} = e, n = 1 !== r;
						t ? z(!0) : n && z(!1)
					})
				}, []), X = Object(s.useRef)({
					rootMargin: "750px 0px 1000px 0px"
				});
				return Object(l.a)(K, Y, X.current), C ? G : o.a.createElement("div", {
					className: Object(n.a)(j.a.userIconWrapper, {
						[j.a.nftUserIcon]: g,
						[j.a.hasHeadShotWrapper]: H,
						[j.a.isProfileIcon]: T && w
					}),
					ref: K
				}, g && o.a.createElement(h.a, {
					className: j.a.nftAnimation,
					assetUrl: `${c.a.assetPath}/img/snoovatars/nft_comment_animation.json`,
					loop: !0
				}), G, P && (B || E && x) && o.a.createElement(m.default, {
					showPresence: !0,
					isHighlighted: I,
					onceInViewport: N
				}), (P || y) && !E && V && o.a.createElement(d.a, {
					variables: W,
					onData: P ? q : S,
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
				return o
			})), r.d(t, "f", (function() {
				return c
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
				return p
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "i", (function() {
				return O
			}));
			const n = "DraftEditor-contentwrapper",
				s = "public-DraftStyleDefault-block",
				o = "data-offset-key",
				c = "hovered",
				i = "scrollerItem",
				a = "threadline",
				d = "header-user-dropdown",
				u = "voteButton",
				l = "RichTextJSON-root",
				b = "ImageBox-image",
				m = "content-type-link",
				p = "styled-outbound-link",
				f = "ListingLayout-backgroundContainer",
				O = "ListingLayout-outerContainer"
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = s.a.createContext(!1);

			function i(e) {
				function t(t) {
					return s.a.createElement(c.Consumer, null, r => s.a.createElement(e, o({}, t, {
						isOverlay: r
					})))
				}
				return t.displayName = `WithOverlay(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return C
			})), r.d(t, "c", (function() {
				return N
			}));
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				o = r("./node_modules/query-string/index.js"),
				c = r.n(o),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				d = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/addQueryParams/index.ts");
			var b = (e, t) => t ? Object(l.a)(e, {
				user_id: t
			}) : e;
			var m = r("./src/lib/opener/index.ts"),
				p = r("./src/lib/redditId/index.ts"),
				f = r("./src/reddit/actions/post.ts"),
				O = r("./src/reddit/constants/adEvents.ts"),
				h = r("./src/reddit/helpers/getVendorMetadata.ts"),
				I = r("./src/reddit/helpers/pixels.ts"),
				g = r("./src/reddit/helpers/trackers/ads.ts"),
				j = r("./src/reddit/hooks/useOutboundClickTracking.ts"),
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
			const x = Object(u.a)(v.a, v.k, (e, {
					isSponsored: t,
					postId: r
				}) => t && r ? Object(_.b)(e, r) : null, _.G, S.d, (e, t, r, n, s) => ({
					allowClickTracking: e,
					basePixelMetadata: r,
					userId: t ? Object(p.a)(t.id) : null,
					post: n,
					pageType: s.pageType
				})),
				y = Object(d.b)(x, e => ({
					fireAdPixelsOfType: (t, r) => e(Object(f.z)(t, r)),
					recordClick: (t, r, n) => {
						const s = t.events.filter(({
							type: e,
							url: t
						}) => e === O.a.Click && Object(I.b)(t));
						Object(I.c)(s), e(Object(f.p)(String(r), {
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
				C = (e, t, r) => {
					let n, s = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(r)) {
						s = Object(h.a)(e, t, O.a.Click);
						const {
							url: o,
							query: i
						} = c.a.parseUrl(r);
						n = c.a.stringifyUrl({
							url: o,
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
				N = (e, t, r) => {
					const n = C(t, r, e.href);
					return e.href = n.url, n.metadata
				},
				P = ({
					isSponsored: e,
					source: t
				}) => !!(e && (null == t ? void 0 : t.outboundUrl)),
				k = y(e => {
					const t = Object(i.useRef)(null),
						r = Object(j.a)(),
						{
							allowClickTracking: n,
							basePixelMetadata: o,
							commentId: c,
							fireAdPixelsOfType: d,
							href: u,
							isSponsored: l,
							pageType: b,
							post: p,
							postId: f,
							recordClick: h,
							source: I,
							sourceElement: _,
							userId: S
						} = e;
					let v = s()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "post", "recordClick", "commentId", "source", "sourceElement", "userId", "pageType"]);
					const x = I && I.outboundUrl && l ? I.outboundUrl : u;
					return v = {
						...v,
						href: x,
						rel: l ? m.b : m.a,
						target: m.d.BLANK
					}, !I || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: r
						} = e;
						return !(!t || !r) && (t > r + 3e5 || t < r - 36e5)
					})(I) ? a.a.createElement("a", E({}, v, {
						onClick: () => r(u, _, c, f)
					})) : a.a.createElement("a", E({}, v, {
						onMouseDown: r => {
							if (!P(e)) return !(1 !== r.button && 2 !== r.button && !r.ctrlKey) || void T(r.currentTarget, I, S, n);
							t.current = N(r.currentTarget, f, o)
						},
						onClick: () => {
							p && (P(e) && (h(p, O.a.Click, t.current), Object(g.a)(p, b)), d(p, O.a.Click), r(u, _, c, f))
						},
						onMouseLeave: e => {
							l || ((e, t) => {
								e.href = t
							})(e.currentTarget, x)
						},
						onTouchStart: e => T(e.currentTarget, I, S, n),
						"data-testid": "outbound-link"
					}))
				});
			t.b = k
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
				o = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(c.a)(e, n);
			const u = (e, {
					subredditIds: t,
					subredditNames: r,
					subscribe: n
				}) => Object(o.a)(Object(i.a)(e, [a.a]), {
					method: s.jb.POST,
					endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
					data: {
						action: n ? "sub" : "unsub",
						sr: t && t.join(",") || void 0,
						sr_name: r && r.join(",") || void 0,
						api_type: "json"
					}
				}),
				l = (e, t, r) => Object(o.a)(Object(i.a)(e, [a.a]), {
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
				return o
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/polished/dist/polished.es.js"),
				s = r("./src/reddit/models/NewStructuredStyles/index.ts");
			const o = e => Object(n.b)(e) < .6;

			function c(e, t = s.a.bodyText, r = s.b.bodyText) {
				return o(e) ? r : t
			}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/helpers/localStorage/index.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, r) => s => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...o.o(s),
					subreddit: o.jb(s),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${r}` : `DESKTOP ${r}`,
						count: 1,
						type: n.f.SWITCH_HOUSE_AD
					}
				}),
				i = (e, t) => {
					t && (Object(s.Db)(e.postId), Object(s.Lb)(t)), e.impressionIdStr ? Object(s.Eb)(e.impressionIdStr) : e.impressionId && Object(s.Eb)(e.impressionId)
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return y
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "q", (function() {
				return N
			})), r.d(t, "r", (function() {
				return P
			})), r.d(t, "o", (function() {
				return k
			})), r.d(t, "s", (function() {
				return D
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "l", (function() {
				return R
			})), r.d(t, "p", (function() {
				return U
			})), r.d(t, "i", (function() {
				return A
			})), r.d(t, "j", (function() {
				return L
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "b", (function() {
				return B
			})), r.d(t, "a", (function() {
				return F
			})), r.d(t, "n", (function() {
				return W
			})), r.d(t, "m", (function() {
				return q
			})), r.d(t, "t", (function() {
				return z
			})), r.d(t, "x", (function() {
				return Y
			})), r.d(t, "e", (function() {
				return X
			})), r.d(t, "d", (function() {
				return J
			})), r.d(t, "v", (function() {
				return te
			})), r.d(t, "u", (function() {
				return re
			})), r.d(t, "w", (function() {
				return ne
			})), r.d(t, "h", (function() {
				return se
			}));
			var n = r("./node_modules/lodash/pick.js"),
				s = r.n(n),
				o = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makePostDraftPageKey/index.ts"),
				i = r("./src/reddit/constants/parameters.ts"),
				a = r("./src/reddit/constants/tracking.ts"),
				d = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = r("./src/reddit/helpers/routeKey/index.ts"),
				l = r("./src/reddit/helpers/trackers/postComposer.ts"),
				b = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = r("./src/reddit/models/Comment/index.ts"),
				p = r("./src/reddit/models/Post/index.ts"),
				f = r("./src/reddit/routes/subreddit/index.ts"),
				O = r("./src/reddit/selectors/profile.ts"),
				h = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/lib/makePostCreationPageKey/index.ts"),
				g = r("./src/lib/makeSearchKey/index.ts"),
				j = r("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = r("./src/reddit/helpers/trackers/searchResults.ts"),
				S = r("./src/reddit/selectors/postDraft.ts"),
				v = r("./src/reddit/selectors/searchResults.ts"),
				E = r("./src/reddit/selectors/telemetry.ts"),
				x = r("./src/telemetry/index.ts");
			const y = (e, t, r, n, a, l) => {
					const {
						route: O
					} = e, {
						name: h
					} = O.meta;
					if (!h) return;
					const j = t.platform.currentPage;
					switch (h) {
						case o.Mb.COMMENTS: {
							const {
								partialCommentId: s,
								partialPostId: o
							} = e.match.params, c = Object(p.t)(o), i = Object(u.a)(e, t, t.posts.models[c]);
							if (!i) return;
							const a = s && Object(m.h)(s),
								{
									sortToUse: l
								} = Object(d.a)(t, c);
							Object(x.a)(w(i, c, a, r, n, l)(t));
							break
						}
						case o.Mb.INDEX:
						case o.Mb.LISTING:
						case o.Mb.MULTIREDDIT:
						case o.Mb.SUBREDDIT: {
							const s = Object(u.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: c,
								queryParams: i,
								path: a
							} = e.match, {
								sort: d = (s.sort ? s.sort : o.W.HOT)
							} = c, l = i.t, b = a === f.a;
							Object(x.a)(C({
								key: s.listingKey,
								sort: d,
								timerType: r,
								timerMillis: n,
								timeSort: l,
								isPredictionsPage: b
							})(t));
							break
						}
						case o.Mb.TOPIC: {
							const s = Object(u.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: c
							} = e.match, i = s.sort ? s.sort : o.X, {
								sort: a = i
							} = c;
							Object(x.a)(C({
								key: s.listingKey,
								sort: a,
								timerType: r,
								timerMillis: n
							})(t));
							break
						}
						case o.Mb.PROFILE_OVERVIEW: {
							const s = Object(u.d)(e, t);
							if (!s) return;
							const {
								params: c,
								queryParams: i
							} = e.match, {
								sort: a = o.Eb
							} = c, d = i.t;
							Object(x.a)(N(s, a, r, n, d)(t));
							break
						}
						case o.Mb.PROFILE_POSTS: {
							const s = Object(u.d)(e, t);
							if (!s) return;
							const {
								queryParams: c
							} = e.match, {
								sort: i = o.Eb,
								t: a = o.Fb
							} = c;
							Object(x.a)(P(s, i, r, n, a)(t));
							break
						}
						case o.Mb.PROFILE_COMMENTS: {
							const s = Object(u.d)(e, t);
							if (!s) return;
							const {
								queryParams: c
							} = e.match, {
								sort: i = o.Eb,
								t: a = o.Fb
							} = c;
							Object(x.a)(k(s, i, r, n, a)(t));
							break
						}
						case o.Mb.PROFILE_PRIVATE: {
							const s = Object(u.d)(e, t);
							if (!s) return;
							Object(x.a)(D(s)(n, r)(t));
							break
						}
						case o.Mb.FOLLOWERS:
							H(t);
							break;
						case o.Mb.PROFILE_MODERATION:
							l && U(t, !0);
							break;
						case o.Mb.SETTINGS: {
							const s = e;
							Object(x.a)(V(r, n)(t)), s.match.params.page === o.bc.Profile && Object(b.l)(t);
							break
						}
						case o.Mb.POST_CREATION:
							if (l && a) {
								const e = Object(I.a)(a);
								Object(x.a)(R(e, r, n)(t))
							}
							break;
						case o.Mb.POST_DRAFT: {
							const {
								draftId: s
							} = e.match.params, o = Object(c.a)(e.match.params);
							if (!o) return;
							G(t, o, s, r, n);
							break
						}
						case o.Mb.SUBREDDIT_WIKI:
							Object(x.a)($(r, n)(t));
							break;
						case o.Mb.COINS:
							Object(x.a)(B(r, n)(t)), Object(x.a)(F()(t));
							break;
						case o.Mb.PREMIUM:
							Object(x.a)(W(r, n)(t)), Object(x.a)(q()(t));
							break;
						case o.Mb.APPEAL:
							Object(x.a)(K(r, n)(t));
							break;
						case o.Mb.INBOX_PAGES:
							l && M(t);
							break;
						case o.Mb.MODERATION_PAGES:
							l && A(t, !0, a ? a.subredditName : null, a ? a.profileName : null);
							break;
						case o.Mb.COLLECTION_COMMENTS:
							l && ne(t, !0);
							break;
						case o.Mb.MODQUEUE_PAGES:
							l && L(t, a ? a.subredditName : null, a ? a.profileName : null);
							break;
						case o.Mb.SUBREDDIT_LEADERBOARD:
							l && Object(x.a)(X()(t));
							break;
						case o.Mb.SEARCH_RESULTS:
							if (l) {
								const o = Object(u.e)(e, t);
								if (!o) return;
								Object(x.a)(te(o, Object(g.e)(s()(j && j.queryParams || {}, i.u)), r, n, j, Object(v.k)(t))(t))
							}
							break;
						case o.Mb.PUBLIC_ACCESS_NETWORK:
							l && Object(x.a)(z()(t));
							break;
						case o.Mb.GEOTAGGING:
							l && Object(x.a)(J()(t));
							break;
						case o.Mb.SUBREDDIT_CREATION:
							l && Object(x.a)(Y()(t));
							break;
						case o.Mb.MOD_LISTING:
							l && se(t, !0)
					}
				},
				T = e => ({
					...E.o(e),
					userPreferences: E.sb(e)
				}),
				C = ({
					key: e,
					sort: t,
					timerType: r,
					timerMillis: n,
					timeSort: s,
					flairTitle: o,
					isPredictionsPage: c
				}) => i => {
					const {
						api: a
					} = i.listings.postOrder, d = !a.error[e] && !a.pending[e], u = c ? {
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
							...u
						}),
						customFeed: E.m(i),
						listing: E.A(i, e, {
							sort: t,
							sortTime: s
						}),
						subreddit: E.jb(i),
						timer: E.pb(r, n),
						userSubreddit: E.tb(i),
						adblock: E.e(i),
						postFlair: {
							title: o
						},
						predictions: c ? Object(E.Q)(i) : void 0
					}
				},
				N = (e, t, r, n, s) => o => {
					const c = E.A(o, e);
					c && (c.sort = t, s && (c.sortTime = s));
					const {
						api: i
					} = o.listings.postOrder, a = !i.error[e] && !i.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...T(o),
						actionInfo: E.d(o, {
							success: a
						}),
						profile: E.S(o),
						snoovatar: E.gb(o),
						subreddit: E.jb(o),
						timer: E.pb(r, n),
						userSubreddit: E.tb(o),
						adblock: E.e(o)
					}
				},
				P = (e, t, r, n, s) => o => {
					const c = E.A(o, e);
					c && (c.sort = t, s && (c.sortTime = s));
					const {
						api: i
					} = o.listings.postOrder, a = !i.error[e] && !i.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...T(o),
						actionInfo: E.d(o, {
							success: a
						}),
						profile: E.S(o),
						subreddit: E.jb(o),
						timer: E.pb(r, n),
						userSubreddit: E.tb(o),
						adblock: E.e(o)
					}
				},
				k = (e, t, r, n, s) => o => {
					const c = E.V(o, e);
					c && (c.sort = t, s && (c.sortTime = s));
					const {
						api: i
					} = o.profileCommentsPage, a = !i.error[e] && !i.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...T(o),
						actionInfo: E.d(o, {
							success: a
						}),
						profile: E.S(o),
						subreddit: E.jb(o),
						timer: E.pb(r, n),
						userSubreddit: E.tb(o),
						adblock: E.e(o)
					}
				},
				D = e => (t, r) => n => {
					const s = !n.profilePrivatePage.api.error[e] && !n.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...T(n),
						actionInfo: E.d(n, {
							success: s
						}),
						profile: E.S(n),
						subreddit: E.jb(n),
						timer: E.pb(r, t),
						userSubreddit: E.tb(n),
						adblock: E.e(n)
					}
				},
				w = (e, t, r, n, s, o) => c => {
					const {
						api: i
					} = c.pages.comments, a = !i.error[e] && !i.pending[e], d = {
						source: "global",
						action: "view",
						noun: "screen",
						...T(c),
						actionInfo: E.d(c, {
							success: a
						}),
						post: E.J(c, t),
						profile: E.S(c),
						subreddit: E.jb(c),
						timer: E.pb(n, s),
						userSubreddit: E.tb(c),
						adblock: E.e(c),
						postEvent: E.M(c, {
							postId: t
						}),
						postCollection: E.L(c, {
							postId: t
						}),
						listing: E.A(c, void 0, {
							sort: o
						})
					};
					return r && (d.comment = E.i(c, r)), d
				},
				R = (e, t, r) => n => {
					const s = n.creations.api.page.fetched[e],
						o = n.platform.currentPage ? n.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...T(n),
						actionInfo: E.d(n, {
							success: s
						}),
						post: o ? E.J(n, o) : void 0,
						subreddit: E.jb(n),
						timer: E.pb(t, r),
						userSubreddit: E.tb(n),
						adblock: E.e(n)
					}
				},
				U = (e, t) => {
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
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
						...T(e),
						actionInfo: E.d(e, {
							success: t
						}),
						profile: E.T(e, Object(O.m)(e, n)),
						subreddit: E.kb(e, Object(h.C)(e, r)),
						userSubreddit: E.tb(e),
						adblock: E.e(e)
					})
				},
				L = (e, t, r) => {
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						profile: E.T(e, Object(O.m)(e, r)),
						subreddit: E.kb(e, Object(h.C)(e, t)),
						userSubreddit: E.tb(e),
						adblock: E.e(e)
					})
				},
				M = e => {
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: E.d(e)
					})
				},
				H = e => {
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: E.d(e)
					})
				},
				G = (e, t, r, n, s) => {
					const o = e.creations.api.page.pending[t],
						c = !e.creations.api.page.error[t] && !o && !!r,
						i = Object(S.h)(e, r);
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: E.d(e, {
							success: c
						}),
						subreddit: E.jb(e),
						timer: E.pb(n, s),
						userSubreddit: E.tb(e),
						adblock: E.e(e),
						...i ? Object(l.n)(e, i) : {}
					})
				},
				B = (e, t) => r => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(j.c)(j.a.GoldPayment),
					...T(r),
					timer: E.pb(e, t),
					adblock: E.e(r)
				}),
				F = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(e)
				}),
				W = (e, t) => r => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(j.c)(j.a.GoldPayment),
					...T(r),
					timer: E.pb(e, t),
					adblock: E.e(r)
				}),
				q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(e)
				}),
				K = (e, t) => r => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...T(r),
					timer: E.pb(e, t)
				}),
				V = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(r),
					timer: E.pb(e, t)
				}),
				z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: E.jb(e),
					...T(e)
				}),
				Y = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(e)
				}),
				X = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...T(e)
				}),
				$ = (e, t) => r => ({
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
				Q = {
					source: "global",
					action: a.c.VIEW,
					noun: "screen"
				},
				Z = ({
					state: e,
					searchOptions: t,
					pageLayer: r,
					nsfw: n,
					searchSwitcherType: s,
					srShouldBeRestricted: c = !0,
					originElement: i,
					treatment: a
				}) => {
					var d, u, l, b;
					const m = E.ib(r),
						p = (null === (u = null === (d = e.platform.currentPage) || void 0 === d ? void 0 : d.urlParams) || void 0 === u ? void 0 : u.subredditName) ? E.lb(e, e.platform.currentPage.urlParams.subredditName) : void 0,
						f = E.cb(e, t, c, r || void 0);
					return {
						...f,
						range: null !== (l = f.range) && void 0 !== l ? l : o.Qb,
						sort: null !== (b = f.sort) && void 0 !== b ? b : o.Pb,
						originElement: null != i ? i : s,
						nsfw: n,
						protocolName: a,
						queryId: Object(j.c)(j.a.SearchResults),
						structureType: m,
						subredditId: t.restrict_sr && (null == p ? void 0 : p.id) ? p.id : void 0,
						subredditName: t.restrict_sr && (null == p ? void 0 : p.name) ? p.name : void 0
					}
				},
				ee = e => !!e && {
					correlationId: Object(j.c)(j.a.SearchResults)
				},
				te = (e, t, r, n, s, c, i, a) => d => {
					let u = !0;
					if (t.type.indexOf(o.ac.Posts) > -1) {
						const {
							api: t
						} = d.listings.listingOrder;
						u = u && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(o.ac.Subreddits) > -1 || t.type.indexOf(o.ac.Users) > -1) {
						const {
							api: t
						} = d.listings.postOrder;
						u = u && !t.error[e] && !t.pending[e]
					}
					const l = E.H(d, s);
					return {
						..._.d(d, t),
						...Q,
						...E.o(d),
						actionInfo: E.d(d, {
							success: u,
							paneName: l
						}),
						timer: E.pb(r, n),
						search: Z({
							state: d,
							searchOptions: t,
							pageLayer: null != s ? s : void 0,
							nsfw: c,
							searchSwitcherType: i,
							treatment: a
						}),
						...ee(i),
						userPreferences: E.eb(d)
					}
				},
				re = (e, t, r, n, s) => o => ({
					...E.o(o),
					...Q,
					actionInfo: {
						...E.d(o),
						pageType: "search_dropdown"
					},
					search: Z({
						state: o,
						searchOptions: e,
						pageLayer: t,
						nsfw: r,
						searchSwitcherType: void 0,
						originElement: E.a.SearchBar,
						treatment: s
					}),
					...ee(n),
					userPreferences: E.eb(o)
				}),
				ne = (e, t) => {
					Object(x.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: E.d(e, {
							success: t
						})
					})
				},
				se = (e, t) => {
					Object(x.a)({
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
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "r", (function() {
				return f
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "t", (function() {
				return h
			})), r.d(t, "s", (function() {
				return I
			})), r.d(t, "u", (function() {
				return g
			})), r.d(t, "w", (function() {
				return j
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "v", (function() {
				return E
			})), r.d(t, "n", (function() {
				return x
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "m", (function() {
				return C
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "q", (function() {
				return D
			})), r.d(t, "p", (function() {
				return w
			})), r.d(t, "c", (function() {
				return R
			})), r.d(t, "e", (function() {
				return U
			})), r.d(t, "k", (function() {
				return A
			})), r.d(t, "l", (function() {
				return L
			})), r.d(t, "o", (function() {
				return M
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/constants/posts.ts"),
				o = r("./src/reddit/constants/tracking.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				a = r("./src/reddit/selectors/posts.ts"),
				d = r("./src/reddit/selectors/subreddit.ts"),
				u = r("./src/reddit/selectors/telemetry.ts");
			const l = {
				SEARCH: "search",
				SEARCH_RESULTS_BEST: "search_results_best"
			};
			var b;
			! function(e) {
				e.COMMENT = "comment", e.PEOPLE = "people", e.RECENT = "recent_search", e.SUBREDDIT = "subreddit", e.TRENDING = "trending_search", e.TYPEAHEAD = "typeahead", e.QUERY_PROMPT = "query_prompt", e.SUBREDDIT_SEARCH = "subreddit_search"
			}(b || (b = {}));
			const m = {
					subreddit: b.SUBREDDIT,
					profile: b.PEOPLE
				},
				p = (e, t) => {
					const r = u.jb(e);
					return {
						screen: u.bb(e),
						subreddit: r && t && t.restrict_sr ? r : null
					}
				},
				f = (e, t, r, n, s) => o => ({
					...T(o, e, t, s, n, r),
					noun: "ad"
				}),
				O = (e, t, r) => s => {
					let c = !0;
					if (t.type.indexOf(n.ac.Posts) > -1) {
						const {
							api: t
						} = s.listings.listingOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(n.ac.Subreddits) > -1 || t.type.indexOf(n.ac.Users) > -1) {
						const {
							api: t
						} = s.listings.postOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					return {
						...p(s, t),
						source: l.SEARCH,
						action: o.c.VIEW,
						noun: "search_results_post",
						actionInfo: u.d(s, {
							success: c,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: u.p(r),
						search: u.cb(s, t)
					}
				},
				h = (e, t, r) => n => ({
					action: o.c.VIEW,
					actionInfo: u.d(n, {
						paneName: u.b.SearchDropdown,
						position: r
					}),
					metaSearch: u.E(t),
					noun: e,
					screen: u.bb(n),
					search: u.qb(n, t),
					source: l.SEARCH
				}),
				I = (e, t) => r => ({
					action: o.c.CLICK,
					actionInfo: u.d(r),
					noun: e,
					metaSearch: u.E(t),
					screen: u.bb(r),
					search: u.qb(r, t),
					source: l.SEARCH
				}),
				g = (e, t, r) => n => ({
					source: l.SEARCH,
					action: o.c.CLICK,
					noun: b.RECENT,
					actionInfo: u.d(n, {
						paneName: "subreddit_dropdown",
						position: r + 1
					}),
					search: {
						query: e,
						originPageType: n.platform.currentPage ? u.w(n.platform.currentPage) : void 0,
						queryId: u.db(n, c.a.SearchResults)
					},
					..._(n, t)
				}),
				j = (e, t, r, n) => s => {
					const i = n.filter(e => e.id);
					return {
						source: l.SEARCH,
						action: o.c.CLICK,
						noun: b.TYPEAHEAD,
						actionInfo: u.d(s, {
							position: r + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: s.platform.currentPage ? u.w(s.platform.currentPage) : void 0,
							queryId: u.db(s, c.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: i.map(e => e.id),
							numberSubreddits: i.length
						},
						..._(s, t)
					}
				},
				_ = (e, t) => {
					const r = t.isSubreddit && t.id ? u.nb(e, t.id) : void 0,
						n = t.isProfile && t.id ? u.W(e, t.id) : void 0,
						s = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? r || s : void 0,
						profile: t.isProfile ? n || s : void 0
					}
				};
			var S;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities", e.Communities = "tab_communities", e.Authors = "tab_authors", e.Comments = "tab_comments"
			}(S || (S = {}));
			const v = (e, t) => r => ({
					...p(r, t),
					source: l.SEARCH,
					action: o.c.CLICK,
					noun: e,
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: u.d(r, {
						paneName: u.H(r, null)
					}),
					search: u.cb(r, t)
				}),
				E = (e, t) => r => ({
					action: o.c.CLICK,
					correlationId: Object(c.c)(c.a.SearchResults),
					noun: e ? n.Yb.ToSubreddit : n.Yb.ToGlobal,
					search: u.cb(r, t),
					source: l.SEARCH
				}),
				x = (e, t, r, n, s) => o => T(o, e, t, r, n, s),
				y = (e, t, r, n) => {
					var s;
					const o = null !== (s = null != t ? t : e.platform.currentPage) && void 0 !== s ? s : void 0;
					return {
						pageType: o && u.w(o),
						paneName: r,
						position: n
					}
				},
				T = (e, t, r, n, s, c) => {
					const i = u.H(e, n),
						a = N(e, t, s, c),
						d = u.f(e, r, s, c, i),
						b = null !== a ? d + a : null,
						m = u.ib(n),
						p = {
							...u.cb(e, r, !0, n || void 0),
							structureType: m
						};
					return {
						source: l.SEARCH,
						action: o.c.CLICK,
						noun: "post",
						actionInfo: y(e, n, i, b),
						search: p,
						post: u.J(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: c ? u.p(c) : null
					}
				},
				C = (e, t, r, n, s, c) => i => P({
					action: o.c.CLICK,
					state: i,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: r,
					key: n,
					postId: s,
					discoveryUnit: c
				}),
				N = (e, t, r, n) => {
					var s;
					return (null === (s = null == n ? void 0 : n.layout) || void 0 === s ? void 0 : s.viewTypeWeb) === i.b.Hero ? 0 : (null == n ? void 0 : n.postOrder) ? n.postOrder.indexOf(t) >= 0 ? n.postOrder.indexOf(t) : null : r ? u.y(e, t, r) : null
				},
				P = ({
					action: e,
					state: t,
					searchOptions: r,
					pageLayer: n,
					subredditOrProfileIdentifier: o,
					key: c,
					postId: i,
					discoveryUnit: d
				}) => {
					if (!o) {
						o = Object(a.G)(t, {
							postId: i
						}).belongsTo
					}
					const b = u.H(t, n);
					let p;
					if (i) {
						const e = N(t, i, c, d),
							n = u.f(t, r, c, d, b);
						p = null !== e ? n + e : null
					} else p = c ? u.z(t, o, c) : null;
					const f = u.ib(n),
						O = {
							...u.cb(t, r, !0, n || void 0),
							structureType: f
						};
					return {
						source: l.SEARCH,
						action: e,
						noun: m[o.type],
						search: O,
						subreddit: o.type === s.a.SUBREDDIT ? u.nb(t, o.id) : void 0,
						profile: o.type === s.a.PROFILE ? u.W(t, o.id) : void 0,
						userPreferences: {
							hideNsfw: !t.user.prefs.over18
						},
						discoveryUnit: d ? u.p(d) : null,
						actionInfo: y(t, n, b, p),
						post: i ? u.J(t, i) : void 0
					}
				},
				k = ({
					action: e,
					comment: t,
					key: r,
					originElement: n,
					pageLayer: s,
					searchOptions: o,
					state: c
				}) => {
					const i = u.ib(s),
						{
							originPageType: a,
							query: m,
							queryId: p
						} = u.cb(c, o, !0, s || void 0),
						{
							name: f
						} = Object(d.R)(c, {
							subredditId: t.subredditId
						}),
						O = u.H(c, s);
					return {
						action: e,
						source: l.SEARCH,
						noun: b.COMMENT,
						search: {
							originElement: n,
							originPageType: a,
							query: m,
							queryId: p,
							structureType: i
						},
						userPreferences: {
							hideNsfw: !c.user.prefs.over18
						},
						actionInfo: y(c, s, O, r ? u.v(c, t.id, r) : null),
						comment: u.j(c, t, f),
						profile: u.W(c, t.authorId),
						post: u.J(c, t.postId)
					}
				},
				D = (e, t, r, n, s) => c => ({
					...T(c, t, r, n, e, s),
					action: o.c.VIEW
				}),
				w = (e, t, r, n) => s => ({
					...p(s, r),
					source: l.SEARCH,
					action: o.c.VIEW,
					noun: "search_results_post",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: u.d(s, {
						relativePosition: u.y(s, t, e),
						position: u.u(s, t, e)
					}),
					search: {
						...u.cb(s, r),
						...!!n && {
							originElement: n
						}
					},
					post: u.J(s, t)
				}),
				R = (e, t) => r => ({
					...p(r, t),
					source: l.SEARCH,
					action: e,
					noun: "covid_banner",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: u.d(r),
					search: u.cb(r, t)
				}),
				U = e => ({
					action: o.c.DISABLE,
					noun: b.SUBREDDIT_SEARCH,
					source: l.SEARCH,
					subreddit: {
						id: null == e ? void 0 : e.id,
						name: null == e ? void 0 : e.name,
						nsfw: null == e ? void 0 : e.isNSFW,
						quarantined: null == e ? void 0 : e.isQuarantined
					}
				});

			function A(e, t) {
				return r => ({
					...p(r, t),
					source: l.SEARCH,
					action: o.c.VIEW,
					noun: `no_${e}_results`,
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: u.d(r),
					search: u.cb(r, t)
				})
			}

			function L(e, t, r, n) {
				return s => ({
					...p(s),
					source: l.SEARCH,
					action: o.c.CLICK,
					noun: e,
					actionInfo: u.d(s),
					search: u.cb(s, t, r, n)
				})
			}

			function M(e, t, r, n) {
				return s => ({
					...p(s),
					source: l.SEARCH,
					action: o.c.VIEW,
					noun: b.QUERY_PROMPT,
					actionInfo: u.d(s, {
						paneName: u.b.SearchDropdown,
						position: r
					}),
					search: u.cb(s, e, t, n)
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
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var n = r("./src/reddit/components/TrackingHelper/index.tsx");
			const s = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var o = r("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, r, n) => s => {
				const c = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(o.o)(s),
					actionInfo: Object(o.d)(s),
					geo: Object(o.t)(s),
					screen: Object(o.bb)(s),
					subreddit: Object(o.jb)(s),
					outbound: Object(o.G)(s, e, t, n, r)
				};
				return r && (c.comment = Object(o.i)(s, r)), n && (c.post = Object(o.J)(s, n)), c
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
						o = Object(u.b)(s);
					Object(i.b)("sendV2EventsData", {
						data: s,
						headers: o
					})
				}
			};

			function m() {
				const e = Object(n.b)(),
					t = b();
				return (r, n, o, i) => {
					var a, d;
					if (n && function(e) {
							return !e.startsWith("/") && null == e.match(s)
						}(r)) {
						const s = c(r, n, o, i);
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
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/fonts/helpers.tsx");

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
				className: Object(o.a)(e, Object(c.b)(r, t))
			}, n));
			a.displayName = "Icon";
			const d = (e, t) => r => s.a.createElement(a, i({
				name: e
			}, t, r, {
				isFilled: (null == t ? void 0 : t.isFilled) || (null == r ? void 0 : r.isFilled),
				className: Object(o.a)(null == t ? void 0 : t.className, null == r ? void 0 : r.className)
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
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				i = r.n(c);
			t.a = Object(n.forwardRef)(({
				className: e,
				isHighlighted: t,
				outlineClassName: r
			}, n) => s.a.createElement("svg", {
				className: Object(o.a)(i.a.defaultInactiveState, e),
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
				className: Object(o.a)(i.a.outline, r, {
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
		"./src/reddit/selectors/experiments/newCommunityProgressV3.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return O
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/constants/experiments.ts"),
				c = r("./src/reddit/constants/posts.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/experiments/index.ts"),
				d = r("./src/reddit/selectors/experiments/utils.ts"),
				u = r("./src/reddit/selectors/moderatorPermissions.ts"),
				l = r("./src/reddit/selectors/platform.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/selectors/user.ts");
			const p = e => e.subreddits.progressModule,
				f = e => {
					const t = Object(l.c)(e);
					if (!t) return;
					if (!Object(u.m)(e, {
							subredditId: t
						})) return;
					if (Object(m.H)(e)) return O(e);
					const r = Object(b.F)(e, {
						identifier: {
							id: t,
							type: c.a.SUBREDDIT
						}
					});
					if (!r || !r.created) return;
					const n = r.created;
					return n ? n * s.Rb < 1639443600180 ? void 0 : O(e) : void 0
				},
				O = Object(n.a)(e => Object(i.c)(e, {
					experimentName: o.Td,
					experimentEligibilitySelector: a.e
				}), d.a)
		},
		"./src/reddit/selectors/experiments/profileAvatarChangeFix.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(s.a)(n.s)
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.6e536b43c6d8dc6b5e9b.js.map