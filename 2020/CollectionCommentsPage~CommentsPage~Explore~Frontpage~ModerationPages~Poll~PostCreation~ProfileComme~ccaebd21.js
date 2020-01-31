// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21.9cf91267aeb4bd21480e.js
// Retrieved at 1/30/2020, 7:20:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21"], {
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1IZotn_IQQ1fgtUjaFYbkd",
				onHoverActionText: "_1Zlk1VrZ8puYZy5lJOfz--",
				Container: "_1IZotn_IQQ1fgtUjaFYbkd",
				PostTitle: "_1hzDym_NpIlizkTDXc_rQj",
				postTitle: "_1hzDym_NpIlizkTDXc_rQj",
				MetaLine: "_67JuJTdFwIJPLPDkyPX-f",
				metaLine: "_67JuJTdFwIJPLPDkyPX-f",
				SubredditName: "_88OYON0K3w_tpnmCSWlUX",
				subredditName: "_88OYON0K3w_tpnmCSWlUX",
				InfoSpan: "_3DFfW-OG-MvCLiiEN18mpq",
				infoSpan: "_3DFfW-OG-MvCLiiEN18mpq"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				TopRow: "vuQEtla32r0kemmh11Hov",
				topRow: "vuQEtla32r0kemmh11Hov",
				TitleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				titleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				DetailsContainer: "_87UrrqUro4oVpXFAElZUX",
				detailsContainer: "_87UrrqUro4oVpXFAElZUX",
				ButtonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				buttonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				CloseWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				closeWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				Close: "_1TaKYhB80ExuTPoLaQZMRE",
				close: "_1TaKYhB80ExuTPoLaQZMRE",
				Empty: "_20K7F6rAgXGH5z83v7Ifiv",
				empty: "_20K7F6rAgXGH5z83v7Ifiv",
				EmptyImage: "_2eLeResic3Gc77W_edgNGt",
				emptyImage: "_2eLeResic3Gc77W_edgNGt",
				EmptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				emptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				FilterWrapper: "pKfhphFBuya82DYP2Q90X",
				filterWrapper: "pKfhphFBuya82DYP2Q90X",
				FilterInput: "_3W5cary86KmYWrVgEpGKPb",
				filterInput: "_3W5cary86KmYWrVgEpGKPb",
				SearchIcon: "_9T_dguVcd795c_vOyl9s4",
				searchIcon: "_9T_dguVcd795c_vOyl9s4",
				PlusIcon: "hfmgzmXCLe3hvSyZad9WP",
				plusIcon: "hfmgzmXCLe3hvSyZad9WP",
				CreateCollectionButton: "_34_h0zRV3AgFr_0sh99pKz",
				createCollectionButton: "_34_h0zRV3AgFr_0sh99pKz"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/app/strings/index.ts"),
				o = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				c = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				u = s("./src/reddit/actions/postCreation/general.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/keycodes.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				b = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				f = s("./src/reddit/icons/svgs/Search/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/models/PostCreationForm/index.ts"),
				v = s("./src/reddit/selectors/postCollection.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				E = s("./src/lib/timeAgo/index.ts"),
				j = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				y = s("./src/reddit/helpers/name/index.ts"),
				w = s("./src/reddit/models/Subreddit/index.ts"),
				I = s("./src/reddit/models/User/index.ts"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				k = s.n(P),
				M = s("./src/lib/lessComponent.tsx");
			const S = M.a.div("Container", k.a),
				N = M.a.h2("PostTitle", k.a),
				B = M.a.div("MetaLine", k.a),
				F = M.a.span("SubredditName", k.a),
				L = M.a.time("InfoSpan", k.a),
				A = Object(a.c)({
					subreddit: (e, t) => {
						let {
							collection: {
								subredditId: s
							}
						} = t;
						return s ? Object(T.S)(e, {
							subredditId: s
						}) : void 0
					},
					user: O.i
				});
			class R extends c.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						language: t,
						subreddit: s,
						user: o,
						onHoverActionText: r
					} = this.props, i = s && Object(w.e)(s) && o ? Object(y.c)(Object(I.f)(o)) : s ? s.displayText : "", a = e.postIds.length;
					return c.a.createElement(S, {
						onClick: this.onClick,
						className: k.a.container
					}, c.a.createElement(N, {
						"data-redditstyle": !0
					}, e.title), c.a.createElement(B, {
						"data-redditstyle": !0
					}, i && c.a.createElement(F, {
						"data-redditstyle": !0
					}, i), i && c.a.createElement(j.b, null), c.a.createElement(L, null, Object(n.c)(t, "postCreation.postsCount", a)), c.a.createElement(j.b, null), c.a.createElement(L, null, Object(n.a)(t, "postCreation.collections.creationTime", {
						time: Object(E.d)(t, e.createdAtUTC)
					}))), r && c.a.createElement("div", {
						className: k.a.onHoverActionText
					}, c.a.createElement("span", null, r)))
				}
			}
			var D = Object(i.b)(A)(R),
				X = s("./src/reddit/helpers/trackers/postCollection.ts"),
				W = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				H = s.n(W);
			const U = Object(n.e)("postCreation.collections.collectionsListEmptyText"),
				K = Object(n.e)("postCreation.collections.noCollectionMatchingFilter"),
				q = Object(n.e)("postCreation.collections.filterPlaceholder"),
				V = Object(n.e)("postCreation.collections.collectionsListTitle"),
				z = Object(n.e)("postCreation.collections.createCollection"),
				J = "".concat(o.a.assetPath, "/img/snoo-drafts.png"),
				G = M.a.div("TopRow", H.a),
				Q = M.a.div("TitleRow", H.a),
				Z = M.a.div("DetailsContainer", H.a),
				Y = M.a.wrapped(g.a, "ButtonRow", H.a),
				$ = M.a.div("CloseWrapper", H.a),
				ee = M.a.wrapped(x.a, "Close", H.a),
				te = M.a.div("Empty", H.a),
				se = M.a.img("EmptyImage", H.a),
				ne = M.a.p("EmptyText", H.a),
				oe = M.a.div("FilterWrapper", H.a),
				re = M.a.wrapped(_.a, "FilterInput", H.a),
				ce = M.a.wrapped(f.a, "SearchIcon", H.a),
				ie = M.a.wrapped(b.a, "PlusIcon", H.a),
				ae = M.a.wrapped(h.j, "CreateCollectionButton", H.a),
				le = Object(d.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				de = Object(a.c)({
					collections: v.v,
					language: O.S
				}),
				ue = Object(i.b)(de, (e, t) => {
					let {
						postId: s,
						isOverlay: n
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = C.b;
							s && (t = Object(C.u)(s, !!n)), e(Object(u.y)(t))
						}
					}
				});
			class pe extends c.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(X.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === m.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(X.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(X.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => c.a.createElement(D, {
						key: e.id,
						collection: e,
						language: this.props.language,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(X.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return c.a.createElement(te, null, c.a.createElement(se, {
						src: J
					}), c.a.createElement(ne, null, U(this.props.language)))
				}
				renderNoFilterMatches() {
					return c.a.createElement(te, null, c.a.createElement(ne, null, K(this.props.language)))
				}
				render() {
					const {
						collections: e,
						language: t,
						titleText: s
					} = this.props;
					let n;
					if (0 === e.length) n = this.renderNoCollections();
					else {
						const t = le(e, this.state.filterStr);
						n = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return c.a.createElement("div", {
						className: H.a.wrapper,
						"data-redditstyle": !0
					}, c.a.createElement(G, null, c.a.createElement(Q, {
						"data-redditstyle": !0
					}, s || V(t), c.a.createElement($, {
						onClick: this.close
					}, c.a.createElement(ee, {
						"data-redditstyle": !0
					}))), c.a.createElement(oe, null, c.a.createElement(ce, null), c.a.createElement(re, {
						placeholder: q(t),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), c.a.createElement(Z, null, n), c.a.createElement(Y, null, c.a.createElement(ae, {
						onClick: this.handleCreateCollectionClicked
					}, c.a.createElement(ie, null), z(t))))
				}
			}
			const me = Object(l.a)(ue(Object(p.b)(pe)));
			t.a = me
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3vV_tKesULQ5WMGh38lX4b",
				container: "_3vV_tKesULQ5WMGh38lX4b",
				Content: "_11JSvybbRhcX_cfoagpne_",
				content: "_11JSvybbRhcX_cfoagpne_",
				TitleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				titleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				Details: "_3Uw02TWwSQhLfCJkPsihqr",
				details: "_3Uw02TWwSQhLfCJkPsihqr",
				Footer: "_25MDqXgOCWDBjtAEBi2cmy",
				footer: "_25MDqXgOCWDBjtAEBi2cmy",
				CancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				cancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				CloseWrapper: "_GVnqGyX40oKfgIS56Q-k",
				closeWrapper: "_GVnqGyX40oKfgIS56Q-k",
				CloseIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				closeIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				Label: "_3QPFKpxsmu6j_gbiAuVgfW",
				label: "_3QPFKpxsmu6j_gbiAuVgfW",
				TitleInput: "ZEfw7a99aHsmkl4fx38l5",
				titleInput: "ZEfw7a99aHsmkl4fx38l5",
				AddCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				addCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				PrimaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				primaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				LoadingIcon: "_3cD2qECfUUTwega16qDhBc",
				loadingIcon: "_3cD2qECfUUTwega16qDhBc",
				ErrorText: "GIQ2YnBHQtY1QM1yPEhCR",
				errorText: "GIQ2YnBHQtY1QM1yPEhCR"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/formatApiError/index.ts"),
				d = s("./src/reddit/actions/postCollection/index.ts"),
				u = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/constants/postCreation.ts"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/ErrorText/index.tsx"),
				_ = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				f = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				E = s.n(O),
				j = s("./src/lib/lessComponent.tsx");
			const y = Object(i.e)("postCreation.cancel"),
				w = Object(i.e)("postCreation.create"),
				I = Object(i.e)("postCreation.save"),
				T = Object(i.e)("postCreation.collections.createCollection"),
				P = Object(i.e)("postCreation.collections.createModal.details"),
				k = Object(i.e)("postCreation.collections.createModal.giveATitle"),
				M = Object(i.e)("postCreation.collections.createModal.editTitle"),
				S = Object(i.e)("postCreation.collections.createModal.titlePlaceholderText"),
				N = j.a.div("Container", E.a),
				B = j.a.div("Content", E.a),
				F = j.a.div("TitleRow", E.a),
				L = j.a.div("Details", E.a),
				A = j.a.wrapped(u.e, "Footer", E.a),
				R = j.a.wrapped(m.i, "CancelButton", E.a),
				D = j.a.div("CloseWrapper", E.a),
				X = j.a.wrapped(f.a, "CloseIcon", E.a),
				W = j.a.label("Label", E.a),
				H = j.a.wrapped(_.a, "TitleInput", E.a),
				U = j.a.wrapped(b.a, "AddCollectionIcon", E.a),
				K = j.a.wrapped(m.f, "PrimaryActionButton", E.a),
				q = j.a.wrapped(x.a, "LoadingIcon", E.a),
				V = j.a.wrapped(h.b, "ErrorText", E.a),
				z = Object(c.c)({
					collection: C.q,
					error: C.c,
					isPending: C.g,
					language: v.S
				}),
				J = Object(r.b)(z, (e, t) => ({
					onCreate: (t, s) => e(Object(d.b)(t, s)),
					onUpdate: s => e(Object(d.h)(t.collectionId, s))
				}));
			class G extends o.a.PureComponent {
				constructor(e) {
					super(e), this.onTitleChange = e => {
						this.setState({
							collectionTitle: e.target.value
						})
					}, this.onPrimaryButtonClick = async () => {
						const {
							collectionId: e,
							subredditId: t
						} = this.props, {
							collectionTitle: s
						} = this.state;
						if (e) {
							await this.props.onUpdate(s) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(s, t);
							e && this.props.onCollectionCreated && this.props.onCollectionCreated(e)
						}
					}, this.onClose = () => {
						this.props.onCancel()
					};
					const {
						collection: t
					} = e;
					this.state = {
						collectionTitle: t ? t.title : ""
					}
				}
				render() {
					const {
						collectionId: e,
						error: t,
						isPending: s,
						language: n
					} = this.props, r = !e, c = !!this.state.collectionTitle.trim(), i = r ? w : I, a = r ? k : M;
					return o.a.createElement(N, null, o.a.createElement(D, {
						onClick: this.props.onCancel
					}, o.a.createElement(X, null)), o.a.createElement(B, null, r && o.a.createElement(o.a.Fragment, null, o.a.createElement(F, null, o.a.createElement(U, null), T(n)), o.a.createElement(L, null, P(n))), o.a.createElement(W, null, a(n), o.a.createElement(H, {
						maxLength: p.e,
						onChange: this.onTitleChange,
						placeholder: S(n),
						value: this.state.collectionTitle
					}))), o.a.createElement(A, null, o.a.createElement(g.a, null, o.a.createElement(R, {
						onClick: this.props.onCancel
					}, y(n)), o.a.createElement(K, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !c
					}, s ? o.a.createElement(q, {
						sizePx: 10
					}) : i(n))), t && o.a.createElement(V, {
						language: n
					}, Object(l.a)(n, t))))
				}
			}
			t.a = Object(a.a)(J(G))
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			}));
			var n, o = s("./node_modules/react/index.js"),
				r = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				p = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				m = s("./src/reddit/components/FlairPreview/index.tsx"),
				h = s("./src/reddit/components/FlairSearch/index.tsx"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/selectors/moderatorPermissions.ts"),
				g = s("./src/reddit/selectors/postFlair.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				E = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				j = s.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const y = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				w = Object(i.c)({
					flairData: g.d,
					subreddit: C.S,
					isMod: (e, t) => !!Object(f.j)(e, t)
				});
			class I extends r.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(v.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(O.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(O.c)(this.props.flairs) || null;
					return Object(O.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: n,
						subreddit: o
					} = e, c = o.displayText, {
						templates: i,
						templateIds: a
					} = n, {
						canSave: l
					} = this.canSave();
					return r.a.createElement(p.a, {
						className: s
					}, r.a.createElement(u.a, {
						onClosePressed: e.closeModal,
						title: Object(x.c)("Select ".concat(Object(x.b)("subredditName", c), " flair"))
					}), r.a.createElement(m.a, {
						flair: t,
						flairTemplateType: b.d.LinkFlair,
						placeholderText: Object(x.c)("Post Title")
					}), r.a.createElement(h.a, {
						flair: t,
						flairTemplateType: b.d.LinkFlair,
						subredditId: o.id,
						templates: i,
						templateIds: a,
						onChange: this.setSelectedFlair
					}), r.a.createElement("div", {
						className: j.a.buttonsRow
					}, r.a.createElement(_.f, {
						disabled: !l,
						onClick: this.onApply
					}, Object(x.c)("Apply")), r.a.createElement(_.i, {
						className: j.a.clearButton,
						onClick: this.onClear
					}, Object(x.c)("Clear Flair"))))
				}
			}
			const T = Object(c.b)(w, (e, t) => ({
				closeModal: () => e(Object(d.i)(t.modalId))
			}))(I);
			t.a = Object(l.a)(Object(a.b)(T))
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				a = s.n(i);
			const l = c.a.span("TextWrapper", a.a),
				d = c.a.wrapped(e => o.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement(l, null, e.text, " ")), "Button", a.a),
				u = c.a.wrapped(d, "ApproveButton", a.a),
				p = c.a.wrapped(d, "RemoveButton", a.a),
				m = e => o.a.createElement("button", {
					className: Object(r.a)(a.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				let {
					type: t
				} = e;
				return "subreddit" === t ? "subredditActions" : "profileActions"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				c = s("./src/reddit/selectors/monthsToMinutes.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				language: a.S,
				subscribeReminderTooltipId: c.C,
				subscribeTooltipId: c.D,
				userIsSubscriber: i.cb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(r.d([s], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([s], !1))
				}
			})
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return i
			}));
			const n = "comment",
				o = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				c = "comments-page-link-num-comments",
				i = "post-content"
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "g", (function() {
				return l
			}));
			const n = "PostCreation-AddEventButton",
				o = 500,
				r = "PostCreation-CollectionEducationTooltip",
				c = "PostCreation-EventEducationTooltip",
				i = 300,
				a = i,
				l = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/uniqueId.js"),
				o = s.n(n),
				r = s("./node_modules/raf/index.js"),
				c = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/i18n/utils.ts"),
				h = s("./src/reddit/selectors/activeModalId.ts"),
				_ = s("./src/higherOrderComponents/asModal/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				g = s.n(f);
			var C = Object(_.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return a.a.createElement("div", {
						className: g.a.wrapper
					}, a.a.createElement(b.a, {
						className: g.a.titleRow
					}, s), a.a.createElement("div", {
						className: g.a.detailsContainer
					}, t), a.a.createElement(b.a, {
						className: g.a.buttonRow
					}, a.a.createElement(x.f, {
						className: g.a.confirmButton,
						onClick: e.onConfirmed
					}, Object(m.c)("Ok"))))
				}),
				v = s("./src/reddit/controls/ErrorText/index.m.less"),
				O = s.n(v);
			s.d(t, "a", (function() {
				return w
			})), s.d(t, "c", (function() {
				return I
			}));
			const E = Object(d.c)({
				activeModalId: h.a
			});
			class j extends a.a.Component {
				constructor(e) {
					super(e), this.spanRef = a.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(o()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					c()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: s,
						errorModalBody: n,
						errorModalTitle: o = Object(m.c)("Error"),
						moreText: r = Object(m.c)("More")
					} = this.props, {
						modalId: c,
						textHasOverflowed: i
					} = this.state;
					return a.a.createElement("div", {
						className: Object(u.a)(O.a.wrapper, s)
					}, a.a.createElement("span", {
						className: O.a.description,
						ref: this.spanRef
					}, e), i && a.a.createElement("span", {
						className: O.a.moreText,
						onClick: this.toggleModal
					}, r), t === c && a.a.createElement(C, {
						onConfirmed: this.toggleModal,
						title: o
					}, n || e))
				}
			}
			const y = Object(l.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(j),
				w = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: r = []
					} = e, c = r.length ? r : o ? [o] : [];
					return c.length ? a.a.createElement("div", {
						className: t
					}, c.map((e, t) => a.a.createElement(y, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				I = e => a.a.createElement(w, {
					fallbackMessage: Object(m.c)("Something went wrong"),
					messages: e
				});
			t.b = y
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/Input/index.m.less"),
				r = s.n(o);
			t.a = n.a.input("input", r.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = s.n(c);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: n
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(i.a.loadingIcon, s, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(n, "px")
					}
				})
			}
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return i
			})), s.d(t, "E", (function() {
				return a
			})), s.d(t, "q", (function() {
				return l
			})), s.d(t, "t", (function() {
				return d
			})), s.d(t, "u", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "s", (function() {
				return h
			})), s.d(t, "v", (function() {
				return _
			})), s.d(t, "o", (function() {
				return x
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "F", (function() {
				return f
			})), s.d(t, "C", (function() {
				return g
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "r", (function() {
				return v
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "w", (function() {
				return w
			})), s.d(t, "j", (function() {
				return I
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "p", (function() {
				return P
			})), s.d(t, "y", (function() {
				return k
			})), s.d(t, "n", (function() {
				return M
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "D", (function() {
				return N
			})), s.d(t, "z", (function() {
				return B
			})), s.d(t, "a", (function() {
				return F
			})), s.d(t, "x", (function() {
				return L
			})), s.d(t, "A", (function() {
				return A
			})), s.d(t, "B", (function() {
				return R
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign({}, o.defaults(e), {
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				c = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.n)(e)
				}),
				i = () => e => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post"
				}, r(e)),
				a = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer"
				}, r(e)),
				l = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date"
				}, r(e)),
				d = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time"
				}, r(e)),
				u = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone"
				}, r(e)),
				p = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply"
				}, r(e)),
				m = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				h = e => t => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit"
				}, r(t), {
					scheduledPost: c(e)
				}),
				_ = e => t => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit"
				}, r(t), {
					scheduledPost: c(e)
				}),
				x = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts"
				}, r(e)),
				b = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts"
				}, r(e)),
				f = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				g = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				C = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "edit_post"
				}, r(e)),
				v = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "submit_post_now"
				}, r(e)),
				O = e => t => Object.assign({
					source: "post",
					action: "click",
					noun: "overflow_menu"
				}, r(t), {
					actionInfo: o.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				E = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "one_time_frequency"
				}, r(e)),
				j = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "hourly_frequency"
				}, r(e)),
				y = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "daily_frequency"
				}, r(e)),
				w = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "weekly_frequency"
				}, r(e)),
				I = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "monthly_frequency"
				}, r(e)),
				T = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "custom_frequency"
				}, r(e)),
				P = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "start_event_now"
				}, r(e)),
				k = (e, t, s) => c => Object.assign({
					source: "post",
					action: "click",
					noun: Object(n.k)(e)
				}, r(c), {
					actionInfo: o.actionInfo(c, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				M = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta"
				}, r(e)),
				S = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post"
				}, r(e)),
				N = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer"
				}, r(e)),
				B = () => (e, t) => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "update"
				}, r(e), {
					scheduledPost: c(t)
				}),
				F = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				L = () => (e, t) => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete"
				}, r(e), {
					scheduledPost: c(t)
				}),
				A = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer"
				}, r(e)),
				R = () => (e, t) => {
					const s = r(e);
					return Object.assign({
						source: "post",
						action: "view",
						noun: "error"
					}, s, {
						actionInfo: Object.assign({}, s.actionInfo, {
							reason: "failed_post"
						}),
						scheduledPost: c(t)
					})
				}
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("calendar"), a.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("live"), a.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("sticky"), a.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, o.a.createElement("defs", null, o.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), o.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#".concat("svg-add-collection"),
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(c);
			const a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = a
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				a = s.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: r,
					gutter: i
				} = e, u = d(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return o.a.createElement("div", l({
					className: Object(c.a)(a.a.expandRightContainer, t)
				}, u), o.a.createElement("div", {
					className: a.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: i
					}
				}, Array.isArray(s) && s[0]), o.a.createElement("div", {
					className: a.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~PostCreation~ProfileComme~ccaebd21.9cf91267aeb4bd21480e.js.map