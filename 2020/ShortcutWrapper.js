// https://www.redditstatic.com/desktop2x/ShortcutWrapper.a74382f2831a42ca0bb2.js
// Retrieved at 5/26/2020, 12:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ShortcutWrapper"], {
		"./src/reddit/components/Comments/helpers/hiddenComments.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return c
			})), s.d(e, "a", (function() {
				return n
			})), s.d(e, "c", (function() {
				return d
			}));
			let o = {};

			function c(t) {
				return t in o
			}

			function n(t) {
				o[t] = !0
			}

			function d() {
				o = {}
			}
		},
		"./src/reddit/components/ShortcutWrapper/index.tsx": function(t, e, s) {
			"use strict";
			s.r(e);
			var o = s("./node_modules/lodash/noop.js"),
				c = s.n(o),
				n = s("./node_modules/prop-types/index.js"),
				d = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/react-shortcuts/lib/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/shortcuts.ts");
			var b = s("./src/reddit/selectors/structuredStyles.ts");
			const h = {
					[u.c.OpenIndex]: {
						osx: ["cmd + ?", "?"],
						windows: ["ctrl + ?", "?"],
						linux: ["ctrl + ?", "?"],
						other: ["ctrl + ?", "?"]
					},
					[u.c.Close]: "esc",
					[u.c.Konami]: "up up down down left right left right b a enter"
				},
				x = {
					[u.c.Upvote]: "a",
					[u.c.Downvote]: "z",
					[u.c.Save]: "s",
					[u.c.Hide]: "h",
					[u.c.OpenLink]: "l"
				},
				O = {
					[u.c.CollapseOrLoad]: "enter",
					[u.c.NextComment]: "j",
					[u.c.PrevComment]: "k",
					[u.c.Reply]: "r"
				};
			var v = {
					[u.d.CommentPage]: Object.assign({}, h, x, O),
					[u.d.Global]: Object.assign({}, h),
					[u.d.Lightbox]: Object.assign({}, h, x, O, {
						[u.c.NextPost]: "n",
						[u.c.PrevPost]: "p"
					}),
					[u.d.Listing]: Object.assign({}, h, x, {
						[u.c.OpenLightbox]: "enter",
						[u.c.NextPost]: "j",
						[u.c.PrevPost]: "k",
						[u.c.Expando]: "x",
						[u.c.NewPost]: "c",
						Reserved: ["n", "p", "r"]
					}),
					[u.d.Modqueue]: Object.assign({}, h, x, {
						[u.c.OpenLightbox]: "enter",
						[u.c.NextPost]: "j",
						[u.c.PrevPost]: "k",
						[u.c.Expando]: "x",
						[u.c.NewPost]: "c"
					})
				},
				j = s("./node_modules/react-router-redux/es/index.js"),
				C = s("./src/reddit/actions/comment/index.ts"),
				f = s("./src/reddit/actions/modal.ts"),
				g = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				P = s("./src/reddit/constants/elementIds.ts"),
				I = s("./src/reddit/constants/modals.ts"),
				w = s("./src/reddit/constants/postLayout.ts"),
				T = s("./src/reddit/helpers/overlay/index.ts"),
				_ = s("./src/reddit/helpers/trackers/lightbox.ts"),
				L = s("./src/reddit/helpers/trackers/shortcuts.ts"),
				k = s("./src/reddit/selectors/listings.ts"),
				E = s("./src/reddit/selectors/platform.ts"),
				N = s("./src/reddit/actions/shortcuts/active.ts"),
				S = s("./src/reddit/actions/shortcuts/utils.ts");
			const A = (t, e) => async (s, o, c) => {
				let {
					apiContext: n
				} = c;
				const d = o(),
					r = d.shortcuts.activePostId,
					i = d.listings.activeKey,
					a = d.listings.postOrder.ids[i];
				if (!r || a && a.indexOf(r) < 0) {
					const t = a[0];
					return s(Object(N.b)(t)), void Object(S.a)(t)
				}
				let l, m = r;
				do {
					if (!(l = Object(k.b)(d, {
							postId: m
						})) || !l.nextPost) return;
					m = l.nextPost.id
				} while (d.posts.models[m].hidden);
				d.shortcuts.namespace === u.d.Lightbox ? (D(s, l.nextPost), t(e ? _.b(r, "next_post", !0) : L.l(m))) : (s(Object(N.b)(m)), Object(S.a)(m), t(L.k(m)))
			}, K = t => async (e, s, o) => {
				let {
					apiContext: c
				} = o;
				const n = s(),
					d = Object(S.c)(n);
				if (!d) return;
				let r;
				const i = n.shortcuts.activeCommentId;
				if (i && i !== n.commentsPage.keyToHeadCommentId[d]) {
					const t = n.commentsPage.keyToCommentThreadLinkSets[d];
					for (r = t[i].prev.id; y.b(r);) r = t[r].prev.id
				} else {
					const t = n.commentsPage.keyToHeadCommentId[d];
					if (!t || i === t) return;
					r = t
				}
				e(Object(N.a)(r)), Object(S.a)(r), t(L.n(r))
			}, D = (t, e) => {
				Object(S.b)(u.b), t(Object(N.b)(e.id)), document.body.style.overflow = "", Object(S.a)(e.id), document.body.style.overflow = "hidden", t(Object(T.a)(e.permalink));
				const s = document.getElementById(P.d);
				s && s.scrollTo(0, 0)
			};
			var H = s("./src/reddit/actions/shortcuts/close.ts");
			const R = {
					[u.c.Close]: H.a,
					[u.c.CollapseOrLoad]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = n.shortcuts.activeCommentId,
							r = Object(S.c)(n);
						if (r && d) {
							if (n.comments.models[d]) e(C.nb({
								commentId: d,
								commentsPageKey: r,
								scrollToAndRemeasure: () => null
							}));
							else if (n.continueThreads.models[d]) {
								const t = n.continueThreads.models[d].parentId,
									s = n.comments.models[t].permalink;
								e(Object(j.b)(s))
							} else e(K(t)), e(C.Z(r, d));
							t(L.b(d))
						}
					},
					[u.c.Downvote]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							{
								activeCommentId: d,
								activePostId: r
							} = n.shortcuts,
							i = Object(S.c)(n);
						i && (d && !n.comments.collapsed[i][d] ? (e(C.T(d)), t(L.e(d))) : r && (e(g.y(r)), t(L.f(r))))
					},
					[u.c.Expando]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = n.shortcuts.activePostId,
							r = w.b[n.user.prefs.layout];
						if (d && (r === w.g.Compact || r === w.g.Classic)) {
							const s = n.posts.models[d].crosspostRootId;
							(n.posts.models[d].media || s && n.posts.models[s] && n.posts.models[s].media) && (e(g.z({
								postId: d
							})), t(L.g(d)))
						}
					},
					[u.c.Hide]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = n.shortcuts.activePostId;
						d && !n.posts.models[d].isSponsored && (e(g.Z(d, !n.posts.models[d].hidden, n.shortcuts.namespace === u.d.Lightbox, !0)), e(A(t)), t(L.i(d)))
					},
					[u.c.NextComment]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = Object(S.c)(n);
						if (!d) return;
						let r;
						const i = n.shortcuts.activeCommentId;
						if (i) {
							const t = n.comments.collapsed[d],
								e = n.commentsPage.keyToCommentThreadLinkSets[d];
							if (t[r = i])
								do {
									if (!e[r].next) return;
									r = e[r].next.id
								} while (y.b(r));
							else r = e[r].next.id
						} else {
							const t = n.commentsPage.keyToHeadCommentId[d];
							if (!t) return;
							r = t
						}
						e(Object(N.a)(r)), Object(S.a)(r), t(L.j(r))
					},
					[u.c.NextPost]: A,
					[u.c.NewPost]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s();
						if (!n.user.account) return;
						const d = Object(E.f)(n),
							r = d ? d.url : "/";
						e(Object(j.b)("".concat(r, "submit"))), t(L.d)
					},
					[u.c.OpenIndex]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						e(Object(f.i)(I.a.KEYBOARD_SHORTCUTS)), t(L.s)
					},
					[u.c.OpenLightbox]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = n.listings.activeKey,
							r = n.listings.postOrder.ids[d],
							i = n.shortcuts.activePostId;
						!r || !i || r.indexOf(i) < 0 || (e(Object(T.a)(n.posts.models[i].permalink)), t(L.m(i)))
					},
					[u.c.OpenLink]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							{
								activePostId: d
							} = n.shortcuts;
						if (d) {
							const e = n.posts.models[d];
							if (e.source) {
								const s = e.source.url,
									o = window.open(s, "_blank");
								o && o.focus(), t(L.h(d))
							}
						}
					},
					[u.c.PrevComment]: K,
					[u.c.PrevPost]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = n.shortcuts.activePostId,
							r = n.listings.activeKey,
							i = n.listings.postOrder.ids[r];
						if (!d || i && i.indexOf(d) < 0) return e(Object(N.b)(i[0])), void Object(S.a)(i[0]);
						if (0 === i.indexOf(d)) return;
						let a, l = d;
						do {
							if (!(a = Object(k.b)(n, {
									postId: l
								})) || !a.prevPost) return;
							l = a.prevPost.id
						} while (n.posts.models[l].hidden);
						n.shortcuts.namespace === u.d.Lightbox ? (D(e, a.prevPost), t(L.p(l))) : (e(Object(N.b)(l)), Object(S.a)(l), t(L.o(l)))
					},
					[u.c.Reply]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							d = Object(S.c)(n),
							{
								activeCommentId: r
							} = n.shortcuts;
						r && d && d !== n.listings.activeKey && (e(C.ob({
							commentsPageKey: d,
							parentCommentId: r
						})), t(L.c(r)))
					},
					[u.c.Save]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							{
								activeCommentId: d,
								activePostId: r
							} = n.shortcuts,
							i = Object(S.c)(n);
						i && (d && !n.comments.collapsed[i][d] ? (e(C.gb(d)), t(L.q(d))) : r && (e(g.V(r)), t(L.r(r))))
					},
					[u.c.Upvote]: t => async (e, s, o) => {
						let {
							apiContext: c
						} = o;
						const n = s(),
							{
								activeCommentId: d,
								activePostId: r
							} = n.shortcuts,
							i = Object(S.c)(n);
						i && (d && !n.comments.collapsed[i][d] ? (e(C.rb(d)), t(L.t(d))) : r && (e(g.cb(r)), t(L.u(r))))
					},
					[u.c.Konami]: null
				},
				B = (t, e) => (s, o) => {
					if (!document.activeElement) return;
					const c = document.activeElement.nodeName;
					if ("INPUT" === c || "TEXTAREA" === c || "BUTTON" === c && u.a.includes(o.which)) return;
					const n = R[s];
					n && t(n(e))
				},
				U = new l.ShortcutManager(v),
				M = Object(m.c)({
					isBladeOpen: b.j,
					namespace: t => t.activeModalId ? u.d.Global : t.shortcuts.namespace
				}),
				q = Object(a.b)(M, t => ({
					dispatchAction: e => t(e)
				}));
			class z extends r.Component {
				getChildContext() {
					return {
						shortcuts: U
					}
				}
				componentDidMount() {
					const t = document.getElementById(u.b);
					if (t) {
						const e = window.scrollX,
							s = window.scrollY;
						t.focus(), window.scrollTo(e, s)
					}
				}
				render() {
					const {
						dispatchAction: t,
						isBladeOpen: e,
						namespace: s,
						sendEvent: o
					} = this.props;
					return i.a.createElement(l.Shortcuts, {
						handler: e ? c.a : B(t, o),
						isolate: !0,
						name: s,
						targetNodeSelector: "#".concat(u.b)
					})
				}
			}
			z.childContextTypes = {
				shortcuts: d.a.object.isRequired
			};
			e.default = q(Object(p.c)(z))
		}
	}
]);
//# sourceMappingURL=ShortcutWrapper.a74382f2831a42ca0bb2.js.map