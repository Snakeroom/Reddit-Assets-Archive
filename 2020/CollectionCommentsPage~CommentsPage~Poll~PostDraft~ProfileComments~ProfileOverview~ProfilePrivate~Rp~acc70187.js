// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187.899c50de5153aec73272.js
// Retrieved at 2/20/2020, 8:50:20 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187"], {
		"./src/reddit/actions/postCollection/index.ts": function(t, e, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/react-router-redux/es/index.js"),
				c = o("./src/app/strings/index.ts"),
				s = o("./src/lib/filterQueryParams/index.ts"),
				i = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/postCollection/constants.ts"),
				l = o("./src/reddit/actions/toaster.ts"),
				a = o("./src/reddit/constants/history.ts"),
				d = o("./src/lib/constants/index.ts"),
				u = o("./src/lib/makeApiRequest/index.ts"),
				p = o("./src/lib/omitHeaders/index.ts"),
				b = o("./src/reddit/constants/headers.ts");
			var O = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/add_post_to_collection.json"),
				method: d.cb.POST,
				data: {
					collection_id: e,
					link_fullname: o
				}
			});
			var j = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/create_collection.json"),
				method: d.cb.POST,
				data: {
					title: e,
					sr_fullname: o
				}
			});
			var m = (t, e) => Object(u.b)(Object(p.a)(t, [b.a]), {
					endpoint: "".concat(t.apiUrl, "/api/v1/collections/delete_collection.json"),
					method: d.cb.POST,
					data: {
						collection_id: e
					}
				}),
				f = o("./src/config.ts");
			var g = (t, e) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(f.a.gatewayUrl, "/desktopapi/v1/subreddit_collections/").concat(e),
				method: d.cb.GET
			});
			var _ = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/remove_post_in_collection.json"),
				method: d.cb.POST,
				data: {
					collection_id: e,
					link_fullname: o
				}
			});
			var C = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/update_collection_title.json"),
				method: d.cb.POST,
				data: {
					collection_id: e,
					title: o
				}
			});
			var I = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/reorder_collection.json"),
				method: d.cb.POST,
				data: {
					collection_id: e,
					link_ids: o.join(",")
				}
			});
			var v = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
				endpoint: "".concat(t.apiUrl, "/api/v1/collections/update_collection_description.json"),
				method: d.cb.POST,
				data: {
					collection_id: e,
					description: o
				}
			});
			var w = (t, e, o) => Object(u.b)(Object(p.a)(t, [b.a]), {
					endpoint: "".concat(t.apiUrl, "/api/v1/collections/update_collection_display_layout.json"),
					method: d.cb.POST,
					data: {
						collection_id: e,
						display_layout: o
					}
				}),
				x = o("./src/reddit/helpers/overlay/index.ts"),
				k = o("./src/reddit/helpers/path/index.ts"),
				y = o("./src/reddit/models/Toast/index.ts"),
				E = o("./src/reddit/selectors/postCollection.ts"),
				S = o("./src/reddit/selectors/posts.ts"),
				h = o("./src/reddit/selectors/subreddit.ts");
			o.d(e, "b", (function() {
				return M
			})), o.d(e, "e", (function() {
				return L
			})), o.d(e, "g", (function() {
				return B
			})), o.d(e, "a", (function() {
				return K
			})), o.d(e, "c", (function() {
				return G
			})), o.d(e, "h", (function() {
				return z
			})), o.d(e, "f", (function() {
				return Z
			})), o.d(e, "d", (function() {
				return nt
			}));
			const P = Object(i.a)(r.c),
				D = Object(i.a)(r.b),
				T = Object(i.a)(r.d),
				M = (t, e) => async (o, n, c) => {
					let {
						apiContext: s
					} = c;
					o(P());
					const i = await j(s(), t, e);
					let r;
					if (i.ok) {
						const t = n().meta,
							e = (t => ({
								author: t.author_name || void 0,
								createdAtUTC: t.created_at_utc,
								description: t.description,
								displayLayout: t.display_layout,
								id: t.collection_id,
								lastUpdateUTC: t.last_update_utc,
								permalink: t.permalink,
								postIds: t.link_ids,
								primaryPostId: t.primary_link_id || void 0,
								subredditId: t.subreddit_id,
								title: t.title
							}))(i.body);
						o(T({
							collection: e,
							meta: t
						})), r = e
					} else {
						const t = i.error;
						o(D(t))
					}
					return r
				}, U = Object(i.a)(r.f), L = t => async (e, o, n) => {
					let {
						apiContext: s
					} = n;
					const i = o(),
						r = i.postCollection.subredditToIds || {};
					if (Object.keys(r).length > 0) return;
					const a = await g(s(), t);
					a.ok ? e(U(a.body)) : e(Object(l.e)({
						kind: y.b.Error,
						text: Object(c.a)(i.user.language, "error.type.generic")
					}))
				}, A = Object(i.a)(r.g), B = (t, e, o) => async (n, s, i) => {
					let {
						apiContext: r
					} = i;
					if ((await _(r(), t, e)).ok) {
						const i = s(),
							r = Object(S.I)(i, {
								postId: e
							}),
							a = r && r.title || "",
							d = Object(E.q)(i, {
								collectionId: t
							}),
							u = (d && d.postIds && d.postIds.indexOf(e) || -1) - 1;
						if (n(A({
								collectionId: t,
								postId: e
							})), o && u >= 0) {
							const e = s(),
								o = Object(E.q)(e, {
									collectionId: t
								}),
								c = o && o.postIds && o.postIds[u] || "",
								i = Object(S.I)(e, {
									postId: c
								});
							i && i.permalink && n(Object(x.a)(i.permalink))
						}
						n(Object(l.e)({
							kind: y.b.SuccessMod,
							text: Object(c.a)(i.user.language, "collection.postRemovedSuccess", {
								postTitle: a
							}),
							buttonText: Object(c.a)(i.user.language, "collection.undo"),
							buttonAction: K(t, e)
						}))
					} else {
						const t = s();
						n(Object(l.e)({
							kind: y.b.Error,
							text: Object(c.a)(t.user.language, "error.type.generic")
						}))
					}
				}, R = Object(i.a)(r.a), q = Object(i.a)(r.t), K = (t, e) => async (o, n, s) => {
					let {
						apiContext: i
					} = s;
					const r = n();
					if ((await O(i(), t, e)).ok) {
						o(R({
							collectionId: t,
							postId: e
						})), o(q({
							collectionId: t,
							postId: e
						}));
						const n = Object(S.I)(r, {
								postId: e
							}),
							s = Object(E.q)(r, {
								collectionId: t
							}),
							i = s && s.title || "";
						o(Object(l.e)({
							kind: y.b.SuccessMod,
							text: Object(c.a)(r.user.language, "collection.postAddedSuccess", {
								title: i
							}),
							buttonText: Object(c.a)(r.user.language, "collection.view"),
							buttonAction: Object(x.a)(n.permalink)
						}))
					} else o(Object(l.e)({
						kind: y.b.Error,
						text: Object(c.a)(r.user.language, "error.type.generic")
					}))
				}, F = Object(i.a)(r.e), G = (t, e) => async (o, i, r) => {
					let {
						apiContext: a
					} = r;
					const d = i();
					if ((await m(a(), t)).ok) {
						const {
							url: i
						} = d.platform.currentPage, r = Object(E.q)(d, {
							collectionId: t
						}), a = r && r.title || "", u = r && r.subredditId, p = u ? Object(h.c)(d, u) : "/";
						o(F({
							collectionId: t,
							collection: r
						})), o(e ? Object(n.c)(Object(s.a)(i, ["collection"])) : Object(n.b)(p)), o(Object(l.e)({
							kind: y.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.collectionDeletedSuccess", {
								title: a
							})
						}))
					} else o(Object(l.e)({
						kind: y.b.Error,
						text: Object(c.a)(d.user.language, "error.type.generic")
					}))
				}, N = Object(i.a)(r.r), V = Object(i.a)(r.n), W = Object(i.a)(r.s), z = (t, e) => async (o, n, s) => {
					let {
						apiContext: i
					} = s;
					o(N());
					const r = await C(i(), t, e);
					let a = !1;
					const d = n();
					if (r.ok) o(W({
						collectionId: t,
						newTitle: e
					})), o(Object(l.e)({
						kind: y.b.SuccessMod,
						text: Object(c.a)(d.user.language, "collection.editModal.titleUpdateSuccess")
					})), a = !0;
					else {
						const t = r.error;
						o(V(t)), o(Object(l.e)({
							kind: y.b.Error,
							text: Object(c.a)(d.user.language, "error.type.generic")
						}))
					}
					return a
				}, Y = Object(i.a)(r.l), H = Object(i.a)(r.m), X = Object(i.a)(r.k), Z = t => async (e, o) => {
					const c = o().platform.currentPage.locationState;
					e(!(!c || !c[a.a.IsOverlay]) ? Object(x.a)(t.permalink) : Object(n.b)(Object(k.b)(t.permalink)))
				}, Q = Object(i.a)(r.i), J = Object(i.a)(r.j), $ = Object(i.a)(r.h), tt = Object(i.a)(r.p), et = Object(i.a)(r.o), ot = Object(i.a)(r.q), nt = t => async e => {
					const o = [],
						{
							collectionId: n,
							description: s,
							displayLayout: i,
							postIds: r,
							title: a
						} = t;
					r && o.push(e(((t, e) => async (o, n, s) => {
						let {
							apiContext: i
						} = s;
						o(Q());
						const r = await I(i(), t, e);
						let a = !1;
						const d = n();
						return r.ok ? (o(J({
							collectionId: t,
							postIds: e
						})), o(Object(l.e)({
							kind: y.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.editModal.reorderCollectionSuccess")
						})), a = !0) : (o($({
							error: r.error
						})), o(Object(l.e)({
							kind: y.b.Error,
							text: Object(c.a)(d.user.language, "error.type.generic")
						}))), a
					})(n, r))), a && o.push(e(z(n, a))), void 0 !== s && o.push(e(((t, e) => async (o, n, s) => {
						let {
							apiContext: i
						} = s;
						o(Y());
						const r = await v(i(), t, e);
						let a = !1;
						const d = n();
						if (r.ok) o(H({
							collectionId: t,
							newDescription: e
						})), o(Object(l.e)({
							kind: y.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.editModal.descriptionUpdateSuccess")
						})), a = !0;
						else {
							const t = r.error;
							o(X(t)), o(Object(l.e)({
								kind: y.b.Error,
								text: Object(c.a)(d.user.language, "error.type.generic")
							}))
						}
						return a
					})(n, s))), i && o.push(e(((t, e) => async (o, n, s) => {
						let {
							apiContext: i
						} = s;
						o(tt());
						const r = await w(i(), t, e);
						let a = !1;
						const d = n();
						if (r.ok) o(ot({
							collectionId: t,
							newLayout: e
						})), o(Object(l.e)({
							kind: y.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.editModal.layoutUpdateSuccess")
						})), a = !0;
						else {
							const t = r.error;
							o(et(t)), o(Object(l.e)({
								kind: y.b.Error,
								text: Object(c.a)(d.user.language, "error.type.generic")
							}))
						}
						return a
					})(n, i)));
					let d = !0;
					return await Promise.all(o).then(t => {
						t.forEach(t => {
							t || (d = !1)
						})
					}), d
				}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(t, e, o) {
			t.exports = {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return v
			}));
			var n = o("./node_modules/react/index.js"),
				c = o.n(n),
				s = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				r = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/actions/tooltip.ts"),
				d = o("./src/reddit/i18n/utils.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/Row.tsx"),
				O = o("./src/reddit/icons/fonts/Menu/index.tsx"),
				j = o("./src/reddit/selectors/tooltip.ts"),
				m = o("./src/reddit/components/OverflowMenu/index.m.less"),
				f = o.n(m);
			const g = l.a.wrapped(p.a, "_Dropdown", f.a),
				_ = Object(u.a)(g),
				C = l.a.button("MenuButton", f.a),
				I = l.a.wrapped(O.a, "MenuIcon", f.a),
				v = l.a.wrapped(b.b, "DropdownRow", f.a),
				w = Object(i.c)({
					dropdownIsOpen: (t, e) => {
						let {
							dropdownId: o
						} = e;
						return Object(j.b)(o)(t)
					}
				}),
				x = Object(s.b)(w, (t, e) => {
					let {
						dropdownId: o
					} = e;
					return {
						toggleDropdown: () => t(Object(a.h)({
							tooltipId: o
						}))
					}
				}),
				k = t => e => {
					t.onClick && t.onClick(), t.toggleDropdown(), e.stopPropagation()
				};
			e.b = x(t => c.a.createElement(C, {
				"aria-expanded": t.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": Object(d.c)("more options"),
				className: Object(r.a)(t.className, {
					[f.a.mIsEnabled]: !t.disabled && !t.defaultButtonOutline
				}),
				disabled: t.disabled,
				onClick: k(t),
				onMouseDown: t.handleMouseDown,
				id: t.dropdownId
			}, t.icon ? t.icon : c.a.createElement(I, null), c.a.createElement(_, {
				className: t.dropdownClassName,
				isOpen: t.dropdownIsOpen,
				tooltipId: t.dropdownId,
				isFixed: t.isFixed,
				targetPosition: t.targetPosition,
				tooltipPosition: t.tooltipPosition
			}, t.children)))
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			})), o.d(e, "h", (function() {
				return a
			})), o.d(e, "g", (function() {
				return d
			})), o.d(e, "o", (function() {
				return u
			})), o.d(e, "f", (function() {
				return b
			})), o.d(e, "e", (function() {
				return O
			})), o.d(e, "n", (function() {
				return j
			})), o.d(e, "m", (function() {
				return m
			})), o.d(e, "b", (function() {
				return g
			})), o.d(e, "p", (function() {
				return _
			})), o.d(e, "c", (function() {
				return C
			})), o.d(e, "j", (function() {
				return I
			})), o.d(e, "q", (function() {
				return v
			})), o.d(e, "k", (function() {
				return w
			})), o.d(e, "l", (function() {
				return x
			})), o.d(e, "i", (function() {
				return k
			})), o.d(e, "d", (function() {
				return y
			}));
			var n, c, s = o("./src/reddit/constants/tracking.ts"),
				i = o("./src/reddit/helpers/trackers/postEvent.ts"),
				r = o("./src/reddit/selectors/platform.ts"),
				l = o("./src/reddit/selectors/telemetry.ts");
			! function(t) {
				t.collection = "collection", t.collectionComposer = "collection_composer", t.postComposer = "post_composer", t.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(t) {
				t.post = "post", t.follow = "follow", t.unfollow = "unfollow", t.screen = "screen", t.eventEducation = "event_education", t.eventEducationGotIt = "event_education_got_it", t.collectionEducation = "collection_education", t.collectionEducationGotIt = "collection_education_got_it", t.collectionCancel = "cancel", t.collectionCreate = "collection_create", t.collectionSelect = "collection_select", t.collectionDelete = "collection_delete", t.collectionEdit = "collection_edit", t.collectionAddPost = "collection_add_post", t.collectionRemovePost = "remove_post_from_collection", t.startEvent = "start_event"
			}(c || (c = {}));
			const a = t => e => Object.assign({
					source: n.collection,
					noun: c.post
				}, p(e, t)),
				d = t => {
					let {
						postId: e,
						isFollowed: o
					} = t;
					return t => Object.assign({
						source: n.collection,
						noun: o ? c.unfollow : c.follow
					}, p(t, e))
				},
				u = t => {
					let {
						postId: e,
						isFollowed: o
					} = t;
					return t => Object.assign({
						source: i.a.postEvent,
						noun: o ? c.unfollow : c.follow
					}, p(t, e))
				},
				p = (t, e) => {
					const o = Object.assign({}, l.defaults(t), {
						action: s.c.CLICK,
						subreddit: l.subreddit(t)
					});
					return void 0 === e ? o : Object.assign({}, o, {
						post: l.post(t, e),
						postCollection: l.postCollectionI13nSelector(t, {
							postId: e
						}),
						postEvent: l.postEventI13nSelector(t, {
							postId: e
						})
					})
				},
				b = t => Object.assign({}, f(t), {
					action: s.c.VIEW,
					noun: c.collectionEducation
				}),
				O = t => Object.assign({}, f(t), {
					action: s.c.CLICK,
					noun: c.collectionEducationGotIt
				}),
				j = t => Object.assign({}, f(t), {
					action: s.c.VIEW,
					noun: c.eventEducation
				}),
				m = t => Object.assign({}, f(t), {
					action: s.c.CLICK,
					noun: c.eventEducationGotIt
				}),
				f = t => Object.assign({}, l.defaults(t), {
					subreddit: l.subreddit(t),
					source: n.postComposer
				}),
				g = (t, e) => o => Object.assign({}, p(o, t), {
					source: e || n.postOverflowMenu,
					noun: c.collectionAddPost
				}),
				_ = t => e => Object.assign({}, p(e, t), {
					source: n.collectionComposer,
					noun: c.collectionRemovePost
				}),
				C = () => t => Object.assign({}, p(t), {
					source: n.collectionComposer,
					noun: c.collectionCancel
				}),
				I = () => t => {
					const e = Object(r.n)(t) || void 0;
					return Object.assign({}, p(t, e), {
						source: n.collectionComposer,
						noun: c.collectionCreate
					})
				},
				v = () => t => Object.assign({}, p(t), {
					source: n.collectionComposer,
					noun: c.collectionSelect
				}),
				w = t => e => Object.assign({}, l.defaults(e), {
					subreddit: l.subreddit(e),
					source: n.collectionComposer,
					action: s.c.CLICK,
					noun: c.collectionDelete,
					postCollection: l.postCollectionI13nByCollectionIdSelector(e, {
						collectionId: t
					})
				}),
				x = t => e => Object.assign({}, p(e), {
					source: n.collectionComposer,
					noun: c.collectionEdit,
					postCollection: l.postCollectionI13nByCollectionIdSelector(e, {
						collectionId: t
					})
				}),
				k = t => e => Object.assign({}, p(e, t), {
					source: n.collectionComposer,
					noun: c.startEvent
				}),
				y = () => t => {
					const e = Object(r.n)(t) || void 0;
					return Object.assign({}, p(t, e), {
						source: n.collectionComposer,
						action: s.c.VIEW,
						noun: c.screen
					})
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			})), o.d(e, "f", (function() {
				return O
			})), o.d(e, "g", (function() {
				return j
			})), o.d(e, "e", (function() {
				return m
			})), o.d(e, "b", (function() {
				return f
			})), o.d(e, "c", (function() {
				return g
			})), o.d(e, "d", (function() {
				return _
			}));
			var n, c = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/eventTools/index.ts"),
				i = o("./src/lib/timezone/index.ts"),
				r = o("./src/reddit/constants/tracking.ts"),
				l = o("./src/reddit/models/PostCreationForm/index.ts"),
				a = o("./src/reddit/selectors/platform.ts"),
				d = o("./src/reddit/selectors/postCreations.ts"),
				u = o("./src/reddit/selectors/telemetry.ts"),
				p = o("./src/telemetry/index.ts");
			! function(t) {
				t.postEvent = "post_event", t.postComposer = "post_composer", t.eventComposer = "event_composer"
			}(n || (n = {}));
			const b = t => u.actionInfo(t, {
					pageType: "event_submit"
				}),
				O = t => {
					Object(p.a)(Object.assign({}, u.defaults(t), {
						source: n.postComposer,
						action: r.c.CLICK,
						noun: "event_create",
						subreddit: u.subreddit(t)
					}))
				},
				j = t => {
					Object(p.a)(Object.assign({}, u.defaults(t), {
						source: n.postComposer,
						action: r.c.CLICK,
						noun: "event_edit",
						subreddit: u.subreddit(t),
						postEvent: C(t),
						postComposer: I(t)
					}))
				},
				m = () => t => ({
					source: n.eventComposer,
					action: r.c.VIEW,
					noun: r.b.SCREEN,
					actionInfo: b(t),
					postEvent: C(t)
				}),
				f = t => e => Object.assign({}, x(e, Object(a.n)(e)), {
					source: n.postComposer,
					noun: "apply",
					postComposer: v(t)
				}),
				g = () => t => Object.assign({}, x(t, Object(a.n)(t)), {
					noun: "cancel",
					actionInfo: b(t)
				}),
				_ = t => e => Object.assign({}, x(e, Object(a.n)(e)), {
					noun: "delete",
					actionInfo: b(e),
					postComposer: I(e),
					postEvent: w(t)
				}),
				C = t => {
					const e = Object(d.o)(t);
					return e && w(e)
				},
				I = t => v(Object(d.o)(t)),
				v = t => {
					return {
						postScheduled: !!t,
						submitScheduledTime: t && t.submitTime === l.i.AtEventTime ? Object(i.f)(t.startDate).getTime() / c.Db : void 0
					}
				},
				w = t => {
					const e = Object(i.f)(t.startDate).getTime() / c.Db,
						o = Object(i.f)(t.endDate).getTime() / c.Db;
					return {
						eventStartTimestamp: e,
						eventEndTimestamp: o,
						eventState: Object(s.e)(e, o)
					}
				},
				x = (t, e) => {
					const o = {
						source: n.eventComposer,
						action: r.c.CLICK,
						subreddit: u.subreddit(t)
					};
					return e ? Object.assign({}, o, {
						post: u.post(t, e),
						postEvent: u.postEventI13nSelector(t, {
							postId: e
						}),
						postCollection: u.postCollectionI13nSelector(t, {
							postId: e
						})
					}) : o
				}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Poll~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~Rp~acc70187.899c50de5153aec73272.js.map