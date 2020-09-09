// https://www.redditstatic.com/desktop2x/AwardCreationModal.27baa2f75d76336a7ac9.js
// Retrieved at 9/9/2020, 4:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AwardCreationModal"], {
		"./src/reddit/components/AwardCreationModal/AwardImagePreview/index.m.less": function(e, t, a) {
			e.exports = {
				previewComponent: "_2N7AHaslp4fm4xx0vdsKcr",
				preview: "_69KS5WnKmEsRj0C8zqItT",
				previewLast: "_2sW96thTjDuY55x-rAKXIs",
				previewImg: "_3lAuMfEzhEPD_Xf_L3ta8O",
				largeSizeImg: "_3QEbAdB2Wli-v5WJu_Mza0",
				normalSizeImg: "D6A_FC2A2y0aQw05qRxFw",
				smallSizeImg: "CqhZNomhcS2uqI-6sDOXM",
				removeBtn: "_32GF98NFnAAyhuqUYcowpN"
			}
		},
		"./src/reddit/components/AwardCreationModal/AwardImageUploader/index.m.less": function(e, t, a) {
			e.exports = {
				imageUploader: "_1bUFC3QOX8o9-ltmswQiA-",
				invalid: "_2waN20LyqlF3jwxteepU5",
				fileDrop: "_1qnkaC2-8BD2PFV6is_dKV",
				fileDropContent: "_2Ua2i9qbqiDKYFBsKhn2sF",
				fileIsOver: "_2Cif1XD0T9u-bycw9AudlW",
				uploadIconContainer: "_1bpN-UtnomxKOxKCP1qsIA",
				uploadIcon: "CJJKBMig3ruX_mxvPvP7H",
				uploadLabel: "_3-8MwaL0MyOr_cPCdA2Gkc",
				imageInput: "_20B7rq34f3NDtUr_2MjpKr"
			}
		},
		"./src/reddit/components/AwardCreationModal/index.m.less": function(e, t, a) {
			e.exports = {
				communityAwardCreationModal: "JMqXV5p2Vt50RT0nucoeZ",
				formSection: "_2ShT7hnK4Duq9cC8qzFCV3",
				formLabelText: "_3IwdAzNCCFDkDFlB3-eGrb",
				formSubtext: "_2vndi6N8casI-W0JjNmRlD",
				modToggleSection: "_286aFJ3b39oydY-H2sxdpw",
				modToggle: "_1HKHhrmlCE2HkcWIUToEW5",
				modToggleLabelText: "_1_LnRw7S3DWCneOTxotrT1",
				errorText: "_3V1Kw5LTo6zuoDzIyBzSq4",
				nameInput: "_7en7UtWrOkPS7TaGFNriz",
				timeInput: "_3jDrmvUNS8V8TL0MqSgjnY",
				dateInput: "_3CMZLYDnST_8QJ_PdpfDEX",
				timezoneInput: "_D_L3yUewQrGO8b_ubiIB",
				timezoneDiv: "_3YW5wJSISOLPGM-Kj5y_Pp",
				globalLabelText: "_2UoEG6hxORiUxOd4R114uv",
				createBtn: "_3kT9HbAKeIYVfH230IL9Dm",
				coinInput: "kMvIrN2_A3Sr-gBZ65sZM"
			}
		},
		"./src/reddit/components/AwardCreationModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				i = a("./src/reddit/contexts/ApiContext.tsx"),
				l = a("./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts"),
				c = a("./src/reddit/helpers/awards/isEligibleForTemporaryAwards.ts"),
				d = a("./src/reddit/actions/gold/communityAwards.ts"),
				m = a("./src/reddit/selectors/communityAwards.ts"),
				u = a("./src/reddit/helpers/trackers/communityAwards.ts"),
				h = a("./src/reddit/components/TrackingHelper/index.tsx"),
				p = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.regexp.split.js"), a("./node_modules/fbt/lib/FbtPublic.js")),
				g = a("./src/reddit/components/AwardCreationModal/index.m.less"),
				b = a.n(g),
				C = a("./src/higherOrderComponents/asModal/index.tsx"),
				f = a("./src/lib/classNames/index.ts"),
				w = a("./src/reddit/constants/colors.ts"),
				E = a("./src/reddit/constants/gold.ts"),
				v = a("./src/reddit/constants/keycodes.ts"),
				y = a("./src/reddit/models/Gold/Award.ts"),
				I = a("./src/reddit/models/Gold/Premium/index.ts"),
				x = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				T = a("./src/reddit/controls/DropdownSelector/index.tsx"),
				S = a("./src/reddit/controls/FormFields/index.tsx"),
				k = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = a("./src/reddit/controls/TextButton/index.tsx"),
				O = a("./src/reddit/controls/ToggleSwitch/index.tsx"),
				_ = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				D = a("./src/lib/timezone/index.ts"),
				P = a("./src/reddit/models/PostCreationForm/index.ts"),
				M = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				F = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				A = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx"),
				j = a("./src/reddit/components/AwardCreationModal/AwardImagePreview/index.m.less"),
				U = a.n(j);
			const {
				fbt: R
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class L extends s.a.Component {
				render() {
					const {
						className: e,
						imageUrl: t,
						onRemove: a
					} = this.props;
					return s.a.createElement("div", {
						className: Object(f.a)(U.a.previewComponent, e)
					}, s.a.createElement("div", {
						className: U.a.preview
					}, s.a.createElement("div", {
						className: Object(f.a)(U.a.previewImg, U.a.largeSizeImg),
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}), s.a.createElement("span", null, R._("Large", null, {
						hk: "1frk2C"
					}))), s.a.createElement("div", {
						className: U.a.preview
					}, s.a.createElement("div", {
						className: Object(f.a)(U.a.previewImg, U.a.normalSizeImg),
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}), s.a.createElement("span", null, R._("Normal", null, {
						hk: "337tns"
					}))), s.a.createElement("div", {
						className: Object(f.a)(U.a.preview, U.a.previewLast)
					}, s.a.createElement("div", {
						className: Object(f.a)(U.a.previewImg, U.a.smallSizeImg),
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}), s.a.createElement("span", null, R._("Small", null, {
						hk: "1g2eZA"
					}))), s.a.createElement("button", {
						className: U.a.removeBtn,
						onClick: a
					}, R._("remove", null, {
						hk: "4zKN1U"
					})))
				}
			}
			var z = L,
				W = (a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./src/reddit/models/Image/index.tsx")),
				V = a("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				H = a("./src/reddit/controls/FileDrop/index.tsx"),
				B = a("./src/reddit/controls/ImageInput/index.tsx"),
				G = a("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				K = a("./src/reddit/components/AwardCreationModal/AwardImageUploader/index.m.less"),
				q = a.n(K);
			const {
				fbt: X
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class Y extends s.a.Component {
				constructor() {
					super(...arguments), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.handleLabelKeydown = e => {
						e.keyCode === v.a.Enter && this.inputRef && (e.preventDefault(), this.inputRef.click())
					}
				}
				render() {
					const {
						className: e,
						id: t,
						isUploading: a,
						name: n,
						onChange: o
					} = this.props;
					return a ? s.a.createElement(V.a, {
						className: e
					}) : s.a.createElement(H.a, {
						className: Object(f.a)(e, q.a.fileDrop),
						onDrop: o,
						render: e => s.a.createElement("label", {
							className: Object(f.a)(q.a.fileDropContent, e && q.a.fileIsOver || ""),
							onKeyDown: this.handleLabelKeydown,
							tabIndex: 0
						}, s.a.createElement("div", {
							className: q.a.uploadIconContainer
						}, s.a.createElement(G.a, {
							className: q.a.uploadIcon
						})), s.a.createElement("div", {
							className: q.a.uploadLabel
						}, X._("Drag and Drop or Upload Image", null, {
							hk: "133Ytg"
						})), s.a.createElement(B.a, {
							className: q.a.imageInput,
							inputId: t,
							inputRef: this.setInputRef,
							name: n,
							onChange: o,
							multiple: !1
						}))
					})
				}
			}
			var J = Y;
			class Q extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imageUploadInProgress: !1
					}, this.handleImageUpload = async e => {
						const t = Array.isArray(e) && e.length > 0 ? e[0] : e;
						if (!t) return;
						const {
							maxSizeBytes: a,
							maxHeight: n,
							minHeight: s,
							maxWidth: o,
							minWidth: r,
							shouldBeEqualDimensions: i,
							onImageChange: l
						} = this.props;
						this.setState({
							imageUploadInProgress: !0
						});
						const c = await Object(W.e)(t);
						if (a && c.file.size > a) {
							const e = p.fbt._("The chosen image file is too large. Please pick a new image and try again.", null, {
								hk: "2LwR6S"
							});
							setTimeout(() => this.handleImageUploadFailed(e), 1e3)
						} else if (i && c.height !== c.width) {
							const e = p.fbt._("The chosen image is not square. Please pick a new image and try again.", null, {
								hk: "2WG1Xo"
							});
							setTimeout(() => this.handleImageUploadFailed(e), 1e3)
						} else if (s && c.height < s || r && c.width < r) {
							const e = p.fbt._("The chosen image does not match the required dimensions. Please pick a new image and try again.", null, {
								hk: "3D0IW1"
							});
							setTimeout(() => this.handleImageUploadFailed(e), 1e3)
						} else if (c.height > n || c.width > o) {
							const e = o.toString(),
								t = n.toString(),
								a = p.fbt._("Image should be less than or equal to {maxWidth}x{maxHeight}. Please pick a new image and try again.", [p.fbt._param("maxWidth", e), p.fbt._param("maxHeight", t)], {
									hk: "2GDxkX"
								});
							setTimeout(() => this.handleImageUploadFailed(a), 1e3)
						} else await l(c), this.setState({
							imageUploadInProgress: !1
						})
					}
				}
				getImageKey() {
					return "COMMUNITY_AWARD_".concat(this.props.subredditId)
				}
				handleImageUploadFailed(e) {
					this.props.onImageUploadFailed(e), this.setState({
						imageUploadInProgress: !1
					})
				}
				render() {
					const {
						className: e,
						id: t,
						isValid: a,
						name: n
					} = this.props, {
						imageUploadInProgress: o
					} = this.state, r = !1 === a ? q.a.invalid : "";
					return s.a.createElement("div", {
						className: Object(f.a)(e, q.a.imageUploader, r)
					}, s.a.createElement(J, {
						id: t,
						isUploading: o,
						name: n,
						onChange: this.handleImageUpload
					}))
				}
			}
			var Z, $ = Q,
				ee = a("./src/lib/sentry/index.ts"),
				te = a("./src/reddit/helpers/media/index.ts"),
				ae = a("./src/reddit/endpoints/gold/communityAwards.ts");
			! function(e) {
				e.BadResponse = "BadResponse", e.CancelledError = "ConnectionCancelled", e.CommunicationError = "CommunicationError", e.ConnectionError = "ConnectionError", e.TimeoutError = "TimeoutError"
			}(Z || (Z = {}));
			const ne = new Error("CommunityAwardImageUpload: Failed to connect to websocket.");
			ne.name = Z.CommunicationError;
			const se = new Error("CommunityAwardImageUpload: WebSocket connection failed before all messages received.");
			se.name = Z.CommunicationError;
			const oe = new Error("CommunityAwardImageUpload: Client websocket timed out.");
			oe.name = Z.TimeoutError;
			const re = new Error("CommunityAwardImageUpload: The websocket returned a bad response.");
			re.name = Z.BadResponse;
			const ie = new Error("CommunityAwardImageUpload: The websocket connection was cancelled.");
			ie.name = Z.CancelledError;
			const le = p.fbt._("There was an error uploading the image. Please try again.", null, {
					hk: "dWlrv"
				}),
				ce = e => new Promise(t => {
					let a = null,
						n = null;
					const s = setTimeout((function() {
						a = oe, ee.c.captureException(a), e.close()
					}), 6e4);
					e.onerror = t => {
						a = se, ee.c.captureException(a), e.close()
					}, e.onclose = e => (clearTimeout(s), t(n ? {
						ok: !0,
						award: n
					} : {
						ok: !1,
						error: a || ie
					})), e.onmessage = t => {
						const s = JSON.parse(t.data);
						"success" !== s.type ? a = re : n = s.payload, e.close()
					}
				}),
				de = async (e, t, a) => {
					const n = await Object(te.g)(t.file) || t.file.type,
						s = await Object(ae.d)(e(), a, t.file.name, n);
					if (!s.ok) {
						const e = new Error("Error creating S3 lease for award: ".concat(s.error && s.error.type));
						return ee.c.captureException(e), {
							ok: !1,
							error: new Error(le)
						}
					}
					const {
						websocketUrl: o,
						s3UploadLease: r
					} = s.body, i = await (e => new Promise((t, a) => {
						const n = new WebSocket(e);
						n.onopen = e => {
							n.onerror = null, t(n)
						}, n.onerror = e => {
							n.close();
							const a = ne;
							ee.c.captureException(a), t()
						}
					}))(o);
					return i ? {
						ok: !0,
						s3UploadLease: r,
						websocket: i
					} : {
						ok: !1,
						error: new Error(le)
					}
				}, me = async (e, t) => {
					const a = await Object(ae.p)(e, t.file);
					if (!a.ok) {
						const e = new Error("Error uploading award imagine to S3 temp bucket: ".concat(a.error && a.error.type));
						return ee.c.captureException(e), {
							ok: !1,
							error: new Error(le)
						}
					}
					const n = a.body;
					return {
						ok: !0,
						imageUrl: decodeURIComponent(n.PostResponse.Location)
					}
				}, ue = "CommunityAwardCreationModalImageInput", he = 15, pe = 30, ge = 2097152, be = 512, Ce = 512, fe = 2048, we = 2048, Ee = 500, ve = e => {
					const t = e || 0;
					return t >= E.f ? t * E.h : t * E.c
				}, ye = e => {
					const t = e || 0;
					return t >= E.f ? t * E.i : 0
				}, Ie = e => e.slice(0, 5), xe = (e, t) => "".concat(e, "T").concat(Ie(t), ":00"), Te = e => {
					const [t, a] = e.split("T");
					return [t, Ie(a)]
				}, Se = () => {
					const e = new Date,
						t = Object(D.g)(e);
					return e.setMinutes(e.getMinutes() + 1440), {
						startDate: t,
						endDate: Object(D.g)(e),
						submitTime: P.i.Now,
						timezoneName: Object(D.b)() || D.a
					}
				};
			class ke extends s.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						e.keyCode === v.a.Escape && this.props.onTryCloseModal()
					}, this.handleChooseImage = async e => {
						const {
							apiContext: t,
							subredditId: a
						} = this.props;
						this.imageDraft = e;
						const n = (new Date).getTime();
						this.setState({
							imageError: void 0,
							imageHeight: e.height,
							imageWidth: e.width
						});
						const s = await de(t, e, a);
						if (!s.ok) return this.handleImageUploadError(s.error.message), void this.sendUploadImageEvent(void 0, e, (new Date).getTime() - n, s.error.message);
						const {
							s3UploadLease: o,
							websocket: r
						} = s;
						this.setState({
							websocket: r
						});
						const i = await me(o, e);
						if (!i.ok) return this.handleImageUploadError(i.error.message), void this.sendUploadImageEvent(void 0, e, (new Date).getTime() - n, i.error.message);
						const {
							imageUrl: l
						} = i;
						this.setState({
							imageUrl: l
						}), this.sendUploadImageEvent(l, e, (new Date).getTime() - n)
					}, this.handleImageRemoval = () => {
						this.cancelExistingWebsockets(), this.setState({
							imageUrl: void 0
						}), this.props.sendEvent(Object(u.c)("remove", "image"))
					}, this.handleImageUploadError = e => {
						this.cancelExistingWebsockets(), this.setState({
							imageError: e,
							imageUrl: void 0
						})
					}, this.handleNameChange = e => {
						this.setState({
							nameValue: e.target.value
						})
					}, this.handleNameFocus = e => {
						this.props.sendEvent(Object(u.c)("click", "name_input"))
					}, this.handleNameBlur = e => {
						this.props.sendEvent(Object(u.c)("type", "name_input"))
					}, this.handleModOnlyChange = () => {
						const e = !this.state.isModOnly;
						this.setState({
							isModOnly: e
						}), this.props.sendEvent(Object(u.b)(e ? "check" : "uncheck", "mod_award", {
							defaultOption: e ? I.a.PREMIUM_1_MONTH.priceInCoins : this.defaultCostOptionValue
						}))
					}, this.handleCostChange = e => {
						const t = e.value;
						this.setState({
							costValue: t
						})
					}, this.handleIsTemporaryChange = () => {
						const e = !this.state.isTemporary;
						this.setState({
							isTemporary: e
						})
					}, this.onCostInputOpen = () => {
						this.props.sendEvent(Object(u.c)("click", "coin_cost_input"))
					}, this.getCostDropdownMenuItems = () => {
						return Object(y.k)(this.props.awards).map(e => ({
							displayText: p.fbt._("{Award cost} Coins", [p.fbt._param("Award cost", e.toLocaleString())], {
								hk: "4rKGHp"
							}),
							value: e
						}))
					}, this.handlePackageDropdownOpen = () => {
						this.props.sendEvent(Object(u.c)("open", "mod_award_months"))
					}, this.handlePremiumAmountChange = e => {
						const t = e.value;
						this.setState({
							selectedPackage: t
						}), this.props.sendEvent(Object(u.b)("click", "mod_award_months", {
							numberMonths: t.monthsOfPremium,
							numberCoins: t.priceInCoins
						}))
					}, this.handleSubmit = async e => {
						e.preventDefault();
						const {
							onCreateCommunityAward: t,
							onCreateModAward: a,
							onCreateAwardFailed: n,
							onCreateAwardSuccess: s
						} = this.props, {
							costValue: o,
							imageUrl: r,
							imageWidth: i,
							imageHeight: l,
							isModOnly: c,
							isTemporary: d,
							startDate: m,
							startTime: h,
							endDate: g,
							endTime: b,
							nameValue: C,
							selectedPackage: f,
							websocket: w
						} = this.state;
						if (!(r && C && o && w)) return;
						if (w.readyState !== w.OPEN) {
							return this.handleImageRemoval(), void n(p.fbt._("There was an error creating the award. Please try again.", null, {
								hk: "1pkgpd"
							}))
						}
						const E = ce(w),
							v = Object(D.f)(xe(m, h)),
							y = Object(D.f)(xe(g, b));
						v.setTime(v.getTime()), y.setTime(y.getTime());
						const I = d ? v.toISOString() : void 0,
							x = d ? y.toISOString() : void 0;
						c ? await a(C, r, i, l, f.monthsOfPremium, I, x) : await t(C, r, i, l, o, I, x);
						const T = await E;
						if (!T.ok) {
							return this.handleImageRemoval(), void n(p.fbt._("There was an error creating the award. Please try again.", null, {
								hk: "1pkgpd"
							}))
						}
						const S = T.award;
						S.awardType = S.awardType.toUpperCase(), s(S), this.props.sendEvent(Object(u.a)(this.state.imageUrl, this.imageDraft, S))
					}, this.onStartDateChange = e => {
						this.setState({
							startDate: e
						})
					}, this.onStartTimeChange = e => {
						this.setState({
							startTime: e
						})
					}, this.onEndDateChange = e => {
						this.setState({
							endDate: e
						})
					}, this.onEndTimeChange = e => {
						this.setState({
							endTime: e
						})
					}, this.onTimezoneChange = e => {
						this.setState({
							timezoneName: e
						})
					};
					const t = Se(),
						[a, n] = Te(t.startDate),
						[s, o] = Te(t.endDate);
					this.imageDraft = null, this.costOptions = this.getCostDropdownMenuItems(), this.defaultCostOptionValue = this.costOptions.length ? this.costOptions[0].value : Ee, this.state = {
						costValue: e.defaultCoinPrice ? e.defaultCoinPrice : this.defaultCostOptionValue,
						imageError: void 0,
						imageUrl: void 0,
						imageWidth: 0,
						imageHeight: 0,
						isModOnly: e.defaultModOnly || 0 === this.costOptions.length,
						isTemporary: !1,
						startDate: a,
						startTime: n,
						endDate: s,
						endTime: o,
						timezoneName: t.timezoneName,
						nameValue: "",
						websocket: null,
						selectedPackage: I.a.PREMIUM_1_MONTH
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey), this.cancelExistingWebsockets()
				}
				componentDidMount() {
					this.props.sendEvent(Object(u.b)("view", "page", {
						defaultOption: this.state.isModOnly ? I.a.PREMIUM_1_MONTH.priceInCoins : this.props.defaultCoinPrice ? this.props.defaultCoinPrice : this.defaultCostOptionValue
					})), document.addEventListener("keydown", this.handleEscapeKey)
				}
				sendUploadImageEvent(e, t, a, n) {
					const s = (new Date).getTime();
					this.props.sendEvent(Object(u.e)(e, t, s - a, n))
				}
				cancelExistingWebsockets() {
					const {
						websocket: e
					} = this.state;
					e && (e.close(), this.setState({
						websocket: null
					}))
				}
				getModCostDropdownMenuItems() {
					return Object.keys(I.a).map(e => {
						const t = I.a[e];
						return {
							displayText: Object(I.d)(t),
							value: t
						}
					})
				}
				getAwardSubTypeDropdownMenuItems() {
					return Object.keys(y.d).map(e => {
						const t = y.d[e];
						return {
							displayText: t,
							value: t
						}
					})
				}
				timeInputsAreValid() {
					const {
						endDate: e,
						endTime: t,
						startDate: a,
						startTime: n,
						isTemporary: s
					} = this.state;
					if (!1 === s) return !0;
					if (!(a && n && e && t)) return !1;
					const o = Object(D.f)(xe(a, n));
					return !(Object(D.f)(xe(e, t)) < o)
				}
				inputsAreValid() {
					const {
						costValue: e,
						imageUrl: t,
						isModOnly: a,
						nameValue: n
					} = this.state;
					return !!(t && (e || a) && n && this.timeInputsAreValid())
				}
				render() {
					const {
						awards: e,
						className: t,
						onTryCloseModal: a,
						isPending: n,
						subredditId: o,
						isEligibleForTemporaryAwards: r
					} = this.props, {
						imageError: i,
						imageUrl: l,
						isModOnly: c,
						isTemporary: d,
						nameValue: m
					} = this.state, u = e.filter(e => e.awardType === y.f.Moderator);
					return s.a.createElement("section", {
						className: Object(f.a)(t, b.a.communityAwardCreationModal)
					}, s.a.createElement(x.h, null, s.a.createElement(_.a, null, s.a.createElement(x.p, null, p.fbt._("Create Award", null, {
						hk: "JQtjM"
					})), s.a.createElement(N.a, {
						onClick: a,
						disabled: n
					}, s.a.createElement(x.b, null)))), s.a.createElement("form", null, s.a.createElement(x.k, null, s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Name", null, {
						hk: "3PlUgw"
					})), s.a.createElement(S.b, {
						className: b.a.nameInput,
						maxLength: pe,
						name: "awardName",
						onFocus: this.handleNameFocus,
						onBlur: this.handleNameBlur,
						onChange: this.handleNameChange,
						placeholder: p.fbt._("Name of Award", null, {
							hk: "2Z5bIH"
						}),
						type: "text",
						value: m
					})), s.a.createElement("div", {
						className: b.a.formSubtext
					}, pe - m.length)), s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", {
						className: b.a.formLabelText,
						htmlFor: ue
					}, p.fbt._("Image", null, {
						hk: "2XS0KR"
					})), l ? s.a.createElement(z, {
						imageUrl: l,
						onRemove: this.handleImageRemoval
					}) : s.a.createElement(s.a.Fragment, null, s.a.createElement($, {
						id: ue,
						minHeight: be,
						minWidth: Ce,
						maxHeight: fe,
						maxWidth: we,
						maxSizeBytes: ge,
						name: "awardImage",
						onImageChange: this.handleChooseImage,
						onImageUploadFailed: e => {
							this.handleImageUploadError(e), this.sendUploadImageEvent(void 0, null, 0, e)
						},
						shouldBeEqualDimensions: !0,
						subredditId: o
					}), i && s.a.createElement("div", {
						className: b.a.errorText
					}, i), s.a.createElement("div", {
						className: b.a.formSubtext
					}, s.a.createElement("span", null, p.fbt._("Width and height should be equal, and at least {minImageSize}px", [p.fbt._param("minImageSize", Ce)], {
						hk: "2A77pK"
					})), s.a.createElement("span", null, p.fbt._("File size limited to {maxImageFileSize}MB", [p.fbt._param("maxImageFileSize", ge / 1048576)], {
						hk: "2iX7Vn"
					}))))), u.length < E.e && s.a.createElement("div", {
						className: Object(f.a)(b.a.formSection, b.a.modToggleSection)
					}, s.a.createElement("label", null, 0 !== this.costOptions.length && s.a.createElement(O.a, {
						activeColorOverride: w.a.moderator,
						className: b.a.modToggle,
						on: c,
						onToggle: this.handleModOnlyChange
					}), s.a.createElement("span", {
						className: b.a.modToggleLabelText
					}, p.fbt._("Exclusive for Mods", null, {
						hk: "1d7p5V"
					})))), this.renderCostDropdown(), r && s.a.createElement("div", {
						className: Object(f.a)(b.a.formSection, b.a.modToggleSection)
					}, s.a.createElement("label", null, s.a.createElement(O.a, {
						activeColorOverride: w.a.moderator,
						className: b.a.modToggle,
						on: d,
						onToggle: this.handleIsTemporaryChange
					}), s.a.createElement("span", {
						className: b.a.modToggleLabelText
					}, p.fbt._("Make Award Temporary", null, {
						hk: "4GtfNs"
					})))), this.renderDatePicker()), s.a.createElement(x.f, null, s.a.createElement(x.a, {
						onClick: a,
						disabled: n
					}, p.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(x.q, {
						className: b.a.createBtn,
						"data-redditstyle": !0,
						disabled: !this.inputsAreValid() || n,
						onClick: this.handleSubmit
					}, n ? s.a.createElement(k.a, {
						sizePx: he
					}) : p.fbt._("Create", null, {
						hk: "42PxFO"
					})))))
				}
				renderCostDropdown() {
					const {
						costValue: e,
						isModOnly: t,
						selectedPackage: a
					} = this.state;
					if (t) {
						const e = Object(I.d)(a);
						return s.a.createElement("div", {
							className: b.a.formSection
						}, s.a.createElement("label", null, s.a.createElement("span", {
							className: b.a.formLabelText
						}, p.fbt._("Months of Premium to give", null, {
							hk: "3aWnVL"
						})), s.a.createElement(T.b, {
							className: b.a.dropdownSelector,
							displayText: e,
							name: "monthsOfPremium",
							options: this.getModCostDropdownMenuItems(),
							onOpen: this.handlePackageDropdownOpen,
							onSelect: this.handlePremiumAmountChange
						})))
					}
					if (!this.costOptions.length) return null;
					const n = this.costOptions.length ? this.costOptions.find(t => t.value === e) : null,
						o = n ? n.displayText : p.fbt._("None", null, {
							hk: "xWR5E"
						}),
						r = ve(e),
						i = ye(e);
					return s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Coin cost", null, {
						hk: "1cOBVd"
					})), s.a.createElement(T.b, {
						className: b.a.dropdownSelector,
						displayText: o,
						name: "coinCost",
						options: this.costOptions,
						onOpen: this.onCostInputOpen,
						onSelect: this.handleCostChange
					})), s.a.createElement("div", {
						className: b.a.formSubtext
					}, s.a.createElement("span", null, i > 0 ? p.fbt._("{coins-to-community} Coins will go to the community and {coins-to-recipient} will go to the recipient", [p.fbt._param("coins-to-community", r.toLocaleString()), p.fbt._param("coins-to-recipient", i.toLocaleString())], {
						hk: "WQecM"
					}) : p.fbt._("{coins-to-community} Coins will go to the community", [p.fbt._param("coins-to-community", r.toLocaleString())], {
						hk: "3jEOwC"
					}))))
				}
				renderDatePicker() {
					const {
						isTemporary: e
					} = this.state;
					return e ? s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement("fieldset", {
						className: b.a.dateInput
					}, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Start Date and Time", null, {
						hk: "SAI4F"
					})), s.a.createElement(M.a, {
						onChange: this.onStartDateChange,
						value: this.state.startDate
					}), s.a.createElement(F.a, {
						className: b.a.timeInput,
						onChange: this.onStartTimeChange,
						value: this.state.startTime
					})), s.a.createElement("fieldset", {
						className: b.a.dateInput
					}, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("End Date and Time", null, {
						hk: "zCwiW"
					})), s.a.createElement(M.a, {
						onChange: this.onEndDateChange,
						value: this.state.endDate
					}), s.a.createElement(F.a, {
						className: b.a.timeInput,
						onChange: this.onEndTimeChange,
						value: this.state.endTime
					}))), s.a.createElement("div", {
						className: b.a.timezoneDiv
					}, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Time Zone", null, {
						hk: "3do32Y"
					})), s.a.createElement("fieldset", {
						className: b.a.timezoneInput
					}, s.a.createElement(A.a, {
						selectedTimezoneName: this.state.timezoneName,
						onChange: this.onTimezoneChange
					})))) : null
				}
			}
			var Ne = Object(C.a)(ke),
				Oe = a("./src/reddit/controls/NumberInput/index.tsx");
			const _e = "GlobalAwardCreationModalImageInput",
				De = 15,
				Pe = 30,
				Me = 2097152,
				Fe = 512,
				Ae = 512,
				je = 2048,
				Ue = 2048,
				Re = 500,
				Le = e => e.slice(0, 5),
				ze = (e, t) => "".concat(e, "T").concat(Le(t), ":00"),
				We = e => {
					const [t, a] = e.split("T");
					return [t, Le(a)]
				},
				Ve = () => {
					const e = new Date,
						t = Object(D.g)(e);
					return e.setMinutes(e.getMinutes() + 1440), {
						startDate: t,
						endDate: Object(D.g)(e),
						submitTime: P.i.Now,
						timezoneName: Object(D.b)() || D.a
					}
				};
			class He extends s.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						e.keyCode === v.a.Escape && this.props.onTryCloseModal()
					}, this.handleChooseImage = async e => {
						const {
							apiContext: t,
							subredditId: a
						} = this.props;
						this.imageDraft = e;
						const n = (new Date).getTime();
						this.setState({
							imageError: void 0,
							imageHeight: e.height,
							imageWidth: e.width
						});
						const s = await de(t, e, a);
						if (!s.ok) return this.handleImageUploadError(s.error.message), void this.sendUploadImageEvent(void 0, e, (new Date).getTime() - n, s.error.message);
						const {
							s3UploadLease: o,
							websocket: r
						} = s;
						this.setState({
							websocket: r
						});
						const i = await me(o, e);
						if (!i.ok) return this.handleImageUploadError(i.error.message), void this.sendUploadImageEvent(void 0, e, (new Date).getTime() - n, i.error.message);
						const {
							imageUrl: l
						} = i;
						this.setState({
							imageUrl: l
						}), this.sendUploadImageEvent(l, e, (new Date).getTime() - n)
					}, this.handleImageRemoval = () => {
						this.cancelExistingWebsockets(), this.setState({
							imageUrl: void 0
						}), this.props.sendEvent(Object(u.c)("remove", "image"))
					}, this.handleImageUploadError = e => {
						this.cancelExistingWebsockets(), this.setState({
							imageError: e,
							imageUrl: void 0
						})
					}, this.handleNameChange = e => {
						this.setState({
							nameValue: e.target.value
						})
					}, this.handleDescriptionChange = e => {
						this.setState({
							description: e.target.value
						})
					}, this.handleCostChange = e => {
						this.setState({
							costValue: e
						})
					}, this.handleIsTemporaryChange = () => {
						const e = !this.state.isTemporary;
						this.setState({
							isTemporary: e
						})
					}, this.handleIsNewChange = () => {
						const e = !this.state.isNew;
						this.setState({
							isNew: e
						})
					}, this.handleDaysOfDripExtensionChange = e => this.setState({
						daysOfDripExtension: e
					}), this.handleDaysOfPremiumChange = e => this.setState({
						daysOfPremium: e
					}), this.handleCoinRewardChange = e => this.setState({
						coinReward: e
					}), this.handleSubredditCoinRewardChange = e => this.setState({
						subredditCoinReward: e
					}), this.handlePennyDonateChange = e => this.setState({
						pennyDonate: e
					}), this.handlePennyPriceChange = e => this.setState({
						pennyPrice: e
					}), this.handleGiverCoinRewardChange = e => this.setState({
						giverCoinReward: e
					}), this.onCostInputOpen = () => {
						this.props.sendEvent(Object(u.c)("click", "coin_cost_input"))
					}, this.getIconFormatDropdownMenuItems = () => Object.keys(y.c).map(e => ({
						displayText: e,
						value: y.c[e]
					})), this.handleAwardSubTypeChange = e => {
						const t = e.value;
						this.setState({
							selectedAwardSubType: t
						})
					}, this.handleIconFormatChange = e => {
						const t = e.value;
						this.setState({
							selectedIconFormat: t
						})
					}, this.handleSubmit = async e => {
						e.preventDefault();
						const {
							onCreateGlobalAward: t,
							onCreateAwardFailed: a,
							onCreateAwardSuccess: n
						} = this.props, {
							coinReward: s,
							costValue: o,
							daysOfDripExtension: r,
							daysOfPremium: i,
							description: l,
							endDate: c,
							endTime: d,
							giverCoinReward: m,
							imageHeight: h,
							imageUrl: g,
							imageWidth: b,
							isNew: C,
							isTemporary: f,
							nameValue: w,
							pennyDonate: E,
							pennyPrice: v,
							selectedAwardSubType: y,
							selectedIconFormat: I,
							startDate: x,
							startTime: T,
							subredditCoinReward: S,
							websocket: k
						} = this.state;
						if (!(g && w && o && k)) return;
						if (k.readyState !== k.OPEN) {
							return this.handleImageRemoval(), void a(p.fbt._("There was an error creating the award. Please try again.", null, {
								hk: "1pkgpd"
							}))
						}
						const N = ce(k),
							O = Object(D.f)(ze(x, T)),
							_ = Object(D.f)(ze(c, d));
						O.setTime(O.getTime()), _.setTime(_.getTime());
						const P = f ? O.toISOString() : void 0,
							M = f ? _.toISOString() : void 0;
						await t({
							awardName: w,
							awardSubType: y,
							coinCost: o,
							coinReward: s,
							daysOfDripExtension: r,
							daysOfPremium: i,
							description: l,
							giverCoinReward: m,
							endDate: M,
							iconFormat: I,
							imageHeight: h,
							imageUrl: g,
							imageWidth: b,
							isNew: C,
							pennyDonate: E,
							pennyPrice: v,
							startDate: P,
							subredditCoinReward: S
						});
						const F = await N;
						if (!F.ok) {
							return this.handleImageRemoval(), void a(p.fbt._("There was an error creating the award. Please try again.", null, {
								hk: "1pkgpd"
							}))
						}
						const A = F.award;
						A.awardType = A.awardType.toUpperCase(), n(A), this.props.sendEvent(Object(u.a)(this.state.imageUrl, this.imageDraft, A))
					}, this.onStartDateChange = e => {
						this.setState({
							startDate: e
						})
					}, this.onStartTimeChange = e => {
						this.setState({
							startTime: e
						})
					}, this.onEndDateChange = e => {
						this.setState({
							endDate: e
						})
					}, this.onEndTimeChange = e => {
						this.setState({
							endTime: e
						})
					}, this.onTimezoneChange = e => {
						this.setState({
							timezoneName: e
						})
					};
					const t = Ve(),
						[a, n] = We(t.startDate),
						[s, o] = We(t.endDate);
					this.imageDraft = null, this.state = {
						coinReward: 0,
						costValue: Re,
						daysOfDripExtension: 0,
						daysOfPremium: 0,
						description: "",
						giverCoinReward: 0,
						imageError: void 0,
						imageHeight: 0,
						imageUrl: void 0,
						imageWidth: 0,
						isNew: !1,
						isTemporary: !1,
						endDate: s,
						endTime: o,
						nameValue: "",
						selectedAwardSubType: y.d.Global,
						selectedIconFormat: y.c.png,
						subredditCoinReward: 0,
						startDate: a,
						startTime: n,
						pennyDonate: 0,
						pennyPrice: 0,
						timezoneName: t.timezoneName,
						websocket: null
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey), this.cancelExistingWebsockets()
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				sendUploadImageEvent(e, t, a, n) {
					const s = (new Date).getTime();
					this.props.sendEvent(Object(u.e)(e, t, s - a, n))
				}
				cancelExistingWebsockets() {
					const {
						websocket: e
					} = this.state;
					e && (e.close(), this.setState({
						websocket: null
					}))
				}
				getAwardSubTypeDropdownMenuItems() {
					return Object.keys(y.d).map(e => {
						const t = y.d[e];
						return {
							displayText: t,
							value: t
						}
					})
				}
				timeInputsAreValid() {
					const {
						endDate: e,
						endTime: t,
						startDate: a,
						startTime: n,
						isTemporary: s
					} = this.state;
					if (!1 === s) return !0;
					if (!(a && n && e && t)) return !1;
					const o = Object(D.f)(ze(a, n));
					return !(Object(D.f)(ze(e, t)) < o)
				}
				inputsAreValid() {
					const {
						costValue: e,
						imageUrl: t,
						nameValue: a
					} = this.state;
					return !!(t && e && a && this.timeInputsAreValid())
				}
				render() {
					const {
						className: e,
						onTryCloseModal: t,
						isPending: a,
						subredditId: n
					} = this.props, {
						description: o,
						imageError: r,
						imageUrl: i,
						isTemporary: l,
						nameValue: c
					} = this.state;
					return s.a.createElement("section", {
						className: Object(f.a)(e, b.a.communityAwardCreationModal)
					}, s.a.createElement(x.h, null, s.a.createElement(_.a, null, s.a.createElement(x.p, null, p.fbt._("Create Award", null, {
						hk: "JQtjM"
					})), s.a.createElement(N.a, {
						onClick: t,
						disabled: a
					}, s.a.createElement(x.b, null)))), s.a.createElement("form", null, s.a.createElement(x.k, null, s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Name", null, {
						hk: "3PlUgw"
					})), s.a.createElement(S.b, {
						className: b.a.nameInput,
						maxLength: Pe,
						name: "awardName",
						onChange: this.handleNameChange,
						placeholder: p.fbt._("Name of Award", null, {
							hk: "2Z5bIH"
						}),
						type: "text",
						value: c
					})), s.a.createElement("div", {
						className: b.a.formSubtext
					}, Pe - c.length)), s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", {
						className: b.a.formLabelText,
						htmlFor: _e
					}, p.fbt._("Image", null, {
						hk: "2XS0KR"
					})), i ? s.a.createElement(z, {
						imageUrl: i,
						onRemove: this.handleImageRemoval
					}) : s.a.createElement(s.a.Fragment, null, s.a.createElement($, {
						id: _e,
						minHeight: Fe,
						minWidth: Ae,
						maxHeight: je,
						maxWidth: Ue,
						maxSizeBytes: Me,
						name: "awardImage",
						onImageChange: this.handleChooseImage,
						onImageUploadFailed: e => {
							this.handleImageUploadError(e), this.sendUploadImageEvent(void 0, null, 0, e)
						},
						shouldBeEqualDimensions: !0,
						subredditId: n
					}), r && s.a.createElement("div", {
						className: b.a.errorText
					}, r), s.a.createElement("div", {
						className: b.a.formSubtext
					}, s.a.createElement("span", null, p.fbt._("Width and height should be equal, and at least {minImageSize}px", [p.fbt._param("minImageSize", Ae)], {
						hk: "2A77pK"
					})), s.a.createElement("span", null, p.fbt._("File size limited to {maxImageFileSize}MB", [p.fbt._param("maxImageFileSize", Me / 1048576)], {
						hk: "2iX7Vn"
					}))))), s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Description", null, {
						hk: "162GGk"
					})), s.a.createElement(x.s, {
						name: "description",
						onChange: this.handleDescriptionChange,
						placeholder: p.fbt._("Award Description", null, {
							hk: "22gFWn"
						}),
						value: o
					})), s.a.createElement("div", {
						className: b.a.formSubtext
					}, p.fbt._('Use "{coinSymbol}" for the coin symbol', [p.fbt._param("coinSymbol", "%{coin_symbol}")], {
						hk: "40lFWr"
					}))), this.renderCostSelector(), s.a.createElement("div", {
						className: Object(f.a)(b.a.formSection, b.a.modToggleSection)
					}, s.a.createElement("label", null, s.a.createElement(O.a, {
						activeColorOverride: w.a.moderator,
						className: b.a.modToggle,
						on: l,
						onToggle: this.handleIsTemporaryChange
					}), s.a.createElement("span", {
						className: b.a.modToggleLabelText
					}, p.fbt._("Make Award Temporary", null, {
						hk: "4GtfNs"
					})))), this.renderDatePicker(), this.renderGlobalAwardOptions()), s.a.createElement(x.f, null, s.a.createElement(x.a, {
						onClick: t,
						disabled: a
					}, p.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(x.q, {
						className: b.a.createBtn,
						"data-redditstyle": !0,
						disabled: !this.inputsAreValid() || a,
						onClick: this.handleSubmit
					}, a ? s.a.createElement(k.a, {
						sizePx: De
					}) : p.fbt._("Create", null, {
						hk: "42PxFO"
					})))))
				}
				renderAwardSubTypeDropdown() {
					const {
						selectedAwardSubType: e
					} = this.state;
					return s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Award Sub Type", null, {
						hk: "31fnRs"
					})), s.a.createElement(T.b, {
						className: b.a.dropdownSelector,
						displayText: e,
						name: "awardSubType",
						options: this.getAwardSubTypeDropdownMenuItems(),
						onSelect: this.handleAwardSubTypeChange
					})))
				}
				renderIconFormatDropdown() {
					const {
						selectedIconFormat: e
					} = this.state;
					return s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Image format", null, {
						hk: "11p9LQ"
					})), s.a.createElement(T.b, {
						className: b.a.dropdownSelector,
						displayText: e,
						name: "iconFormat",
						options: this.getIconFormatDropdownMenuItems(),
						onSelect: this.handleIconFormatChange
					})))
				}
				renderCostSelector() {
					const {
						costValue: e
					} = this.state;
					return s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Coin cost", null, {
						hk: "1cOBVd"
					})), s.a.createElement(Oe.a, {
						className: b.a.coinInput,
						name: "cost of award",
						onChange: this.handleCostChange,
						value: e
					})))
				}
				renderDatePicker() {
					const {
						isTemporary: e
					} = this.state;
					return e ? s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement("fieldset", {
						className: b.a.dateInput
					}, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Start Date and Time", null, {
						hk: "SAI4F"
					})), s.a.createElement(M.a, {
						onChange: this.onStartDateChange,
						value: this.state.startDate
					}), s.a.createElement(F.a, {
						className: b.a.timeInput,
						onChange: this.onStartTimeChange,
						value: this.state.startTime
					})), s.a.createElement("fieldset", {
						className: b.a.dateInput
					}, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("End Date and Time", null, {
						hk: "zCwiW"
					})), s.a.createElement(M.a, {
						onChange: this.onEndDateChange,
						value: this.state.endDate
					}), s.a.createElement(F.a, {
						className: b.a.timeInput,
						onChange: this.onEndTimeChange,
						value: this.state.endTime
					}))), s.a.createElement("div", {
						className: b.a.timezoneDiv
					}, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Time Zone", null, {
						hk: "3do32Y"
					})), s.a.createElement("fieldset", {
						className: b.a.timezoneInput
					}, s.a.createElement(A.a, {
						selectedTimezoneName: this.state.timezoneName,
						onChange: this.onTimezoneChange
					})))) : null
				}
				renderGlobalAwardOptions() {
					const {
						coinReward: e,
						daysOfDripExtension: t,
						daysOfPremium: a,
						giverCoinReward: n,
						isNew: o,
						subredditCoinReward: r,
						pennyDonate: i,
						pennyPrice: l
					} = this.state;
					return s.a.createElement(s.a.Fragment, null, this.renderIconFormatDropdown(), this.renderAwardSubTypeDropdown(), s.a.createElement("div", {
						className: Object(f.a)(b.a.formSection, b.a.modToggleSection)
					}, s.a.createElement("label", null, s.a.createElement(O.a, {
						activeColorOverride: w.a.moderator,
						className: b.a.modToggle,
						on: o,
						onToggle: this.handleIsNewChange
					}), s.a.createElement("span", {
						className: b.a.modToggleLabelText
					}, p.fbt._("Show NEW Badge", null, {
						hk: "MIflT"
					})))), s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Price in Pennies (this makes Award Cash only purchasable)", null, {
						hk: "4ACqwC"
					})), s.a.createElement(Oe.a, {
						className: b.a.coinInput,
						name: "penny price",
						onChange: this.handlePennyPriceChange,
						value: l
					})), s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.globalLabelText
					}, p.fbt._("Pennies Donated", null, {
						hk: "61DzJ"
					})), s.a.createElement(Oe.a, {
						className: b.a.coinInput,
						name: "penny donated",
						onChange: this.handlePennyDonateChange,
						value: i
					})), s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.globalLabelText
					}, p.fbt._("Giver Coin Reward", null, {
						hk: "3ZwXG8"
					})), s.a.createElement(Oe.a, {
						className: b.a.coinInput,
						name: "coin reward",
						onChange: this.handleGiverCoinRewardChange,
						value: n
					}))), s.a.createElement("div", {
						className: b.a.formSection
					}, s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.formLabelText
					}, p.fbt._("Days of Drip Extension", null, {
						hk: "3rnKnC"
					})), s.a.createElement(Oe.a, {
						className: b.a.coinInput,
						name: "days of drip extension",
						onChange: this.handleDaysOfDripExtensionChange,
						value: t
					})), s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.globalLabelText
					}, p.fbt._("Days of Premium", null, {
						hk: "2nPLUJ"
					})), s.a.createElement(Oe.a, {
						className: b.a.coinInput,
						name: "days of premium",
						onChange: this.handleDaysOfPremiumChange,
						value: a
					})), s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.globalLabelText
					}, p.fbt._("Coin Reward", null, {
						hk: "2QMoAk"
					})), s.a.createElement(Oe.a, {
						className: b.a.coinInput,
						name: "coin reward",
						onChange: this.handleCoinRewardChange,
						value: e
					})), s.a.createElement("label", null, s.a.createElement("span", {
						className: b.a.globalLabelText
					}, p.fbt._("Subreddit Coin Reward", null, {
						hk: "3QSEXY"
					})), s.a.createElement(Oe.a, {
						className: b.a.coinInput,
						name: "subreddit coin reward",
						onChange: this.handleSubredditCoinRewardChange,
						value: r
					}))))
				}
			}
			var Be = Object(C.a)(He);

			function Ge() {
				return (Ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ke = Object(r.c)({
					awards: m.e,
					isPending: m.c,
					isEligibleForGlobalAwards: (e, t) => {
						let {
							subredditId: a
						} = t;
						return Object(l.b)(a)
					},
					isEligibleForTemporaryAwards: (e, t) => {
						let {
							subredditId: a
						} = t;
						return Object(c.a)(a)
					}
				}),
				qe = Object(o.b)(Ke, (e, t) => {
					let {
						subredditId: a
					} = t;
					return {
						onCreateCommunityAward: (t, n, s, o, r, i, l) => e(Object(d.d)(a, t, n, s, o, r, i, l)),
						onCreateModAward: (t, n, s, o, r, i, l) => e(Object(d.f)(a, t, n, s, o, r, i, l)),
						onCreateGlobalAward: t => {
							let {
								awardName: a,
								awardSubType: n,
								coinCost: s,
								coinReward: o,
								daysOfDripExtension: r,
								daysOfPremium: i,
								description: l,
								endDate: c,
								giverCoinReward: m,
								iconFormat: u,
								imageHeight: h,
								imageUrl: p,
								imageWidth: g,
								isNew: b,
								pennyPrice: C,
								pennyDonate: f,
								startDate: w,
								subredditCoinReward: E
							} = t;
							return e(Object(d.e)({
								awardSubType: n,
								coinPrice: s,
								coinReward: o,
								daysOfPremium: i,
								daysOfDripExtension: r,
								description: l,
								endsAt: c,
								giverCoinReward: m,
								iconFormat: u,
								iconUrl: p,
								iconWidth: g,
								iconHeight: h,
								isNew: b,
								pennyPrice: C,
								pennyDonate: f,
								name: a,
								startsAt: w,
								subredditCoinReward: E
							}))
						},
						onCreateAwardFailed: t => e(Object(d.b)(t)),
						onCreateAwardSuccess: t => e(Object(d.c)({
							award: t,
							subredditId: a
						}))
					}
				});
			t.default = Object(i.b)(qe(Object(h.c)(class extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							isPending: e,
							sendEvent: t,
							toggleModal: a
						} = this.props;
						e || (t(Object(u.c)("click", "cancel")), a())
					}
				}
				render() {
					return this.props.isEligibleForGlobalAwards ? s.a.createElement(Be, Ge({}, this.props, {
						onTryCloseModal: this.onTryCloseModal,
						withOverlay: !0,
						onOverlayClick: this.onTryCloseModal
					})) : s.a.createElement(Ne, Ge({}, this.props, {
						onTryCloseModal: this.onTryCloseModal,
						withOverlay: !0,
						onOverlayClick: this.onTryCloseModal
					}))
				}
			})))
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, a) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				r = a("./src/lib/lessComponent.tsx"),
				i = a("./src/reddit/components/FocusableContent/index.m.less"),
				l = a.n(i);
			t.a = r.a.wrapped(e => s.a.createElement("div", {
				className: Object(o.a)(e.className, {
					[l.a.isFocused]: e.isFocused,
					[l.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", l.a)
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_3A53iTDZ6H1L--Ky3qNCTO",
				container: "_3A53iTDZ6H1L--Ky3qNCTO",
				Select: "_2ryUqzbCnNhx8nbFXg9-c0",
				select: "_2ryUqzbCnNhx8nbFXg9-c0",
				Delimiter: "_1X2oFpzvpth9SVe2-xCR9D",
				delimiter: "_1X2oFpzvpth9SVe2-xCR9D"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less": function(e, t, a) {
			e.exports = {
				Input: "_1Css-vhkiry0RZJBBPrnRI",
				input: "_1Css-vhkiry0RZJBBPrnRI"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return T
			}));
			var n = a("./node_modules/lodash/once.js"),
				s = a.n(n),
				o = a("./node_modules/react/index.js"),
				r = a.n(o),
				i = (a("./node_modules/core-js/modules/es6.regexp.split.js"), a("./node_modules/lodash/range.js")),
				l = a.n(i),
				c = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less"),
				d = a.n(c),
				m = a("./src/lib/lessComponent.tsx");
			const u = m.a.div("Container", d.a),
				h = m.a.select("Select", d.a),
				p = m.a.span("Delimiter", d.a),
				g = 2018,
				b = e => {
					const t = new Date;
					return new Date(t.getFullYear(), e).toLocaleDateString([], {
						month: "short"
					})
				},
				C = e => {
					const [t, a, n] = e.split("-").map(Number);
					return {
						year: t,
						month: a - 1,
						day: n
					}
				};
			class f extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = Object.assign(Object.assign({}, C(this.props.value)), e),
							{
								year: a,
								month: n,
								day: s
							} = t,
							o = new Date(Date.UTC(a, n, s)).toISOString().slice(0, 10);
						this.props.onChange(o)
					}, this.onChangeYear = e => {
						const t = +e.target.value;
						this.onChange({
							year: t
						})
					}, this.onChangeMonth = e => {
						const t = +e.target.value;
						this.onChange({
							month: t
						})
					}, this.onChangeDay = e => {
						const t = +e.target.value;
						this.onChange({
							day: t
						})
					}
				}
				render() {
					const {
						year: e,
						month: t,
						day: a
					} = C(this.props.value);
					return r.a.createElement(u, {
						className: this.props.className
					}, r.a.createElement(h, {
						onChange: this.onChangeMonth,
						value: t
					}, l()(12).map(e => r.a.createElement("option", {
						key: e,
						value: e
					}, b(e)))), r.a.createElement(p, null, "/"), r.a.createElement(h, {
						onChange: this.onChangeDay,
						value: a
					}, l()(1, 32).map(e => r.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), r.a.createElement(p, null, "/"), r.a.createElement(h, {
						onChange: this.onChangeYear,
						value: e
					}, l()(g, g + 10).map(e => r.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var w = f,
				E = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				v = a.n(E);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				x = m.a.input("Input", v.a);

			function T(e) {
				return I() ? r.a.createElement(x, y({
					type: "date"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : r.a.createElement(w, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "Q-u1MdpyF-DbsLmmseQmg",
				container: "Q-u1MdpyF-DbsLmmseQmg",
				Input: "_2UYlo-ZbVNGY329O9jwCzC",
				input: "_2UYlo-ZbVNGY329O9jwCzC",
				Delimiter: "_2a_r5Jp8FH3k8flNGKLy5f",
				delimiter: "_2a_r5Jp8FH3k8flNGKLy5f"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less": function(e, t, a) {
			e.exports = {
				TimeInput: "gRgwdQKTQf9yT3db3ACAy",
				timeInput: "gRgwdQKTQf9yT3db3ACAy"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return T
			}));
			var n = a("./node_modules/lodash/once.js"),
				s = a.n(n),
				o = a("./node_modules/react/index.js"),
				r = a.n(o),
				i = (a("./node_modules/core-js/modules/es6.regexp.split.js"), a("./node_modules/lodash/clamp.js")),
				l = a.n(i),
				c = a("./src/reddit/components/FocusableContent/index.tsx"),
				d = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less"),
				m = a.n(d),
				u = a("./src/lib/lessComponent.tsx");
			const h = u.a.wrapped(c.a, "Container", m.a),
				p = u.a.input("Input", m.a),
				g = u.a.span("Delimiter", m.a),
				b = e => ("0" + e).slice(-2),
				C = (e, t) => {
					const a = +e.slice(-2);
					if (Number.isInteger(a)) return a > t ? 0 : a
				};
			class f extends r.a.PureComponent {
				constructor(e) {
					super(e), this.callOnChange = () => {
						let e = l()(+this.state.hour, 0, 24);
						const t = l()(+this.state.minute, 0, 59);
						24 === e && t > 0 && (e = 0), this.setState({
							hour: e,
							minute: t
						});
						const a = "".concat(b(e), ":").concat(b(t));
						this.props.onChange(a)
					}, this.onChangeHour = e => {
						const t = C(e.target.value, 24);
						void 0 !== t && this.setState({
							hour: t
						}, this.callOnChange)
					}, this.onChangeMinute = e => {
						const t = C(e.target.value, 59);
						void 0 !== t && this.setState({
							minute: t
						}, this.callOnChange)
					}, this.onHourInputBlur = () => this.setState({
						isHourInputFocused: !1
					}), this.onHourInputFocus = () => this.setState({
						isHourInputFocused: !0
					}), this.onMinuteInputBlur = () => this.setState({
						isMinuteInputFocused: !1
					}), this.onMinuteInputFocus = () => this.setState({
						isMinuteInputFocused: !0
					});
					const [t, a] = e.value.split(":").map(Number);
					this.state = {
						hour: t,
						minute: a,
						isHourInputFocused: !1,
						isMinuteInputFocused: !1
					}
				}
				componentWillReceiveProps(e) {
					const [t, a] = e.value.split(":").map(Number);
					this.setState({
						hour: t,
						minute: a
					})
				}
				render() {
					const e = this.state.isHourInputFocused || this.state.isMinuteInputFocused;
					return r.a.createElement(h, {
						className: this.props.className,
						isFocused: e
					}, r.a.createElement(p, {
						type: "number",
						onChange: this.onChangeHour,
						onFocus: this.onHourInputFocus,
						onBlur: this.onHourInputBlur,
						value: b(this.state.hour)
					}), r.a.createElement(g, null, ":"), r.a.createElement(p, {
						type: "number",
						onChange: this.onChangeMinute,
						onFocus: this.onMinuteInputFocus,
						onBlur: this.onMinuteInputBlur,
						value: b(this.state.minute)
					}))
				}
			}
			var w = f,
				E = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				v = a.n(E);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				x = u.a.input("TimeInput", v.a);

			function T(e) {
				return I() ? r.a.createElement(x, y({
					type: "time"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : r.a.createElement(w, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less": function(e, t, a) {
			e.exports = {
				select: "_1gQeiuYndtyKo6Or5iS8xL"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/es6.array.sort.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				r = a("./src/lib/loadWithRetries/index.ts"),
				i = a("./src/reddit/helpers/scheduledPosts/index.ts"),
				l = a("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less"),
				c = a.n(l);
			const d = e => {
				const t = e.map(i.d);
				return t.sort((e, t) => {
					const a = -1440,
						{
							offset: n = a
						} = e,
						{
							offset: s = a
						} = t;
					return s - n || (e.displayText < t.displayText ? -1 : 1) || 0
				}), t
			};
			class m extends s.a.PureComponent {
				constructor(e) {
					super(e), this.onSelect = e => {
						const t = e.target.value;
						this.props.onChange(t)
					};
					const t = m.cachedTimezoneOptions || d([this.props.selectedTimezoneName]);
					this.state = {
						timezoneOptions: t
					}
				}
				async loadTimezones() {
					const e = (await Object(r.a)(() => a.e("TimezoneList").then(a.bind(null, "./src/lib/timezone/timezoneList.ts")))).default,
						t = d(e);
					this.setState({
						timezoneOptions: t
					}), m.cachedTimezoneOptions = t
				}
				componentDidMount() {
					m.cachedTimezoneOptions || this.loadTimezones()
				}
				render() {
					return s.a.createElement("select", {
						onChange: this.onSelect,
						value: this.props.selectedTimezoneName,
						className: Object(o.a)(c.a.select, this.props.className)
					}, this.state.timezoneOptions.map(e => {
						let {
							name: t,
							displayText: a
						} = e;
						return s.a.createElement("option", {
							key: t,
							value: t
						}, a)
					}))
				}
			}
			t.a = m
		},
		"./src/reddit/controls/NumberInput/index.m.less": function(e, t, a) {
			e.exports = {
				inputId: "_2u55GXL0tixR3CDSXDptAh",
				numberInput: "w-WaN4v2qJbrNH2KHKl22",
				buttonContainer: "_1jxskdr4hjRXJPk9GUqGX5",
				chevronBtn: "_2V0mlaYUMWvXR35HSCUhVt",
				icon: "_2YiYPzVRljNQIohYKWAbZm"
			}
		},
		"./src/reddit/controls/NumberInput/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return h
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/controls/FormFields/index.tsx"),
				i = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = a("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				c = a("./src/reddit/controls/NumberInput/index.m.less"),
				d = a.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var a = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (a[n[s]] = e[n[s]])
				}
				return a
			};
			class h extends s.a.Component {
				constructor() {
					super(...arguments), this.inputRef = null, this.handleIncrement = e => {
						if (e.preventDefault(), !this.inputRef) return;
						this.inputRef.stepUp();
						const {
							onChange: t,
							onIncrease: a,
							value: n
						} = this.props;
						this.inputRef.value !== n && (t(parseFloat(this.inputRef.value)), a && a())
					}, this.handleDecrement = e => {
						if (e.preventDefault(), !this.inputRef) return;
						this.inputRef.stepDown();
						const {
							onChange: t,
							onDecrease: a,
							value: n
						} = this.props;
						this.inputRef.value !== n && (t(parseFloat(this.inputRef.value)), a && a())
					}, this.handleChangeEvent = e => {
						const t = e.target.value;
						this.props.onChange(parseFloat(t))
					}, this.focusOnInput = e => {
						e.preventDefault(), this.inputRef && this.inputRef.focus()
					}, this.setInputRef = e => this.inputRef = e
				}
				render() {
					const e = this.props,
						{
							className: t,
							id: a
						} = e,
						n = u(e, ["className", "id"]),
						c = a || d.a.inputId;
					return s.a.createElement(r.b, m({}, n, {
						className: Object(o.a)(t, d.a.numberInput),
						id: c,
						inputRef: this.setInputRef,
						onChange: this.handleChangeEvent,
						type: "number"
					}), s.a.createElement("div", {
						className: d.a.buttonContainer
					}, s.a.createElement("button", {
						"aria-controls": c,
						className: d.a.chevronBtn,
						onClick: this.handleIncrement,
						onMouseDown: this.focusOnInput,
						tabIndex: -1
					}, s.a.createElement(l.a, {
						className: d.a.icon
					})), s.a.createElement("button", {
						"aria-controls": c,
						className: d.a.chevronBtn,
						onClick: this.handleDecrement,
						onMouseDown: this.focusOnInput,
						tabIndex: -1
					}, s.a.createElement(i.a, {
						className: d.a.icon
					}))))
				}
			}
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "d", (function() {
				return r
			})), a.d(t, "b", (function() {
				return i
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js");
			const s = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				o = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const a = [];
					for (const n in s) {
						const o = s[n];
						(o.priceInCoins <= e || t) && a.push(o)
					}
					return a
				},
				r = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				i = [{
					prompt: () => n.fbt._("What is a Reddit Premium Membership?", null, {
						hk: "3ibd7e"
					}),
					answer: () => n.fbt._("Reddit Premium is our subscription membership program, and it directly supports Reddit and the communities that it hosts. It offers an entirely ads-free Reddit experience as well as other benefits, including monthly Coins and access to the exclusive r/lounge community.", null, {
						hk: "22tBeJ"
					})
				}, {
					prompt: () => n.fbt._("Why change the name to Premium? What happened to calling it Gold?", null, {
						hk: "buZNC"
					}),
					answer: () => n.fbt._("The membership has a new name for a good reason. Many people confused the subscription Reddit Gold membership with a virtual good or coin. To make things easier to understand, we’ve renamed the membership to “Reddit Premium”, while the virtual good is called “Coins”. We have kept your favorite features and added more.", null, {
						hk: "2CCKCo"
					})
				}, {
					prompt: () => n.fbt._("What if I was subscribed to the old Gold Membership program?", null, {
						hk: "2Mv367"
					}),
					answer: () => n.fbt._("Fine people everywhere with a Gold Membership are now members of Reddit Premium. It still offers the same great ads-free browsing experience and access to r/lounge, but now you will also receive Coins monthly so you can award exceptional contributions.", null, {
						hk: "IQrwR"
					})
				}, {
					prompt: () => n.fbt._("The Premium membership gives me Coins, what are those for?", null, {
						hk: "4FMg0V"
					}),
					answer: () => n.fbt._("Coins are a virtual good, and you can use them to award exceptional posts or comments with a Silver, Gold, or Platinum Award. This is a way to show appreciation for an exceptional contribution to Reddit, and can also grant the recipient special bonus benefits. You can award someone by clicking on “Give Award” below a post or comment.", null, {
						hk: "46r7Aq"
					})
				}, {
					prompt: () => n.fbt._("Do I have to subscribe to Reddit Premium to get Coins?", null, {
						hk: "boE6i"
					}),
					answer: () => n.fbt._("Monthly Coins are a great benefit for being a Premium member, but if you wish you can also buy individual quantities of Coins. Additionally, you will receive Coins if you are awarded Gold or Platinum.", null, {
						hk: "36zEKr"
					})
				}]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AwardCreationModal.27baa2f75d76336a7ac9.js.map