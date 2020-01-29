// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337.15a111f17a53aea0ca6a.js
// Retrieved at 1/29/2020, 4:50:13 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337"], {
		"./src/lib/timezone/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return r
			})), o.d(t, "e", (function() {
				return i
			})), o.d(t, "d", (function() {
				return l
			})), o.d(t, "f", (function() {
				return a
			})), o.d(t, "g", (function() {
				return d
			})), o.d(t, "c", (function() {
				return u
			}));
			o("./node_modules/core-js/modules/es6.regexp.replace.js"), o("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = o("./src/lib/constants/index.ts"),
				c = o("./src/reddit/models/PostCreationForm/index.ts");
			const s = "America/Los_Angeles",
				r = () => {
					let e;
					try {
						e = Intl.DateTimeFormat().resolvedOptions().timeZone
					} catch (t) {}
					return "Asia/Calcutta" === e && (e = "Asia/Kolkata"), e || void 0
				},
				i = e => {
					const t = Math.abs(e),
						o = t % 60,
						n = e > 0 ? "-" : "+",
						c = ("0" + Math.floor(t / 60)).slice(-2),
						s = ("0" + o).slice(-2);
					return "".concat(n).concat(c, ":").concat(s)
				},
				l = (e, t) => {
					const o = t || Date.now(),
						c = {
							year: "numeric",
							month: "numeric",
							day: "numeric",
							hour: "numeric",
							minute: "numeric",
							second: "numeric",
							timeZoneName: "short",
							hour12: !1,
							timeZone: e
						};
					let s = "";
					try {
						s = new Intl.DateTimeFormat("en-US", c).format(new Date(o))
					} catch (f) {
						return
					}
					const [r, i, l] = s.replace(", ", " ").split(" "), [a, d, u] = r.trim().split("/").map(Number), [p, b, m] = i.trim().split(":").map(Number), O = Date.UTC(u, a - 1, d, p, b, m), j = new Date(o).setMilliseconds(0) - O;
					return {
						abbreviation: l,
						offset: Math.round(j / n.cb)
					}
				},
				a = e => {
					const t = e.slice(0, 19),
						[o, n] = t.split("T"),
						[c, s, r] = o.split("-").map(Number),
						[i, l, a = 0] = n.split(":").map(Number);
					return new Date(c, s - 1, r, i, l, a)
				},
				d = e => {
					const t = new Date(e);
					return t.setMinutes(t.getMinutes() - t.getTimezoneOffset()), t.toISOString().slice(0, 16)
				},
				u = e => {
					if (e && e.eventInfo) {
						const {
							eventStart: t,
							eventEnd: o
						} = e.eventInfo;
						return {
							startDate: d(new Date(t * n.Cb)),
							endDate: d(new Date(o * n.Cb)),
							submitTime: c.i.Now,
							timezoneName: r() || s
						}
					}
				}
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/react-router-redux/es/index.js"),
				c = o("./src/app/strings/index.ts"),
				s = o("./src/lib/filterQueryParams/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/reddit/actions/postCollection/constants.ts"),
				l = o("./src/reddit/actions/toaster.ts"),
				a = o("./src/reddit/constants/history.ts"),
				d = o("./src/lib/constants/index.ts"),
				u = o("./src/lib/makeApiRequest/index.ts"),
				p = o("./src/lib/omitHeaders/index.ts"),
				b = o("./src/reddit/constants/headers.ts");
			var m = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/add_post_to_collection.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var O = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/create_collection.json"),
				method: d.bb.POST,
				data: {
					title: t,
					sr_fullname: o
				}
			});
			var j = (e, t) => Object(u.b)(Object(p.a)(e, [b.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/collections/delete_collection.json"),
					method: d.bb.POST,
					data: {
						collection_id: t
					}
				}),
				f = o("./src/config.ts");
			var g = (e, t) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(f.a.gatewayUrl, "/desktopapi/v1/subreddit_collections/").concat(t),
				method: d.bb.GET
			});
			var C = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/remove_post_in_collection.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var x = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_title.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					title: o
				}
			});
			var _ = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/reorder_collection.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					link_ids: o.join(",")
				}
			});
			var I = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_description.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					description: o
				}
			});
			var v = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_display_layout.json"),
					method: d.bb.POST,
					data: {
						collection_id: t,
						display_layout: o
					}
				}),
				w = o("./src/reddit/helpers/overlay/index.ts"),
				E = o("./src/reddit/helpers/path/index.ts"),
				k = o("./src/reddit/models/Toast/index.ts"),
				y = o("./src/reddit/selectors/postCollection.ts"),
				h = o("./src/reddit/selectors/posts.ts"),
				M = o("./src/reddit/selectors/subreddit.ts");
			o.d(t, "b", (function() {
				return P
			})), o.d(t, "e", (function() {
				return U
			})), o.d(t, "g", (function() {
				return N
			})), o.d(t, "a", (function() {
				return z
			})), o.d(t, "c", (function() {
				return W
			})), o.d(t, "h", (function() {
				return Z
			})), o.d(t, "f", (function() {
				return J
			})), o.d(t, "d", (function() {
				return ne
			}));
			const S = Object(r.a)(i.c),
				D = Object(r.a)(i.b),
				T = Object(r.a)(i.d),
				P = (e, t) => async (o, n, c) => {
					let {
						apiContext: s
					} = c;
					o(S());
					const r = await O(s(), e, t);
					let i;
					if (r.ok) {
						const e = n().meta,
							t = (e => ({
								author: e.author_name || void 0,
								createdAtUTC: e.created_at_utc,
								description: e.description,
								displayLayout: e.display_layout,
								id: e.collection_id,
								lastUpdateUTC: e.last_update_utc,
								permalink: e.permalink,
								postIds: e.link_ids,
								primaryPostId: e.primary_link_id || void 0,
								subredditId: e.subreddit_id,
								title: e.title
							}))(r.body);
						o(T({
							collection: t,
							meta: e
						})), i = t
					} else {
						const e = r.error;
						o(D(e))
					}
					return i
				}, A = Object(r.a)(i.f), U = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const r = o(),
						i = r.postCollection.subredditToIds || {};
					if (Object.keys(i).length > 0) return;
					const a = await g(s(), e);
					a.ok ? t(A(a.body)) : t(Object(l.e)({
						kind: k.b.Error,
						text: Object(c.a)(r.user.language, "error.type.generic")
					}))
				}, L = Object(r.a)(i.g), N = (e, t, o) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					if ((await C(i(), e, t)).ok) {
						const r = s(),
							i = Object(h.I)(r, {
								postId: t
							}),
							a = i && i.title || "",
							d = Object(y.q)(r, {
								collectionId: e
							}),
							u = (d && d.postIds && d.postIds.indexOf(t) || -1) - 1;
						if (n(L({
								collectionId: e,
								postId: t
							})), o && u >= 0) {
							const t = s(),
								o = Object(y.q)(t, {
									collectionId: e
								}),
								c = o && o.postIds && o.postIds[u] || "",
								r = Object(h.I)(t, {
									postId: c
								});
							r && r.permalink && n(Object(w.a)(r.permalink))
						}
						n(Object(l.e)({
							kind: k.b.SuccessMod,
							text: Object(c.a)(r.user.language, "collection.postRemovedSuccess", {
								postTitle: a
							}),
							buttonText: Object(c.a)(r.user.language, "collection.undo"),
							buttonAction: z(e, t)
						}))
					} else {
						const e = s();
						n(Object(l.e)({
							kind: k.b.Error,
							text: Object(c.a)(e.user.language, "error.type.generic")
						}))
					}
				}, B = Object(r.a)(i.a), F = Object(r.a)(i.t), z = (e, t) => async (o, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n();
					if ((await m(r(), e, t)).ok) {
						o(B({
							collectionId: e,
							postId: t
						})), o(F({
							collectionId: e,
							postId: t
						}));
						const n = Object(h.I)(i, {
								postId: t
							}),
							s = Object(y.q)(i, {
								collectionId: e
							}),
							r = s && s.title || "";
						o(Object(l.e)({
							kind: k.b.SuccessMod,
							text: Object(c.a)(i.user.language, "collection.postAddedSuccess", {
								title: r
							}),
							buttonText: Object(c.a)(i.user.language, "collection.view"),
							buttonAction: Object(w.a)(n.permalink)
						}))
					} else o(Object(l.e)({
						kind: k.b.Error,
						text: Object(c.a)(i.user.language, "error.type.generic")
					}))
				}, K = Object(r.a)(i.e), W = (e, t) => async (o, r, i) => {
					let {
						apiContext: a
					} = i;
					const d = r();
					if ((await j(a(), e)).ok) {
						const {
							url: r
						} = d.platform.currentPage, i = Object(y.q)(d, {
							collectionId: e
						}), a = i && i.title || "", u = i && i.subredditId, p = u ? Object(M.c)(d, u) : "/";
						o(K({
							collectionId: e,
							collection: i
						})), o(t ? Object(n.c)(Object(s.a)(r, ["collection"])) : Object(n.b)(p)), o(Object(l.e)({
							kind: k.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.collectionDeletedSuccess", {
								title: a
							})
						}))
					} else o(Object(l.e)({
						kind: k.b.Error,
						text: Object(c.a)(d.user.language, "error.type.generic")
					}))
				}, q = Object(r.a)(i.r), G = Object(r.a)(i.n), R = Object(r.a)(i.s), Z = (e, t) => async (o, n, s) => {
					let {
						apiContext: r
					} = s;
					o(q());
					const i = await x(r(), e, t);
					let a = !1;
					const d = n();
					if (i.ok) o(R({
						collectionId: e,
						newTitle: t
					})), o(Object(l.e)({
						kind: k.b.SuccessMod,
						text: Object(c.a)(d.user.language, "collection.editModal.titleUpdateSuccess")
					})), a = !0;
					else {
						const e = i.error;
						o(G(e)), o(Object(l.e)({
							kind: k.b.Error,
							text: Object(c.a)(d.user.language, "error.type.generic")
						}))
					}
					return a
				}, Y = Object(r.a)(i.l), V = Object(r.a)(i.m), H = Object(r.a)(i.k), J = e => async (t, o) => {
					const c = o().platform.currentPage.locationState;
					t(!(!c || !c[a.a.IsOverlay]) ? Object(w.a)(e.permalink) : Object(n.b)(Object(E.b)(e.permalink)))
				}, X = Object(r.a)(i.i), Q = Object(r.a)(i.j), $ = Object(r.a)(i.h), ee = Object(r.a)(i.p), te = Object(r.a)(i.o), oe = Object(r.a)(i.q), ne = e => async t => {
					const o = [],
						{
							collectionId: n,
							description: s,
							displayLayout: r,
							postIds: i,
							title: a
						} = e;
					i && o.push(t(((e, t) => async (o, n, s) => {
						let {
							apiContext: r
						} = s;
						o(X());
						const i = await _(r(), e, t);
						let a = !1;
						const d = n();
						return i.ok ? (o(Q({
							collectionId: e,
							postIds: t
						})), o(Object(l.e)({
							kind: k.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.editModal.reorderCollectionSuccess")
						})), a = !0) : (o($({
							error: i.error
						})), o(Object(l.e)({
							kind: k.b.Error,
							text: Object(c.a)(d.user.language, "error.type.generic")
						}))), a
					})(n, i))), a && o.push(t(Z(n, a))), void 0 !== s && o.push(t(((e, t) => async (o, n, s) => {
						let {
							apiContext: r
						} = s;
						o(Y());
						const i = await I(r(), e, t);
						let a = !1;
						const d = n();
						if (i.ok) o(V({
							collectionId: e,
							newDescription: t
						})), o(Object(l.e)({
							kind: k.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.editModal.descriptionUpdateSuccess")
						})), a = !0;
						else {
							const e = i.error;
							o(H(e)), o(Object(l.e)({
								kind: k.b.Error,
								text: Object(c.a)(d.user.language, "error.type.generic")
							}))
						}
						return a
					})(n, s))), r && o.push(t(((e, t) => async (o, n, s) => {
						let {
							apiContext: r
						} = s;
						o(ee());
						const i = await v(r(), e, t);
						let a = !1;
						const d = n();
						if (i.ok) o(oe({
							collectionId: e,
							newLayout: t
						})), o(Object(l.e)({
							kind: k.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.editModal.layoutUpdateSuccess")
						})), a = !0;
						else {
							const e = i.error;
							o(te(e)), o(Object(l.e)({
								kind: k.b.Error,
								text: Object(c.a)(d.user.language, "error.type.generic")
							}))
						}
						return a
					})(n, r)));
					let d = !0;
					return await Promise.all(o).then(e => {
						e.forEach(e => {
							e || (d = !1)
						})
					}), d
				}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, o) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				c = o.n(n),
				s = o("./src/higherOrderComponents/asModal/index.tsx"),
				r = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = o("./src/reddit/controls/TextButton/index.tsx"),
				l = o("./src/reddit/i18n/utils.ts"),
				a = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = o("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = o.n(d);
			const p = e => e.preventDefault();
			t.a = Object(s.a)(e => c.a.createElement(r.c, null, c.a.createElement(r.g, null, c.a.createElement(a.a, null, c.a.createElement(r.n, null, e.headerText || Object(l.c)("Confirm")), c.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, c.a.createElement(r.b, null)))), c.a.createElement(r.j, null, c.a.createElement(r.m, {
				className: u.a.ModalText
			}, e.modalText)), c.a.createElement(r.e, null, c.a.createElement(r.a, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || Object(l.c)("Cancel")), c.a.createElement(r.r, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return I
			}));
			var n = o("./node_modules/react/index.js"),
				c = o.n(n),
				s = o("./node_modules/react-redux/es/index.js"),
				r = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/actions/tooltip.ts"),
				d = o("./src/reddit/i18n/utils.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/Row.tsx"),
				m = o("./src/reddit/icons/fonts/Menu/index.tsx"),
				O = o("./src/reddit/selectors/tooltip.ts"),
				j = o("./src/reddit/components/OverflowMenu/index.m.less"),
				f = o.n(j);
			const g = l.a.wrapped(p.a, "_Dropdown", f.a),
				C = Object(u.a)(g),
				x = l.a.button("MenuButton", f.a),
				_ = l.a.wrapped(m.a, "MenuIcon", f.a),
				I = l.a.wrapped(b.b, "DropdownRow", f.a),
				v = Object(r.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: o
						} = t;
						return Object(O.b)(o)(e)
					}
				}),
				w = Object(s.b)(v, (e, t) => {
					let {
						dropdownId: o
					} = t;
					return {
						toggleDropdown: () => e(Object(a.g)({
							tooltipId: o
						}))
					}
				}),
				E = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = w(e => c.a.createElement(x, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": Object(d.c)("more options"),
				className: Object(i.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: E(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : c.a.createElement(_, null), c.a.createElement(C, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "h", (function() {
				return a
			})), o.d(t, "g", (function() {
				return d
			})), o.d(t, "o", (function() {
				return u
			})), o.d(t, "f", (function() {
				return b
			})), o.d(t, "e", (function() {
				return m
			})), o.d(t, "n", (function() {
				return O
			})), o.d(t, "m", (function() {
				return j
			})), o.d(t, "b", (function() {
				return g
			})), o.d(t, "p", (function() {
				return C
			})), o.d(t, "c", (function() {
				return x
			})), o.d(t, "j", (function() {
				return _
			})), o.d(t, "q", (function() {
				return I
			})), o.d(t, "k", (function() {
				return v
			})), o.d(t, "l", (function() {
				return w
			})), o.d(t, "i", (function() {
				return E
			})), o.d(t, "d", (function() {
				return k
			}));
			var n, c, s = o("./src/reddit/constants/tracking.ts"),
				r = o("./src/reddit/helpers/trackers/postEvent.ts"),
				i = o("./src/reddit/selectors/platform.ts"),
				l = o("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(c || (c = {}));
			const a = e => t => Object.assign({
					source: n.collection,
					noun: c.post
				}, p(t, e)),
				d = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => Object.assign({
						source: n.collection,
						noun: o ? c.unfollow : c.follow
					}, p(e, t))
				},
				u = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => Object.assign({
						source: r.a.postEvent,
						noun: o ? c.unfollow : c.follow
					}, p(e, t))
				},
				p = (e, t) => {
					const o = Object.assign({}, l.defaults(e), {
						action: s.c.CLICK,
						subreddit: l.subreddit(e)
					});
					return void 0 === t ? o : Object.assign({}, o, {
						post: l.post(e, t),
						postCollection: l.postCollectionI13nSelector(e, {
							postId: t
						}),
						postEvent: l.postEventI13nSelector(e, {
							postId: t
						})
					})
				},
				b = e => Object.assign({}, f(e), {
					action: s.c.VIEW,
					noun: c.collectionEducation
				}),
				m = e => Object.assign({}, f(e), {
					action: s.c.CLICK,
					noun: c.collectionEducationGotIt
				}),
				O = e => Object.assign({}, f(e), {
					action: s.c.VIEW,
					noun: c.eventEducation
				}),
				j = e => Object.assign({}, f(e), {
					action: s.c.CLICK,
					noun: c.eventEducationGotIt
				}),
				f = e => Object.assign({}, l.defaults(e), {
					subreddit: l.subreddit(e),
					source: n.postComposer
				}),
				g = (e, t) => o => Object.assign({}, p(o, e), {
					source: t || n.postOverflowMenu,
					noun: c.collectionAddPost
				}),
				C = e => t => Object.assign({}, p(t, e), {
					source: n.collectionComposer,
					noun: c.collectionRemovePost
				}),
				x = () => e => Object.assign({}, p(e), {
					source: n.collectionComposer,
					noun: c.collectionCancel
				}),
				_ = () => e => {
					const t = Object(i.o)(e) || void 0;
					return Object.assign({}, p(e, t), {
						source: n.collectionComposer,
						noun: c.collectionCreate
					})
				},
				I = () => e => Object.assign({}, p(e), {
					source: n.collectionComposer,
					noun: c.collectionSelect
				}),
				v = e => t => Object.assign({}, l.defaults(t), {
					subreddit: l.subreddit(t),
					source: n.collectionComposer,
					action: s.c.CLICK,
					noun: c.collectionDelete,
					postCollection: l.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				w = e => t => Object.assign({}, p(t), {
					source: n.collectionComposer,
					noun: c.collectionEdit,
					postCollection: l.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				E = e => t => Object.assign({}, p(t, e), {
					source: n.collectionComposer,
					noun: c.startEvent
				}),
				k = () => e => {
					const t = Object(i.o)(e) || void 0;
					return Object.assign({}, p(e, t), {
						source: n.collectionComposer,
						action: s.c.VIEW,
						noun: c.screen
					})
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "f", (function() {
				return m
			})), o.d(t, "g", (function() {
				return O
			})), o.d(t, "e", (function() {
				return j
			})), o.d(t, "b", (function() {
				return f
			})), o.d(t, "c", (function() {
				return g
			})), o.d(t, "d", (function() {
				return C
			}));
			var n, c = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/eventTools/index.ts"),
				r = o("./src/lib/timezone/index.ts"),
				i = o("./src/reddit/constants/tracking.ts"),
				l = o("./src/reddit/models/PostCreationForm/index.ts"),
				a = o("./src/reddit/selectors/platform.ts"),
				d = o("./src/reddit/selectors/postCreations.ts"),
				u = o("./src/reddit/selectors/telemetry.ts"),
				p = o("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(n || (n = {}));
			const b = e => u.actionInfo(e, {
					pageType: "event_submit"
				}),
				m = e => {
					Object(p.a)(Object.assign({}, u.defaults(e), {
						source: n.postComposer,
						action: i.c.CLICK,
						noun: "event_create",
						subreddit: u.subreddit(e)
					}))
				},
				O = e => {
					Object(p.a)(Object.assign({}, u.defaults(e), {
						source: n.postComposer,
						action: i.c.CLICK,
						noun: "event_edit",
						subreddit: u.subreddit(e),
						postEvent: x(e),
						postComposer: _(e)
					}))
				},
				j = () => e => ({
					source: n.eventComposer,
					action: i.c.VIEW,
					noun: i.b.SCREEN,
					actionInfo: b(e),
					postEvent: x(e)
				}),
				f = e => t => Object.assign({}, w(t, Object(a.o)(t)), {
					source: n.postComposer,
					noun: "apply",
					postComposer: I(e)
				}),
				g = () => e => Object.assign({}, w(e, Object(a.o)(e)), {
					noun: "cancel",
					actionInfo: b(e)
				}),
				C = e => t => Object.assign({}, w(t, Object(a.o)(t)), {
					noun: "delete",
					actionInfo: b(t),
					postComposer: _(t),
					postEvent: v(e)
				}),
				x = e => {
					const t = Object(d.o)(e);
					return t && v(t)
				},
				_ = e => I(Object(d.o)(e)),
				I = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === l.i.AtEventTime ? Object(r.f)(e.startDate).getTime() / c.Cb : void 0
					}
				},
				v = e => {
					const t = Object(r.f)(e.startDate).getTime() / c.Cb,
						o = Object(r.f)(e.endDate).getTime() / c.Cb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: o,
						eventState: Object(s.e)(t, o)
					}
				},
				w = (e, t) => {
					const o = {
						source: n.eventComposer,
						action: i.c.CLICK,
						subreddit: u.subreddit(e)
					};
					return t ? Object.assign({}, o, {
						post: u.post(e, t),
						postEvent: u.postEventI13nSelector(e, {
							postId: t
						}),
						postCollection: u.postCollectionI13nSelector(e, {
							postId: t
						})
					}) : o
				}
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, o) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				c = o.n(n),
				s = o("./src/reddit/icons/fonts/helpers.tsx"),
				r = o("./src/reddit/icons/fonts/Menu/index.m.less"),
				i = o.n(r);
			const l = o("./src/lib/lessComponent.tsx").a.wrapped(e => c.a.createElement("i", {
				className: "".concat(Object(s.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", i.a);
			t.a = l
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~Pr~17e24337.15a111f17a53aea0ca6a.js.map