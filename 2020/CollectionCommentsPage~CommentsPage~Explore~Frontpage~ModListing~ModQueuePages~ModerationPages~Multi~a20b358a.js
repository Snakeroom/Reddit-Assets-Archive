// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a.ce55628ecb68d652ecd1.js
// Retrieved at 1/22/2020, 4:32:02 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"], {
		"./src/lib/timezone/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return r
			})), o.d(t, "e", (function() {
				return i
			})), o.d(t, "d", (function() {
				return a
			})), o.d(t, "f", (function() {
				return l
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
				a = (e, t) => {
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
					} catch (x) {
						return
					}
					const [r, i, a] = s.replace(", ", " ").split(" "), [l, d, u] = r.trim().split("/").map(Number), [p, b, m] = i.trim().split(":").map(Number), O = Date.UTC(u, l - 1, d, p, b, m), j = new Date(o).setMilliseconds(0) - O;
					return {
						abbreviation: a,
						offset: Math.round(j / n.cb)
					}
				},
				l = e => {
					const t = e.slice(0, 19),
						[o, n] = t.split("T"),
						[c, s, r] = o.split("-").map(Number),
						[i, a, l = 0] = n.split(":").map(Number);
					return new Date(c, s - 1, r, i, a, l)
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
							startDate: d(new Date(t * n.Bb)),
							endDate: d(new Date(o * n.Bb)),
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
				a = o("./src/reddit/actions/toaster.ts"),
				l = o("./src/reddit/constants/history.ts"),
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
				x = o("./src/config.ts");
			var f = (e, t) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(x.a.gatewayUrl, "/desktopapi/v1/subreddit_collections/").concat(t),
				method: d.bb.GET
			});
			var g = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/remove_post_in_collection.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					link_fullname: o
				}
			});
			var C = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
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
			var w = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_description.json"),
				method: d.bb.POST,
				data: {
					collection_id: t,
					description: o
				}
			});
			var I = (e, t, o) => Object(u.b)(Object(p.a)(e, [b.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_display_layout.json"),
					method: d.bb.POST,
					data: {
						collection_id: t,
						display_layout: o
					}
				}),
				v = o("./src/reddit/helpers/overlay/index.ts"),
				y = o("./src/reddit/helpers/path/index.ts"),
				h = o("./src/reddit/models/Toast/index.ts"),
				E = o("./src/reddit/selectors/postCollection.ts"),
				M = o("./src/reddit/selectors/posts.ts"),
				k = o("./src/reddit/selectors/subreddit.ts");
			o.d(t, "b", (function() {
				return N
			})), o.d(t, "e", (function() {
				return L
			})), o.d(t, "g", (function() {
				return U
			})), o.d(t, "a", (function() {
				return z
			})), o.d(t, "c", (function() {
				return F
			})), o.d(t, "h", (function() {
				return V
			})), o.d(t, "f", (function() {
				return X
			})), o.d(t, "d", (function() {
				return ne
			}));
			const D = Object(r.a)(i.c),
				S = Object(r.a)(i.b),
				T = Object(r.a)(i.d),
				N = (e, t) => async (o, n, c) => {
					let {
						apiContext: s
					} = c;
					o(D());
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
						o(S(e))
					}
					return i
				}, P = Object(r.a)(i.f), L = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const r = o(),
						i = r.postCollection.subredditToIds || {};
					if (Object.keys(i).length > 0) return;
					const l = await f(s(), e);
					l.ok ? t(P(l.body)) : t(Object(a.e)({
						kind: h.b.Error,
						text: Object(c.a)(r.user.language, "error.type.generic")
					}))
				}, A = Object(r.a)(i.g), U = (e, t, o) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					if ((await g(i(), e, t)).ok) {
						const r = s(),
							i = Object(M.I)(r, {
								postId: t
							}),
							l = i && i.title || "",
							d = Object(E.q)(r, {
								collectionId: e
							}),
							u = (d && d.postIds && d.postIds.indexOf(t) || -1) - 1;
						if (n(A({
								collectionId: e,
								postId: t
							})), o && u >= 0) {
							const t = s(),
								o = Object(E.q)(t, {
									collectionId: e
								}),
								c = o && o.postIds && o.postIds[u] || "",
								r = Object(M.I)(t, {
									postId: c
								});
							r && r.permalink && n(Object(v.a)(r.permalink))
						}
						n(Object(a.e)({
							kind: h.b.SuccessMod,
							text: Object(c.a)(r.user.language, "collection.postRemovedSuccess", {
								postTitle: l
							}),
							buttonText: Object(c.a)(r.user.language, "collection.undo"),
							buttonAction: z(e, t)
						}))
					} else {
						const e = s();
						n(Object(a.e)({
							kind: h.b.Error,
							text: Object(c.a)(e.user.language, "error.type.generic")
						}))
					}
				}, B = Object(r.a)(i.a), K = Object(r.a)(i.t), z = (e, t) => async (o, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n();
					if ((await m(r(), e, t)).ok) {
						o(B({
							collectionId: e,
							postId: t
						})), o(K({
							collectionId: e,
							postId: t
						}));
						const n = Object(M.I)(i, {
								postId: t
							}),
							s = Object(E.q)(i, {
								collectionId: e
							}),
							r = s && s.title || "";
						o(Object(a.e)({
							kind: h.b.SuccessMod,
							text: Object(c.a)(i.user.language, "collection.postAddedSuccess", {
								title: r
							}),
							buttonText: Object(c.a)(i.user.language, "collection.view"),
							buttonAction: Object(v.a)(n.permalink)
						}))
					} else o(Object(a.e)({
						kind: h.b.Error,
						text: Object(c.a)(i.user.language, "error.type.generic")
					}))
				}, W = Object(r.a)(i.e), F = (e, t) => async (o, r, i) => {
					let {
						apiContext: l
					} = i;
					const d = r();
					if ((await j(l(), e)).ok) {
						const {
							url: r
						} = d.platform.currentPage, i = Object(E.q)(d, {
							collectionId: e
						}), l = i && i.title || "", u = i && i.subredditId, p = u ? Object(k.c)(d, u) : "/";
						o(W({
							collectionId: e,
							collection: i
						})), o(t ? Object(n.c)(Object(s.a)(r, ["collection"])) : Object(n.b)(p)), o(Object(a.e)({
							kind: h.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.collectionDeletedSuccess", {
								title: l
							})
						}))
					} else o(Object(a.e)({
						kind: h.b.Error,
						text: Object(c.a)(d.user.language, "error.type.generic")
					}))
				}, G = Object(r.a)(i.r), R = Object(r.a)(i.n), q = Object(r.a)(i.s), V = (e, t) => async (o, n, s) => {
					let {
						apiContext: r
					} = s;
					o(G());
					const i = await C(r(), e, t);
					let l = !1;
					const d = n();
					if (i.ok) o(q({
						collectionId: e,
						newTitle: t
					})), o(Object(a.e)({
						kind: h.b.SuccessMod,
						text: Object(c.a)(d.user.language, "collection.editModal.titleUpdateSuccess")
					})), l = !0;
					else {
						const e = i.error;
						o(R(e)), o(Object(a.e)({
							kind: h.b.Error,
							text: Object(c.a)(d.user.language, "error.type.generic")
						}))
					}
					return l
				}, Y = Object(r.a)(i.l), Z = Object(r.a)(i.m), J = Object(r.a)(i.k), X = e => async (t, o) => {
					const c = o().platform.currentPage.locationState;
					t(!(!c || !c[l.a.IsOverlay]) ? Object(v.a)(e.permalink) : Object(n.b)(Object(y.b)(e.permalink)))
				}, H = Object(r.a)(i.i), Q = Object(r.a)(i.j), $ = Object(r.a)(i.h), ee = Object(r.a)(i.p), te = Object(r.a)(i.o), oe = Object(r.a)(i.q), ne = e => async t => {
					const o = [],
						{
							collectionId: n,
							description: s,
							displayLayout: r,
							postIds: i,
							title: l
						} = e;
					i && o.push(t(((e, t) => async (o, n, s) => {
						let {
							apiContext: r
						} = s;
						o(H());
						const i = await _(r(), e, t);
						let l = !1;
						const d = n();
						return i.ok ? (o(Q({
							collectionId: e,
							postIds: t
						})), o(Object(a.e)({
							kind: h.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.editModal.reorderCollectionSuccess")
						})), l = !0) : (o($({
							error: i.error
						})), o(Object(a.e)({
							kind: h.b.Error,
							text: Object(c.a)(d.user.language, "error.type.generic")
						}))), l
					})(n, i))), l && o.push(t(V(n, l))), void 0 !== s && o.push(t(((e, t) => async (o, n, s) => {
						let {
							apiContext: r
						} = s;
						o(Y());
						const i = await w(r(), e, t);
						let l = !1;
						const d = n();
						if (i.ok) o(Z({
							collectionId: e,
							newDescription: t
						})), o(Object(a.e)({
							kind: h.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.editModal.descriptionUpdateSuccess")
						})), l = !0;
						else {
							const e = i.error;
							o(J(e)), o(Object(a.e)({
								kind: h.b.Error,
								text: Object(c.a)(d.user.language, "error.type.generic")
							}))
						}
						return l
					})(n, s))), r && o.push(t(((e, t) => async (o, n, s) => {
						let {
							apiContext: r
						} = s;
						o(ee());
						const i = await I(r(), e, t);
						let l = !1;
						const d = n();
						if (i.ok) o(oe({
							collectionId: e,
							newLayout: t
						})), o(Object(a.e)({
							kind: h.b.SuccessMod,
							text: Object(c.a)(d.user.language, "collection.editModal.layoutUpdateSuccess")
						})), l = !0;
						else {
							const e = i.error;
							o(te(e)), o(Object(a.e)({
								kind: h.b.Error,
								text: Object(c.a)(d.user.language, "error.type.generic")
							}))
						}
						return l
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
				a = o("./src/reddit/i18n/utils.ts"),
				l = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = o("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = o.n(d);
			const p = e => e.preventDefault();
			t.a = Object(s.a)(e => c.a.createElement(r.c, null, c.a.createElement(r.g, null, c.a.createElement(l.a, null, c.a.createElement(r.n, null, e.headerText || Object(a.c)("Confirm")), c.a.createElement(i.a, {
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
			}, e.cancelActionText || Object(a.c)("Cancel")), c.a.createElement(r.r, {
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
				return w
			}));
			var n = o("./node_modules/react/index.js"),
				c = o.n(n),
				s = o("./node_modules/react-redux/es/index.js"),
				r = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/lib/lessComponent.tsx"),
				l = o("./src/reddit/actions/tooltip.ts"),
				d = o("./src/reddit/i18n/utils.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/Row.tsx"),
				m = o("./src/reddit/icons/fonts/Menu/index.tsx"),
				O = o("./src/reddit/selectors/tooltip.ts"),
				j = o("./src/reddit/components/OverflowMenu/index.m.less"),
				x = o.n(j);
			const f = a.a.wrapped(p.a, "_Dropdown", x.a),
				g = Object(u.a)(f),
				C = a.a.button("MenuButton", x.a),
				_ = a.a.wrapped(m.a, "MenuIcon", x.a),
				w = a.a.wrapped(b.b, "DropdownRow", x.a),
				I = Object(r.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: o
						} = t;
						return Object(O.b)(o)(e)
					}
				}),
				v = Object(s.b)(I, (e, t) => {
					let {
						dropdownId: o
					} = t;
					return {
						toggleDropdown: () => e(Object(l.g)({
							tooltipId: o
						}))
					}
				}),
				y = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = v(e => c.a.createElement(C, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": Object(d.c)("more options"),
				className: Object(i.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: y(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : c.a.createElement(_, null), c.a.createElement(g, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return x
			}));
			o("./node_modules/core-js/modules/es6.symbol.js");
			var n = o("./node_modules/lodash/throttle.js"),
				c = o.n(n),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = o("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = o("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = o("./src/reddit/controls/Dropdown/index.m.less"),
				p = o.n(u),
				b = o("./src/reddit/controls/Dropdown/row.m.less"),
				m = o.n(b);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var o = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var c = 0;
					for (n = Object.getOwnPropertySymbols(e); c < n.length; c++) t.indexOf(n[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[c]) && (o[n[c]] = e[n[c]])
				}
				return o
			};
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = c()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, o = Object(i.a)(m.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? r.a.createElement(a.a, O({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && r.a.createElement("span", {
						className: o
					}, e.children), r.a.createElement("span", {
						className: Object(i.a)(m.a.text, e.textClassName)
					}, e.displayText)) : r.a.createElement(d.a, O({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: c()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? r.a.createElement("div", null, e.children) : r.a.createElement("span", {
						className: o
					}, e.children)), e.displayText && r.a.createElement("span", {
						className: Object(i.a)(m.a.text, e.textClassName)
					}, e.displayText), e.showDropdownTriangle && r.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, o = j(e, ["className"]);
				const n = Object(i.a)(m.a.row, t, {
					[m.a.mIsInteractive]: !o.noHover,
					[m.a.mIsSelected]: o.isSelected
				});
				return r.a.createElement(x, O({
					className: n
				}, o))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, o) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, o) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				c = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = o.n(r);
			t.a = e => {
				let {
					center: t,
					className: o,
					sizePx: n
				} = e;
				return c.a.createElement("div", {
					className: Object(s.a)(i.a.loadingIcon, o, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(n, "px")
					}
				})
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, o) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/lessComponent.tsx"),
				c = o("./src/reddit/controls/InternalLink/index.tsx"),
				s = o("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				r = o.n(s);
			t.a = n.a.wrapped(c.a, "unstyledInternalLink", r.a)
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "h", (function() {
				return l
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
				return f
			})), o.d(t, "p", (function() {
				return g
			})), o.d(t, "c", (function() {
				return C
			})), o.d(t, "j", (function() {
				return _
			})), o.d(t, "q", (function() {
				return w
			})), o.d(t, "k", (function() {
				return I
			})), o.d(t, "l", (function() {
				return v
			})), o.d(t, "i", (function() {
				return y
			})), o.d(t, "d", (function() {
				return h
			}));
			var n, c, s = o("./src/reddit/constants/tracking.ts"),
				r = o("./src/reddit/helpers/trackers/postEvent.ts"),
				i = o("./src/reddit/selectors/platform.ts"),
				a = o("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(c || (c = {}));
			const l = e => t => Object.assign({
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
					const o = Object.assign({}, a.defaults(e), {
						action: s.c.CLICK,
						subreddit: a.subreddit(e)
					});
					return void 0 === t ? o : Object.assign({}, o, {
						post: a.post(e, t),
						postCollection: a.postCollectionI13nSelector(e, {
							postId: t
						}),
						postEvent: a.postEventI13nSelector(e, {
							postId: t
						})
					})
				},
				b = e => Object.assign({}, x(e), {
					action: s.c.VIEW,
					noun: c.collectionEducation
				}),
				m = e => Object.assign({}, x(e), {
					action: s.c.CLICK,
					noun: c.collectionEducationGotIt
				}),
				O = e => Object.assign({}, x(e), {
					action: s.c.VIEW,
					noun: c.eventEducation
				}),
				j = e => Object.assign({}, x(e), {
					action: s.c.CLICK,
					noun: c.eventEducationGotIt
				}),
				x = e => Object.assign({}, a.defaults(e), {
					subreddit: a.subreddit(e),
					source: n.postComposer
				}),
				f = (e, t) => o => Object.assign({}, p(o, e), {
					source: t || n.postOverflowMenu,
					noun: c.collectionAddPost
				}),
				g = e => t => Object.assign({}, p(t, e), {
					source: n.collectionComposer,
					noun: c.collectionRemovePost
				}),
				C = () => e => Object.assign({}, p(e), {
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
				w = () => e => Object.assign({}, p(e), {
					source: n.collectionComposer,
					noun: c.collectionSelect
				}),
				I = e => t => Object.assign({}, a.defaults(t), {
					subreddit: a.subreddit(t),
					source: n.collectionComposer,
					action: s.c.CLICK,
					noun: c.collectionDelete,
					postCollection: a.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				v = e => t => Object.assign({}, p(t), {
					source: n.collectionComposer,
					noun: c.collectionEdit,
					postCollection: a.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				y = e => t => Object.assign({}, p(t, e), {
					source: n.collectionComposer,
					noun: c.startEvent
				}),
				h = () => e => {
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
				return x
			})), o.d(t, "c", (function() {
				return f
			})), o.d(t, "d", (function() {
				return g
			}));
			var n, c = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/eventTools/index.ts"),
				r = o("./src/lib/timezone/index.ts"),
				i = o("./src/reddit/constants/tracking.ts"),
				a = o("./src/reddit/models/PostCreationForm/index.ts"),
				l = o("./src/reddit/selectors/platform.ts"),
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
						postEvent: C(e),
						postComposer: _(e)
					}))
				},
				j = () => e => ({
					source: n.eventComposer,
					action: i.c.VIEW,
					noun: i.b.SCREEN,
					actionInfo: b(e),
					postEvent: C(e)
				}),
				x = e => t => Object.assign({}, v(t, Object(l.o)(t)), {
					source: n.postComposer,
					noun: "apply",
					postComposer: w(e)
				}),
				f = () => e => Object.assign({}, v(e, Object(l.o)(e)), {
					noun: "cancel",
					actionInfo: b(e)
				}),
				g = e => t => Object.assign({}, v(t, Object(l.o)(t)), {
					noun: "delete",
					actionInfo: b(t),
					postComposer: _(t),
					postEvent: I(e)
				}),
				C = e => {
					const t = Object(d.o)(e);
					return t && I(t)
				},
				_ = e => w(Object(d.o)(e)),
				w = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === a.i.AtEventTime ? Object(r.f)(e.startDate).getTime() / c.Bb : void 0
					}
				},
				I = e => {
					const t = Object(r.f)(e.startDate).getTime() / c.Bb,
						o = Object(r.f)(e.endDate).getTime() / c.Bb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: o,
						eventState: Object(s.e)(t, o)
					}
				},
				v = (e, t) => {
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
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, o) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				c = o.n(n),
				s = o("./src/reddit/icons/fonts/helpers.tsx"),
				r = o("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = o.n(r);
			const a = o("./src/lib/lessComponent.tsx").a.wrapped(e => c.a.createElement("i", {
				className: "".concat(Object(s.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", i.a);
			t.a = a
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
			const a = o("./src/lib/lessComponent.tsx").a.wrapped(e => c.a.createElement("i", {
				className: "".concat(Object(s.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", i.a);
			t.a = a
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a.ce55628ecb68d652ecd1.js.map