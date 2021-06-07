// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.227e3673c9a05d1b7e17.js
// Retrieved at 6/7/2021, 2:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2"], {
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let s = e;
				return "/" !== s.substr(-1) && (s += "/"), s += Object(r.c)(t)
			}
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/lib/makeActionCreator/index.ts");
			const n = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(r.a)(n)
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return b
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "d", (function() {
				return F
			})), s.d(t, "l", (function() {
				return R
			})), s.d(t, "k", (function() {
				return D
			})), s.d(t, "j", (function() {
				return A
			})), s.d(t, "g", (function() {
				return U
			})), s.d(t, "i", (function() {
				return M
			})), s.d(t, "h", (function() {
				return W
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/flair/index.ts"),
				d = s("./src/reddit/helpers/flair.ts"),
				l = s("./src/reddit/models/Flair/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				f = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(n.a)(b),
				O = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				x = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				j = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				y = Object(n.a)(x),
				_ = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				T = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				C = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				g = Object(n.a)(T),
				k = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				I = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				E = Object(n.a)(S),
				v = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				L = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				F = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				N = Object(n.a)(L),
				P = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				w = Object(n.a)(F),
				R = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					const o = r(),
						a = Object(p.U)(o, {
							subredditId: e
						}).name;
					s(f());
					const i = await Object(c.k)(n(), a, t);
					if (i.ok) {
						s(h({
							subredditId: e,
							isEnabled: t
						}))
					} else s(O());
					return i.ok
				}, D = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					const o = r(),
						a = Object(p.U)(o, {
							subredditId: e
						}).name;
					s(j());
					const i = await Object(c.j)(n(), t, l.d.LinkFlair, a);
					if (i.ok) {
						s(y({
							subredditId: e,
							canAssignOwn: t
						}))
					} else s(_());
					return i.ok
				}, A = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const d = n(),
						m = Object(p.U)(d, {
							subredditId: t
						}).name;
					s(C());
					const b = await Object(c.f)(o(), e, m, l.d.LinkFlair);
					let f = b.ok && !(b.body && !1 === b.body.success);
					if (f) {
						const r = b.body;
						if (s(g({
								subredditId: t,
								template: r
							})), r.id) {
							const n = e.styleTemplate,
								o = d.structuredStyles.flairTemplate.models[r.id];
							n ? f = await s(Object(a.d)(t, r.id, n)) : o && (f = await s(Object(a.c)(t, r.id)))
						}
					}
					if (f) {
						const e = Object(i.e)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						s(Object(i.f)(e))
					} else {
						s(k());
						const n = Object(i.e)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), A(e, t));
						s(Object(i.f)(n))
					}
					return f
				}, U = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const a = n(),
						d = Object(p.U)(a, {
							subredditId: t
						}).name;
					if (s(I()), (await Object(c.b)(o(), e, d)).ok) {
						s(E({
							subredditId: t,
							templateId: e
						}));
						const n = Object(i.e)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						s(Object(i.f)(n))
					} else {
						s(v());
						const n = Object(i.e)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						s(Object(i.f)(n))
					}
				}, M = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const a = n(),
						d = Object(m.d)(a, {
							subredditId: t
						}).templateIds,
						b = Object(p.U)(a, {
							subredditId: t
						}).name;
					if (s(N({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(o(), b, l.d.LinkFlair, e)).ok) {
						s(P());
						const e = Object(i.e)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						s(Object(i.f)(e))
					} else {
						s(w({
							subredditId: t,
							templateIds: d
						}));
						const n = Object(i.e)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						s(Object(i.f)(n))
					}
				}, W = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: s
				}) => async (r, n, {
					apiContext: a
				}) => {
					const i = e.flair.filter(e => !Object(d.q)(e.type));
					if (t && i.unshift(t), r(Object(o.P)({
							[e.id]: {
								flair: i
							}
						})), t) {
						const r = Object(d.g)(t);
						Object(c.h)(a(), e.id, s, r)
					} else Object(c.h)(a(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "c", (function() {
				return S
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/forEach.js"),
				n = s.n(r),
				o = s("./node_modules/lodash/isEqual.js"),
				a = s.n(o),
				i = s("./node_modules/lodash/values.js"),
				c = s.n(i),
				d = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/reddit/actions/imageUploads.ts"),
				u = s("./src/reddit/helpers/media/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/makeApiRequest/index.ts"),
				b = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts");
			var h = s("./src/reddit/helpers/trackers/blade.ts"),
				O = s("./src/reddit/models/Image/index.tsx"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/telemetry/index.ts");
			const y = ({
				subredditId: e,
				flairId: t,
				imageKey: s,
				imageData: r
			}) => async (n, o, a) => {
				const i = o(),
					c = Object(x.U)(i, {
						subredditId: e
					});
				if (!c) return !1;
				n(Object(l.k)(r));
				const d = await (async (e, t, s, r, n, o) => Object(p.a)(Object(b.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${s}`,
					method: m.fb.POST,
					data: {
						filepath: r,
						imagetype: n,
						mimetype: o
					}
				}))(a.apiContext(), c.name, t, r.file.name, s, await Object(u.g)(r.file));
				let h = !1;
				try {
					const e = await Object(l.g)(o(), d, r, O.a.FlairTemplates);
					e && n(Object(l.j)(e)), h = !0
				} catch (j) {
					if (j instanceof Error) throw j;
					n(Object(l.i)(j))
				}
				return h
			}, _ = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", T = Object(d.a)(_), C = (e, t, s) => async (r, o, i) => {
				const {
					apiContext: d
				} = i;
				let u = o();
				const {
					pendingImages: _,
					...C
				} = s;
				let g = C;
				const k = Object(x.U)(u, {
					subredditId: e
				});
				if (!k) return !1;
				const S = u.structuredStyles.flairTemplate.models[t];
				if (S && a()(S, g)) return !0;
				if (_) {
					const s = [];
					if (n()(_, (n, o) => {
							n && s.push(r(y({
								flairId: t,
								imageData: Object(O.m)(n),
								imageKey: o,
								subredditId: e
							})))
						}), !(await Promise.all(s)).every(e => e)) return !1;
					g = ((e, t, s) => {
						const r = {
							...e
						};
						return n()(t, (e, t) => {
							const n = e && s.imageUploads[e.id];
							n && n.kind === O.b.TempUploaded && (r[t] = n.url)
						}), r
					})(g, _, o())
				}
				u = o();
				let I = null,
					E = null;
				const v = [];
				try {
					(I = await Object(l.f)(u, O.a.FlairTemplates)) && (E = Object(l.m)(I)(r, o, i), v.push(...c()(I.imagesByKey)))
				} catch (P) {
					return !1
				}
				const L = await (async (e, t, s, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: m.fb.PUT,
						data: r
					}))(d(), k.name, t, g),
					F = S ? "edit_post_flair_template" : "save_post_flair_template",
					N = Object(h.e)(u, F);
				if (L.ok) {
					let e;
					if (E) try {
						await E, e = ((e, t, s) => {
							const r = {
								...e
							};
							return t.forEach(e => {
								const t = s.imageUploads[e.id];
								t && t.kind === O.b.Uploaded && (e.url === r.postBackgroundImage ? r.postBackgroundImage = t.url : e.url === r.postPlaceholderImage && (r.postPlaceholderImage = t.url))
							}), r
						})(g, v, o())
					} catch (P) {
						e = null
					} else e = g;
					r(T({
						flairId: t,
						template: e || g
					}))
				} else I && I.websocket.close();
				return Object(j.a)({
					...N,
					actionInfo: {
						...N.actionInfo,
						success: L.ok
					}
				}), L.ok
			}, g = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", k = Object(d.a)(g), S = (e, t) => async (s, r, {
				apiContext: n
			}) => {
				const o = r(),
					a = Object(x.U)(o, {
						subredditId: e
					});
				if (!a) return !1;
				const i = await (async (e, t, s) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: m.fb.DELETE
					}))(n(), a.name, t),
					c = Object(h.e)(o, "delete_flair_template");
				return i.ok && s(k({
					flairId: t
				})), Object(j.a)({
					...c,
					actionInfo: {
						...c.actionInfo,
						success: i.ok
					}
				}), i.ok
			}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "h", (function() {
				return a
			})), s.d(t, "i", (function() {
				return i
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				n = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				a = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				i = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return w
			})), s.d(t, "d", (function() {
				return D
			})), s.d(t, "c", (function() {
				return U
			})), s.d(t, "a", (function() {
				return W
			})), s.d(t, "b", (function() {
				return B
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/linkMatchers/customLinks.ts"),
				i = s("./src/reddit/actions/gold/powerups.ts"),
				c = s("./src/reddit/actions/login.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/subscription/constants.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/constants/posts.ts"),
				p = s("./src/lib/makeApiRequest/index.ts"),
				b = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts");
			var h = s("./src/graphql/operations/SubscribedSubreddits.json"),
				O = s("./src/lib/makeGqlRequest/index.ts"),
				x = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var j = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				y = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = s("./src/reddit/models/GqlTopLevelField.ts"),
				T = s("./src/reddit/models/User/index.ts");

			function C(e) {
				const t = [],
					s = [],
					r = {},
					n = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const i of o.edges) {
					if (i.node.__typename !== T.c.AvailableRedditor) continue;
					const e = Object(j.a)(i.node.profile);
					r[e.id] = e;
					const {
						isFavorite: s
					} = i.node.profile;
					s && t.push(e.id)
				}
				const {
					subscribedSubreddits: a
				} = e.identity;
				for (const i of a.edges) {
					if (i.node.__typename !== _.a.Subreddit) continue;
					const e = Object(y.a)(i.node);
					n[e.id] = e;
					const {
						isFavorite: t
					} = i.node;
					t && s.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: s,
					profiles: r,
					subreddits: n
				}
			}
			var g = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/selectors/profile.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/subscriptions.ts"),
				E = s("./src/reddit/selectors/user.ts");
			const v = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				L = Object(o.a)(l.c),
				F = Object(o.a)(l.b),
				N = Object(o.a)(l.a),
				P = Object(o.a)(l.h),
				w = (Object(o.a)(l.i), Object(o.a)(l.g), () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					e(F());
					const n = await (e => Object(O.a)(e, h))(s());
					if (n.ok) {
						const t = C(n.body.data);
						e(L(t))
					} else e(N({
						error: n.error
					}))
				}),
				R = (e, t) => t.type === m.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				D = (e, t, s) => async (o, l, {
					apiContext: h
				}) => {
					let O = e.map(e => e.type === m.a.SUBREDDIT ? {
						id: Object(S.F)(l(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(k.m)(l(), e.name),
						name: `${n.bc}${e.name}`,
						type: e.type
					});
					if (!Object(E.K)(l())) return o(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void o(Object(c.j)());
					const j = Object(E.j)(l());
					if (j) {
						const t = O.length,
							s = e.length;
						if (O = O.filter(e => !R(j, e)), (e = e.filter(e => !R(j, e))).length !== s || O.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(u.f)(Object(u.e)(e, g.b.Error)))
						}
						if (!e.length && !O.length) return
					}
					if (o(P({
							identifiers: O,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(I.b)(l()),
							userIsSubscriber: t,
							widgetId: s
						})), (await ((e, {
							subredditIds: t,
							subredditNames: s,
							subscribe: r
						}) => Object(p.a)(Object(b.a)(e, [f.a]), {
							method: n.fb.POST,
							endpoint: Object(x.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: r ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: s && s.join(",") || void 0,
								api_type: "json"
							}
						}))(h(), {
							subredditNames: O.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						O.filter(e => e.type === m.a.SUBREDDIT).forEach(({
							id: e
						}) => o(Object(i.i)(e, {
							forceLoad: !0,
							fullData: !1
						})));
						const s = 1 === e.length ? `${"subreddit"===e[0].type?a.d.subreddit:a.d.profile}${e[0].name}` : `${r.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						o(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", t ? "followed" : "unfollowed"), r.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							}) : r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", t ? "joined" : "left"), r.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						o(P({
							identifiers: O,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(I.b)(l()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const n = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(u.f)(Object(u.e)(n, g.b.Error)))
					}
				}, A = Object(o.a)(l.f), U = e => async (t, s, {
					apiContext: r
				}) => {
					const o = s(),
						a = Object(S.M)(o, {
							identifier: e
						});
					if (!a) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === m.a.SUBREDDIT ? a.name : `u_${a.name}`,
						c = o.subscriptions.favoriteSubredditOrder || [],
						d = o.subscriptions.favoriteProfileOrder || [],
						l = c.indexOf(e.id),
						h = d.indexOf(e.id),
						O = -1 === l && -1 === h,
						x = o.subreddits.models,
						j = o.profiles.models;
					t(A({
						makeFavorite: O,
						identifier: e,
						subredditModels: x,
						profileModels: j
					}));
					const y = {
							type: e.type,
							name: a.name
						},
						_ = () => Object(S.hb)(s(), {
							identifier: y
						});
					(_() || (await t(D([y], !0)), _())) && ((await ((e, t, s) => Object(p.a)(Object(b.a)(e, [f.a]), {
						method: n.fb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(r(), i, O)).ok || (t(A({
						makeFavorite: !O,
						identifier: e,
						subredditModels: x,
						profileModels: j
					})), t(Object(u.f)({
						text: v(),
						kind: g.b.Error
					}))))
				}, M = Object(o.a)(l.d), W = e => async (t, s, {
					apiContext: r
				}) => {
					const o = s().multireddits.models,
						a = () => {
							t(Object(u.f)({
								text: v(),
								kind: g.b.Error
							}))
						},
						i = o[e];
					if (!i) return void a();
					const c = !i.isFavorited;
					t(M({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, s) => Object(p.a)(Object(b.a)(e, [f.a]), {
						method: n.fb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(r(), e, c)).ok || (t(M({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), a())
				}, K = Object(o.a)(l.e), B = e => async (t, s, {
					apiContext: o
				}) => {
					const a = s(),
						i = a.multireddits.models;
					if (!Object(E.K)(a)) return;
					const c = (e = !0) => {
							t(Object(u.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "2I4uia"
								}) : r.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: g.b.Error
							}))
						},
						d = i[e];
					if (!d) return void c();
					const l = !d.isFollowed;
					t(K({
						follow: l,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, s) => Object(p.a)(Object(b.a)(e, [f.a]), {
						method: n.fb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: s ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, l)).ok || (t(K({
						follow: !l,
						multiredditPath: e,
						multiredditsModelsState: i
					})), c(l))
				}
		},
		"./src/reddit/components/CategoryTag/index.m.less": function(e, t, s) {
			e.exports = {
				metaFlair: "_7_d4sJjd2oYzaJuU_QpOI",
				"m-lightboxHeader": "_1rtoCmW_7bFJWYffSOwt4R",
				mLightboxHeader: "_1rtoCmW_7bFJWYffSOwt4R"
			}
		},
		"./src/reddit/components/CategoryTagList/index.m.less": function(e, t, s) {
			e.exports = {
				categoryTagWrapper: "_13jLUpnQtcA8FXyw5Kv06q"
			}
		},
		"./src/reddit/components/CategoryTagList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/lib/addQueryParams/index.ts");
			const b = (e, t, s, r, n) => {
				const o = n || "*:*",
					a = s || l.T;
				return Object(p.a)("/search", {
					q: o,
					sort: a,
					t: r,
					category_name: e,
					category: t
				})
			};
			var f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				h = s("./src/reddit/selectors/telemetry.ts");
			const O = (e, t) => s => ({
				source: "post",
				action: "click",
				noun: "meta_flair",
				...h.defaults(s),
				correlationId: Object(f.c)(f.a.SearchResults),
				post: h.post(s, e),
				search: h.postFlairClickToSearch(s, t),
				subreddit: h.subreddit(s)
			});
			var x = s("./src/reddit/components/CategoryTag/index.m.less"),
				j = s.n(x);
			class y extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const e = {
							id: this.props.category.categoryId,
							title: this.props.category.categoryName,
							eventType: u.a.SUBREDDIT,
							originElement: "meta_flair"
						};
						this.props.sendEvent(O(this.props.postId, e))
					}
				}
				render() {
					const e = this.props.category,
						t = this.props.inLightboxHeader,
						s = e.categoryId,
						r = e.categoryName,
						o = n.a.createElement("span", null, r);
					return n.a.createElement("span", {
						className: Object(d.a)(j.a.metaFlair, {
							[j.a["m-lightboxHeader"]]: t
						})
					}, n.a.createElement(m.a, {
						onClick: this.onClick,
						to: b(r, s, l.Rb.Relevance, l.Zb.DAY),
						children: o
					}))
				}
			}
			var _ = s("./src/reddit/components/CategoryTagList/index.m.less"),
				T = s.n(_);
			const C = Object(o.b)(() => Object(a.c)({
				labelNSFW: c.T
			}));
			t.a = C(Object(i.c)(({
				postCategories: e,
				postId: t,
				inLightboxHeader: s,
				sendEvent: r
			}) => n.a.createElement("span", {
				className: s ? void 0 : T.a.categoryTagWrapper
			}, e.map(e => n.a.createElement(y, {
				postId: t,
				category: e,
				key: e.categoryId,
				inLightboxHeader: s,
				sendEvent: r
			})))))
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, s) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, s) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return W
			})), s.d(t, "a", (function() {
				return K
			})), s.d(t, "b", (function() {
				return $
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/pick.js"),
				o = s.n(n),
				a = s("./node_modules/polished/dist/polished.es.js"),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/Emoji/index.m.less"),
				f = s.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = p.a.wrapped(({
				backgroundImage: e,
				style: t,
				...s
			}) => c.a.createElement("div", h({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, s)), "EmojiDisplay", f.a);
			var x = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				j = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				y = s("./src/reddit/constants/colors.ts"),
				_ = s("./src/reddit/constants/parameters.ts"),
				T = s("./src/reddit/controls/InternalLink/index.tsx"),
				C = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/models/Flair/index.ts"),
				S = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = s("./src/reddit/components/Flair/index.m.less"),
				E = s.n(I);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const L = Object(j.a)(x.b),
				F = p.a.div("FlairWrapper", E.a),
				N = p.a.wrapped(d.a, "CloseButton", E.a),
				P = p.a.wrapped(Object(m.a)(({
					forceSmallEmojis: e,
					theme: t,
					...s
				}) => {
					const r = t;
					return c.a.createElement(O, v({
						style: {
							...w(!!e, r) || {}
						}
					}, s))
				}), "FlairEmojiDisplay", E.a),
				w = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				R = (e, t) => {
					const s = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(s, {
						[_.p]: r,
						[_.s]: t ? "1" : ""
					})
				},
				D = e => e.isFlairFilter ? c.a.createElement(T.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(T.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: R(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class A extends c.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = c.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[E.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(S.a)(this.props).flair,
							color: `${W(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(N, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(g.a, {
						className: E.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(S.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(L, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(D, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const U = Object(m.a)(A),
				M = Object(m.a)(e => {
					let t = "",
						s = !1;
					const r = e.richtext.map((r, n) => {
						if (r.e === k.c.Emoji) {
							const o = r;
							return t += o.a, s = !0, c.a.createElement(P, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: o.u,
								key: n,
								title: o.a
							})
						} {
							const e = r;
							return t += e.t, c.a.createElement("span", {
								key: n
							}, e.t)
						}
					});
					let n;
					s && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (n = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const o = c.a.createElement(F, {
						className: Object(u.a)(e.className, {
							[E.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...n,
							backgroundColor: e.backgroundColor || Object(S.a)(e).flair,
							color: `${W(e)}`
						}
					}, r, e.isSelected && c.a.createElement(N, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(g.a, {
						className: E.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(S.a)(e).flair
						}
					})));
					return c.a.createElement(D, {
						flair: o,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				W = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(S.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(C.a)(Object(S.a)(e).post, y.b.black, y.b.white) : e.textColor === k.e.Dark ? y.b.black : y.b.white,
				K = p.a.wrapped(U, "TextFlair", E.a),
				B = p.a.wrapped(M, "RichTextFlair", E.a),
				H = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(a.j)(.1, Object(S.a)(o()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				G = p.a.wrapped(e => {
					const t = H(e),
						s = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(D, {
						flair: s,
						searchableTerm: e.text
					})
				}, "MetaFlair", E.a);

			function $(e) {
				const {
					className: t,
					disabled: s = !1,
					flair: n,
					isFlairFilter: o,
					isSelected: a,
					onClick: i,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: f
				} = e, h = Object(u.a)({
					[E.a.flairVariant]: o,
					[E.a.small]: o && !e.large,
					[E.a.large]: o && e.large
				}, t);
				switch (n.type) {
					case k.f.Richtext:
						return s || !n.richtext ? null : c.a.createElement(B, {
							backgroundColor: n.backgroundColor,
							className: h,
							forceSmallEmojis: b,
							isFlairFilter: o,
							isSelected: a,
							onClick: i,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: n.richtext,
							subredditName: m,
							textColor: n.textColor,
							to: f
						});
					case k.f.Text:
						return s || !n.text ? null : c.a.createElement(K, {
							backgroundColor: n.backgroundColor,
							className: h,
							isFlairFilter: o,
							isSelected: a,
							onClick: i,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !p,
							to: f
						});
					case k.f.Meta:
						return c.a.createElement(K, {
							backgroundColor: n.backgroundColor,
							className: t,
							isFlairFilter: o,
							subredditName: m,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !p,
							to: f
						});
					case k.f.Nsfw:
					case k.f.Spoiler:
						return c.a.createElement(G, {
							className: t,
							text: n.text,
							type: n.type
						});
					case k.f.Quarantined:
						return null;
					case k.f.Oc:
						return c.a.createElement(K, {
							backgroundColor: y.b.alienblue,
							text: n.text,
							textColor: k.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return n.text ? c.a.createElement(K, {
							backgroundColor: n.backgroundColor,
							className: h,
							isFlairFilter: o,
							onClick: i,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: n.text,
							redditStyle: !p,
							to: f
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/noop.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/Flair/index.tsx"),
				l = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				m = s("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.T
				}),
				b = Object(i.b)(p),
				f = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = b(({
				className: e,
				isFlairFilter: t,
				onClick: s,
				onMouseDown: r,
				disabled: o = !1,
				flair: i,
				labelNSFW: c,
				subredditName: m
			}) => {
				const p = !!i.find(e => e.type === u.f.Richtext),
					b = i.map(e => {
						if (e.type === u.f.Text && p) return null;
						if (!c && e.type === u.f.Nsfw) return null;
						const i = Object(l.j)(e),
							b = `/r/${m}/`,
							h = r ? () => r(e) : n.a;
						return a.a.createElement(d.b, {
							isFlairFilter: t,
							key: f(e),
							onClick: s,
							onMouseDown: h,
							disabled: o,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: m,
							to: Object(l.e)(b, i)
						})
					});
				return a.a.createElement("div", {
					className: e
				}, b)
			})
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return C
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/CategoryTagList/index.tsx"),
				l = s("./src/reddit/components/FlairList/index.tsx"),
				u = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/trackers/postFlair.ts"),
				h = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/components/FlairWrapper/index.m.less"),
				_ = s.n(y);
			const T = Object(a.b)(() => Object(i.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.p)(e, {
						pageLayer: t
					}),
					isPostFlairEnabled: (e, t) => Object(O.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, {
						post: t
					}) => Object(x.w)(e, t),
					subredditName: (e, {
						post: t
					}) => Object(j.U)(e, {
						subredditId: t.belongsTo.id
					}).name
				})),
				C = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: r.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: h.f.Oc
					}), e.isMeta && t.push({
						text: r.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: h.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = T(({
				className: e,
				disableFlair: t,
				flairPosition: s,
				isFlairFilter: r,
				isPostFlairEnabled: n,
				nowrap: a,
				post: i,
				postCategories: m,
				sendEvent: O,
				showCategoryTag: x,
				subredditName: j,
				titleFlair: y
			}) => {
				const T = Object(u.b)(),
					g = s === h.b.Left,
					k = y || C(i),
					S = [];
				let I = [];
				g ? k.map(e => {
					Object(b.q)(e.type) ? S.push(e) : I.push(e)
				}) : I = k;
				const E = a ? _.a.flairNoWrap : S.length > 0 || I.length > 0 || m && x ? _.a.flairWrapper : null,
					v = e => {
						const t = {
							id: i.belongsTo.id,
							eventType: i.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(p.d)(p.a.SearchResults), O && O(Object(f.a)(i.id, t))
					},
					L = e => {
						Object(p.d)(p.a.SearchResults), O && O(Object(f.e)(e, i.id))
					},
					F = !(t || !k || !k.length),
					N = !!(x && m && m.length);
				return F || N ? o.a.createElement("div", {
					className: Object(c.a)(E, e),
					"data-ignore-click": T
				}, F && S && o.a.createElement(l.a, {
					className: _.a.flairList,
					isFlairFilter: r,
					key: "leftFlair",
					onClick: v,
					onMouseDown: L,
					flair: S,
					disabled: !n,
					subredditName: j
				}), F && o.a.createElement(l.a, {
					className: _.a.flairList,
					isFlairFilter: r,
					key: "rightFlair",
					onClick: v,
					onMouseDown: L,
					flair: I,
					disabled: !n,
					subredditName: j
				}), N && o.a.createElement(d.a, {
					inLightboxHeader: a,
					postId: i.id,
					postCategories: m
				})) : null
			})
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(r.a)({
				ErrorComponent: o,
				getComponent: () => Object(n.a)(() => s.e("SubredditHovercard").then(s.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			s("./node_modules/react/index.js");
			const r = e => new Promise((t, s) => {
				const r = new Image;
				r.onload = () => t(r), r.onerror = s, r.src = e
			})
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return O
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				h = e => n.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				O = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				x = Object(a.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				j = Object(c.a)(O, [i.a.Click, i.a.Keydown]),
				y = Object(c.a)(h, [i.a.Click, i.a.Keydown]),
				_ = Object(o.b)(x);
			t.c = _(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(j, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(y, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				a = s("./src/reddit/constants/elementIds.ts"),
				i = s("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const s = Object(o.a)(e, t);
				class r extends n.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(a.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return n.a.createElement(s, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(r)
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js");
			const n = Object(r.createContext)(!1);

			function o() {
				return Object(r.useContext)(n)
			}
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return A
			}));
			var r = s("./src/lib/isUrl/index.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = s("./src/lib/constants/icons.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/constants/elementClassNames.ts"),
				b = s("./src/reddit/controls/ContentType/index.m.less"),
				f = s.n(b);
			const h = e => Object(a.a)(f.a.contentTypeIcon, e.className),
				O = {
					embed: u.a.embed,
					gallery: u.a.media_gallery,
					gifvideo: u.a.gif_post,
					image: u.a.image_post,
					meta: u.a.poll_post,
					rpan: u.a.video_live,
					rtjson: u.a.text_post,
					text: u.a.text_post,
					video: u.a.video_post
				};

			function x(e) {
				const t = h(e),
					s = e.type && O[e.type] || u.a.link_post;
				return o.a.createElement(m.a, {
					name: s,
					className: Object(a.a)({
						[p.a]: s === u.a.link_post
					}, t)
				})
			}
			var j = s("./src/reddit/controls/OutboundLink/index.tsx"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/models/Theme/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/components/Thumbnail/index.m.less"),
				k = s.n(g);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => e.placeholderImage || Object(C.a)(e).placeholderImage,
				E = e => e.placeholderImage ? "cover" : Object(C.a)(e).placeholderImagePosition,
				v = c.a.span("LinkText", k.a),
				L = ({
					className: e,
					onClick: t,
					children: s
				}) => o.a.createElement("div", {
					onClick: t,
					className: Object(a.a)(k.a.linkIcon, e)
				}, s),
				F = e => o.a.createElement("img", {
					alt: e.alt,
					className: Object(a.a)(k.a.hiddenImage, e.className)
				}),
				N = e => {
					const t = o.a.createRef(),
						{
							src: s,
							errorSrc: r
						} = e;
					return s && r && Object(l.a)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${r})`)
					}), o.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(a.a)(k.a.thumbnail, k.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(C.a)(e).button : Object(C.a)(e).line
						}
					}, e.isOutbound && o.a.createElement(L, {
						className: e.linkIconClassName
					}, o.a.createElement(y.a, {
						className: Object(a.a)(k.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(v, {
						className: e.linkTextClassName
					}, e.text)), o.a.createElement(F, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				P = e => e.isOutbound ? Object(C.a)(e).button : e.placeholderImage ? "transparent" : Object(C.a)(e).line,
				w = e => {
					const t = I(e),
						s = t && {
							background: Object(T.g)(Object(C.a)(e).placeholder, t, E(e))
						};
					return o.a.createElement("div", {
						className: Object(a.a)(k.a.thumbnail, k.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: P(e)
						}
					}, (!e.placeholderImage || e.showContentType) && o.a.createElement(x, {
						className: Object(a.a)(e.contentTypeClassName, k.a.contentType, {
							[k.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && o.a.createElement(L, {
						className: e.linkIconClassName
					}, o.a.createElement(y.a, {
						className: Object(a.a)(k.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(v, {
						className: e.linkTextClassName
					}, e.text)))
				},
				R = e => o.a.createElement(N, S({}, e, {
					className: Object(a.a)(k.a.blurredThumbnail, e.className)
				})),
				D = Object(i.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: n,
						crosspost: i,
						forceShowNSFW: c,
						isMeta: d,
						linkIconClassName: l,
						linkTextClassName: u,
						outboundLinkIconClassName: m,
						post: p,
						redditStyle: b,
						removeLink: f,
						showContentType: h,
						templatePlaceholderImage: O,
						text: x,
						theme: y,
						usePreview: T
					} = e, C = !y.subredditContext.shouldShowNSFWContent && (p.isNSFW || !(!i || !i.isNSFW)) && !c, g = I({
						placeholderImage: O,
						redditStyle: b,
						theme: y
					}), S = A(e), E = M(p, t, g, C, x, y, S, d, h, f, b, l, u, m, n), v = Object(_.D)(p);
					return Object(r.a)(v) && !f && v.indexOf("redditmedia") < 0 ? o.a.createElement("div", {
						className: Object(a.a)(k.a.container, T ? k.a.usePreview : "", s)
					}, o.a.createElement(j.b, {
						href: Object(_.D)(p),
						isSponsored: p.isSponsored,
						postId: p.id,
						source: p.source
					}, E)) : o.a.createElement("div", {
						className: Object(a.a)(k.a.container, T ? k.a.usePreview : "", s)
					}, E)
				}),
				A = ({
					crosspost: e,
					post: t,
					url: s,
					usePreview: r
				}) => {
					if (s) return s;
					const {
						preview: n,
						media: o,
						thumbnail: a
					} = e || t;
					return r && n ? n.url : t.isSponsored && n && "default" === a.url ? n.url : U(o) ? o.scrubberThumbSource : a.url
				},
				U = e => !!e && e.type === _.o.LIVEVIDEO,
				M = (e, t, s, n, i, c, l, u, m, p, b, f, h, O, x) => {
					const j = e.source && !e.isSponsored || !1;
					if (Object(r.a)(l)) {
						const s = U(e.media),
							r = s ? {
								errorSrc: d.U
							} : {},
							u = Object(a.a)(t, {
								[k.a.verticallyCenterThumbnail]: s
							});
						return n ? o.a.createElement(R, S({
							"data-click-id": "image",
							src: l
						}, r, {
							className: u,
							isOutbound: j && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: O,
							redditStyle: b,
							text: i,
							theme: c
						})) : o.a.createElement(N, S({
							alt: e.title,
							className: u,
							src: l
						}, r, {
							isOutbound: j && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: O,
							redditStyle: b,
							text: i,
							theme: c
						}))
					}
					return o.a.createElement(w, {
						className: t,
						contentTypeClassName: x,
						placeholderImage: s,
						isMeta: u,
						isOutbound: j && !p,
						linkIconClassName: f,
						linkTextClassName: h,
						outboundLinkIconClassName: O,
						redditStyle: b,
						showContentType: m,
						text: i,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = D
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, s) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/constants/elementClassNames.ts"),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styles.m.less"),
				i = s.n(a);
			t.a = r.a.wrapped(o.b, "styledOutboundLink", {
				styledOutboundLink: `${i.a.styledOutboundLink} ${n.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, s) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/constants/comments.ts"),
				n = s("./src/reddit/selectors/comments.ts"),
				o = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case r.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case r.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case r.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				d = (e, t) => e.type === r.a.MoreComments ? t[e.id].numComments : 1,
				l = (e, t, s, r) => {
					let o = Object(n.n)(r, {
							commentLink: t,
							commentsPageKey: e
						}),
						a = t;
					for (; o && o.depth > s && o.prev && (a = o.prev, (o = Object(n.n)(r, {
							commentLink: a,
							commentsPageKey: e
						})) && !(o.depth <= s)););
					return a.id
				},
				u = (e, t, s) => {
					const {
						commentLists: r,
						comments: n
					} = e, {
						head: i
					} = r[t];
					if (i) return Object.keys(n).filter(e => {
						const t = n[e];
						return !(!t.isStickied || !((e, t) => {
							const s = Object(a.c)(e, {
								experimentEligibilitySelector: a.a,
								experimentName: o.x,
								expEventOverride: t
							});
							return !!(Object(o.Jd)(s) ? void 0 : s)
						})(s)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			}));
			var r = s("./src/reddit/helpers/correlationIdTracker.ts"),
				n = s("./src/reddit/selectors/telemetry.ts"),
				o = s("./src/reddit/helpers/flair.ts");
			const a = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: "post_flair",
					...n.defaults(s),
					actionInfo: n.actionInfo(s),
					correlationId: Object(r.c)(r.a.SearchResults),
					post: n.post(s, e),
					search: {
						...n.postFlairClickToSearch(s, t),
						query: `flair_name:'${t.postFlairName}'`,
						queryId: Object(r.c)(r.a.SearchResults)
					},
					subreddit: n.subreddit(s)
				}),
				i = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...n.defaults(t),
					actionInfo: n.actionInfo(t),
					correlationId: Object(r.c)(r.a.SearchResults),
					search: n.postFlairClickToSearch(t, e),
					subreddit: n.subreddit(t)
				}),
				c = e => t => {
					const s = Object(o.g)(e);
					return {
						...n.defaults(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: n.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					}
				},
				d = () => e => ({
					...n.defaults(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: n.subreddit(e)
				}),
				l = e => t => {
					const s = Object(o.g)(e);
					return {
						...n.defaults(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: n.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					}
				},
				u = (e, t) => s => {
					const a = Object(o.g)(e),
						i = n.post(s, t);
					return {
						...n.defaults(s),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: n.subreddit(s),
						postFlair: {
							id: e.templateId,
							title: a
						},
						post: i,
						search: {
							query: `flair_name:'${a}'`,
							subredditId: i ? i.subredditId : void 0,
							subredditName: i ? i.subredditName : void 0,
							postFlairName: a,
							originElement: "post_flair",
							queryId: Object(r.c)(r.a.SearchResults),
							originPageType: s.platform.currentPage ? n.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0
						}
					}
				}
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./src/reddit/constants/history.ts"),
				n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				o = s("./src/reddit/selectors/telemetry.ts"),
				a = s("./node_modules/uuid/v4.js"),
				i = s.n(a);

			function c() {
				const e = Object(n.Z)();
				return {
					[r.a.ClickSource]: e ? Object(o.getPageTypeFromCurrentPage)(e) : void 0,
					[r.a.ClickId]: i()()
				}
			}
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./src/reddit/contexts/Post/index.tsx");

			function o() {
				const e = Object(r.useContext)(n.c);
				if (!e) throw new Error("No Post context!");
				return e
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(r.useContext)(n.b)
			}
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(o.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var a = (e = o, t) => {
					switch (t.type) {
						case n.o:
							return t.payload;
						case n.p:
						default:
							return e
					}
				},
				i = s("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var d = (e = c, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.h:
					case i.f: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case i.a:
					case i.e: {
						const {
							key: s,
							error: r
						} = t.payload;
						return {
							...e,
							[s]: r || {}
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var u = (e = l, t) => {
				switch (t.type) {
					case i.c:
					case i.g: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case i.d:
						case i.h: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case i.b:
						case i.a:
						case i.f:
						case i.e: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				b = Object(r.c)({
					error: d,
					fullyLoaded: u,
					pending: p
				}),
				f = s("./src/reddit/actions/comment/constants.ts");
			const h = [];
			var O = (e = h, t) => {
					switch (t.type) {
						case f.E:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case f.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case f.u:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				x = s("./node_modules/lodash/uniqBy.js"),
				j = s.n(x),
				y = s("./node_modules/lodash/values.js"),
				_ = s.n(y),
				T = s("./src/reddit/actions/comment/websocket/constants.ts");
			const C = {};

			function g(e) {
				return j()(e, "id").sort((e, t) => e.created - t.created)
			}
			var k = (e = C, t) => {
					switch (t.type) {
						case i.f:
						case f.w:
						case i.b: {
							const {
								comments: s,
								key: r
							} = t.payload, n = e[r] ? e[r] : [], o = function(e, t) {
								return _()(e).map(e => {
									const s = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: s,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(s, n.find(e => e.stickied)), a = g([...n, ...o]);
							return {
								...e,
								[r]: [...a]
							}
						}
						case T.b:
						case T.c:
						case T.d:
						case f.J:
						case f.I: {
							const {
								comment: {
									id: s,
									created: r,
									isStickied: n,
									authorId: o
								},
								commentsPageKey: a,
								isChatSort: i
							} = t.payload;
							return !1 === i ? e : {
								...e,
								[a]: [...g([...e[a] ? e[a] : [], {
									id: s,
									created: r,
									stickied: n,
									authorId: o
								}])]
							}
						}
						default:
							return e
					}
				},
				S = s("./node_modules/lodash/mapValues.js"),
				I = s.n(S),
				E = s("./src/reddit/helpers/commentList/index.ts"),
				v = s("./src/reddit/models/Comment/index.ts");
			const L = {};

			function F(e) {
				const t = e;
				return I()(t, ({
					depth: e,
					next: t,
					prev: s
				}) => ({
					depth: e,
					next: t,
					prev: s
				}))
			}
			var N = (e = L, t) => {
				switch (t.type) {
					case f.w: {
						const {
							comments: s,
							commentLists: r,
							continueThreads: n,
							key: o,
							moreCommentsItem: a,
							moreComments: i
						} = t.payload, c = r[a.postId], d = e[o], l = {}, u = d[a.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							l[e] = {
								...d[e],
								next: c.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							l[e] = {
								...d[e],
								prev: c.tail || u.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(E.c)({
									commentLink: c.head,
									commentsDict: s,
									moreCommentsDict: i,
									continueThreadDict: n
								}),
								t = Object(E.c)({
									commentLink: c.tail,
									commentsDict: s,
									moreCommentsDict: i,
									continueThreadDict: n
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...F(s),
								...F(n),
								...F(i),
								...l
							}
						}
					}
					case i.b:
					case i.f: {
						const {
							comments: s,
							continueThreads: r,
							key: n,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...F(s),
								...F(r),
								...F(o)
							}
						}
					}
					case T.b:
						const {
							comment: s, commentsPageKey: r, depth: n, headCommentId: o, originId: a, isChatSort: c
						} = t.payload, d = e[r], l = {};
						let u = null;
						if (c) return o && (l[o] = {
							...d[o],
							prev: Object(v.h)(s.id)
						}, u = Object(v.h)(o)), {
							...e,
							[r]: {
								...e[r],
								...l,
								[s.id]: {
									depth: 0,
									next: u,
									prev: null
								}
							}
						}; {
							let t = null;
							const o = s.parentId;
							if (a && o) {
								const s = "moreComments-" + a;
								if (d[o] && !d[s]) {
									const a = d[o].next;
									return a && (l[a.id] = {
										...d[a.id],
										prev: Object(v.i)(s)
									}, u = a), l[o] = {
										...d[o],
										next: Object(v.i)(s)
									}, t = Object(v.h)(o), {
										...e,
										[r]: {
											...e[r],
											...l,
											[s]: {
												depth: n || 0,
												next: u,
												prev: t
											}
										}
									}
								}
							}
							return e
						}
						case f.J: {
							const {
								comment: s,
								commentsPageKey: r,
								headCommentId: n
							} = t.payload, o = e[r], a = {};
							let i = null;
							return n && (a[n] = {
								...o[n],
								prev: Object(v.h)(s.id)
							}, i = Object(v.h)(n)), {
								...e,
								[r]: {
									...e[r],
									...a,
									[s.id]: {
										depth: 0,
										next: i,
										prev: null
									}
								}
							}
						}
						case f.I: {
							const {
								comment: s,
								commentsPageKey: r,
								parentCommentId: n,
								depth: o
							} = t.payload, a = e[r], i = {};
							let c = null;
							if (!a[n]) return e;
							const d = a[n].next;
							return d && (i[d.id] = {
								...a[d.id],
								prev: Object(v.h)(s.id)
							}, c = d), i[n] = {
								...a[n],
								next: Object(v.h)(s.id)
							}, {
								...e,
								[r]: {
									...e[r],
									...i,
									[s.id]: {
										depth: o,
										next: c,
										prev: Object(v.h)(n)
									}
								}
							}
						}
						default:
							return e
				}
			};
			const P = {};
			var w = (e = P, t) => {
				switch (t.type) {
					case T.b:
					case T.c:
					case f.J: {
						const {
							comment: s,
							commentsPageKey: r,
							isChatSort: n
						} = t.payload;
						return !1 === n ? e : {
							...e,
							[r]: s.id
						}
					}
					case i.b:
					case i.f: {
						const {
							commentLists: s,
							key: r,
							postId: n
						} = t.payload;
						return {
							...e,
							[r]: s[n] && s[n].head ? s[n].head.id : null
						}
					}
					default:
						return e
				}
			};
			const R = {};
			var D = (e = R, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.c:
					case i.h: {
						const {
							key: s,
							postId: r
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case f.J: {
						const {
							parentId: s,
							commentsPageKey: r
						} = t.payload;
						return e[r] ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				api: b,
				followed: O,
				keyToChatCommentLinks: k,
				keyToCommentThreadLinkSets: N,
				keyToHeadCommentId: w,
				keyToPostId: D,
				ads: a
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "u", (function() {
				return j
			})), s.d(t, "w", (function() {
				return y
			})), s.d(t, "x", (function() {
				return _
			})), s.d(t, "k", (function() {
				return C
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "I", (function() {
				return k
			})), s.d(t, "n", (function() {
				return S
			})), s.d(t, "o", (function() {
				return I
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "h", (function() {
				return L
			})), s.d(t, "a", (function() {
				return F
			})), s.d(t, "b", (function() {
				return N
			})), s.d(t, "q", (function() {
				return P
			})), s.d(t, "m", (function() {
				return w
			})), s.d(t, "t", (function() {
				return R
			})), s.d(t, "A", (function() {
				return D
			})), s.d(t, "K", (function() {
				return A
			})), s.d(t, "s", (function() {
				return U
			})), s.d(t, "D", (function() {
				return M
			})), s.d(t, "E", (function() {
				return W
			})), s.d(t, "G", (function() {
				return K
			})), s.d(t, "r", (function() {
				return B
			})), s.d(t, "e", (function() {
				return H
			})), s.d(t, "v", (function() {
				return G
			})), s.d(t, "L", (function() {
				return $
			})), s.d(t, "f", (function() {
				return q
			})), s.d(t, "i", (function() {
				return Y
			})), s.d(t, "H", (function() {
				return V
			})), s.d(t, "C", (function() {
				return X
			})), s.d(t, "J", (function() {
				return J
			})), s.d(t, "p", (function() {
				return z
			})), s.d(t, "M", (function() {
				return Q
			})), s.d(t, "F", (function() {
				return Z
			})), s.d(t, "y", (function() {
				return ee
			})), s.d(t, "z", (function() {
				return te
			})), s.d(t, "B", (function() {
				return se
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/values.js"),
				n = s.n(r),
				o = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeCommentPermalink/index.ts"),
				i = s("./src/lib/objectSelector/index.ts"),
				c = s("./src/reddit/constants/comments.ts"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				b = s("./src/lib/initializeClient/installReducer.ts"),
				f = s("./src/reddit/reducers/features/comments/index.ts"),
				h = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(b.a)({
				features: {
					comments: f.a
				},
				pages: {
					comments: h.a
				}
			});
			const O = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				x = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				j = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				y = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				_ = (e, t) => {
					const s = y(e, t);
					if (s) return Object(p.a)(e, {
						commentId: s
					})
				},
				T = [],
				C = Object(i.a)((e, t) => {
					const s = _(e, t),
						r = s && s.id;
					if (!r) return T;
					const {
						commentsPageKey: n
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[n], a = [];
					let i = {
						id: r,
						type: c.a.Comment
					};
					do {
						a.push(i), i = o[i.id].next
					} while (i);
					return a
				}),
				g = (e, t) => y(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				k = (e, {
					commentsPageKey: t
				}) => {
					const s = e.pages.comments.keyToPostId[t];
					return s ? e.posts.models[s] : null
				},
				S = (e, {
					commentId: t,
					commentLink: s,
					commentsPageKey: r
				}) => {
					const n = e.pages.comments.keyToCommentThreadLinkSets[r];
					return n ? s ? n[s.id] : t ? n[t] : null : null
				},
				I = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				E = (e, t) => {
					const s = t.commentsPageKey ? S(e, t) : null;
					return s ? s.depth : null
				},
				v = (e, {
					commentLink: t
				}) => {
					const {
						id: s,
						type: r
					} = t;
					switch (r) {
						case c.a.Comment:
							return e.features.comments.models[s];
						case c.a.MoreComments:
							return e.moreComments.models[s];
						case c.a.ContinueThread:
							return e.continueThreads.models[s];
						default:
							return null
					}
				},
				L = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, s = Object(d.s)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === s && e.features.comments.models[t].author !== o.B).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				F = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				N = e => e.moreComments.models,
				P = e => e.features.comments.models,
				w = (e, {
					commentId: t
				}) => {
					const s = Object(p.a)(e, {
						commentId: t
					});
					return s ? Object(a.a)(Object(l.E)(e, s), t) : ""
				},
				R = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				D = (e, {
					commentId: t,
					commentsPageKey: s
				}) => !!(t && e.features.comments.isEditing[s] && e.features.comments.isEditing[s][t]),
				A = (e, {
					commentId: t,
					commentsPageKey: s
				}) => !!(t && e.features.comments.replyFormOpen[s] && e.features.comments.replyFormOpen[s][t]),
				U = (e, {
					commentsPageKey: t
				}) => {
					const s = t && e.features.comments.replyFormOpen[t] || {},
						r = Object.keys(s).find(e => s[e]),
						n = Object(p.a)(e, {
							commentId: r
						}),
						o = n && E(e, {
							commentId: n.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (n && "number" == typeof o) return {
						...n,
						depth: o
					}
				},
				M = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				W = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				K = (e, {
					commentsPageKey: t
				}) => {
					const s = e.pages.comments.keyToPostId[t];
					if (s) {
						const t = n()(e.moreComments.models).find(t => t.postId === s && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				B = (e, {
					id: t
				}) => e.continueThreads.models[t],
				H = (e, {
					commentId: t
				}) => {
					const s = t ? e.features.comments.models[t] : void 0;
					if (!s) return null;
					const r = e.authorFlair.models[s.subredditId];
					return r ? r[s.author] : null
				},
				G = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				$ = (e, {
					draftKey: t
				}) => {
					const s = e.features.comments.submit.error[t];
					return s && s.fields ? s.fields.map(e => e.msg) : []
				},
				q = (e, {
					draftKey: t
				}) => {
					const s = e.features.comments.drafts[t];
					return !!s && s.autofocusDisabled
				},
				Y = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				V = (e, {
					commentId: t
				}) => {
					const s = t ? e.features.comments.submit.error[t] : void 0;
					return s && s.fields ? s.fields.map(e => e.msg) : void 0
				},
				X = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				J = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				z = e => e.features.comments.visitHighlightFilter,
				Q = (e, t) => {
					const s = Object(p.a)(e, t);
					if (s) return Object(u.Z)(e, s)
				},
				Z = (e, {
					postId: t
				}) => e.features.comments.newCommentsCount[t] ? e.features.comments.newCommentsCount[t] : 0,
				ee = (e, {
					commentId: t
				}) => {
					const s = Object(p.a)(e, {
							commentId: t
						}),
						r = s && s.authorId || "";
					return Object(m.S)(e, r)
				},
				te = (e, {
					commentId: t
				}) => {
					var s, r;
					return !!((null === (r = null === (s = e.pages) || void 0 === s ? void 0 : s.comments) || void 0 === r ? void 0 : r.followed) || []).find(e => e.id === t)
				},
				se = (e, {
					commentId: t
				}) => {
					var s, r;
					const n = ((null === (r = null === (s = e.pages) || void 0 === s ? void 0 : s.comments) || void 0 === r ? void 0 : r.followed) || []).find(e => e.id === t);
					return !!(n && n.expiresAt < Date.now())
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.227e3673c9a05d1b7e17.js.map